import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { authOptions } from './auth-options';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const remember = body.remember === 'true';

  return await NextAuth({
    ...authOptions,
    session: {
      strategy: 'jwt',
      maxAge: remember ? 15 * 24 * 60 * 60 : 20,
    },
  });
};

export { handler as GET, handler as POST };
