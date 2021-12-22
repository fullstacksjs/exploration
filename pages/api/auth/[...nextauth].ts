import { getRequiredEnv } from '@fullstacksjs/toolbox';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: getRequiredEnv('GITHUB_ID'),
      clientSecret: getRequiredEnv('GITHUB_SECRET'),
    }),
  ],
  secret: getRequiredEnv('NEXTAUTH_SECRET'),
  callbacks: {
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
  },
});
