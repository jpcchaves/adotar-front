import {
  NEXT_PUBLIC_AUTH_API_V2,
  NEXT_PUBLIC_AUTH_LOGIN_ENDPOINT,
} from '@/data/constants/env';
import { LoginRequestDTO, LoginResponseDTO } from '@/domain';
import { HttpMethod, httpRequest, setAuthToken } from '@/utils/http';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { pagesOptions } from './pages-options';

const FIFTEEN_DAYS_IN_SECONDS = 1296000;
const TEN_MINUTES_IN_SECONDS = 600;

export const makeAuthOptions = (): NextAuthOptions => {
  let rememberUser = false;

  return {
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
          remember: {
            label: 'remember',
            type: 'checkbox',
          },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials.password || !credentials) {
            return null;
          }

          const { email, password, remember } = credentials;

          const res = await httpRequest<LoginRequestDTO, LoginResponseDTO>(
            HttpMethod.POST,
            `/${NEXT_PUBLIC_AUTH_API_V2}/${NEXT_PUBLIC_AUTH_LOGIN_ENDPOINT}`,
            { email, password }
          );

          if (!res) {
            return null;
          }

          setAuthToken(res.accessToken);
          rememberUser = remember === 'true';

          return res as any;
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

        if (token.accessToken) {
          setAuthToken(token.accessToken);
        }

        return session;
      },
      async redirect({ url, baseUrl }) {
        return baseUrl;
      },
      async signIn() {
        return true;
      },
    },
    session: {
      strategy: 'jwt',
      maxAge: rememberUser ? FIFTEEN_DAYS_IN_SECONDS : TEN_MINUTES_IN_SECONDS,
    },
  };
};
