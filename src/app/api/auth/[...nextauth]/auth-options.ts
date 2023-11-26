import {
  NEXT_PUBLIC_AUTH_API_V2,
  NEXT_PUBLIC_AUTH_LOGIN_ENDPOINT,
} from '@/data/constants/env';
import { LoginRequestDTO, LoginResponseDTO } from '@/domain';
import { httpRequest } from '@/services/http/httpRequest';
import { HttpMethod, setAuthToken } from '@/utils/http';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { pagesOptions } from './pages-options';

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    ...pagesOptions,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password || !credentials) {
          return null;
        }

        const { email, password } = credentials;

        const res = await httpRequest<LoginRequestDTO, LoginResponseDTO>(
          `/${NEXT_PUBLIC_AUTH_API_V2}/${NEXT_PUBLIC_AUTH_LOGIN_ENDPOINT}`,
          HttpMethod.POST,
          { email, password }
        );

        if (!res) {
          return null;
        }

        setAuthToken(res.data.accessToken);

        return res.data as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.accessToken = token.accessToken;

      return session;
    },
    async redirect({ url, baseUrl }) {
      const parsedUrl = new URL(url, baseUrl);
      if (parsedUrl.searchParams.has('callbackUrl')) {
        return `${baseUrl}${parsedUrl.searchParams.get('callbackUrl')}`;
      }
      if (parsedUrl.origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
};
