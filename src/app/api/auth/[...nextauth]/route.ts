import NextAuth from 'next-auth';
import { makeAuthOptions } from './auth-options';

const handler = NextAuth(makeAuthOptions());

export { handler as GET, handler as POST };
