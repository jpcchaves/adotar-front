import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      firstName: string;
      lastName: string;
      name: string;
      username: string;
      email: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date;
      active: boolean;
      admin: boolean;
    };
    accessToken: string;
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      firstName: string;
      lastName: string;
      name: string;
      username: string;
      email: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date;
      active: boolean;
      admin: boolean;
    };
    accessToken: string;
  }
}
