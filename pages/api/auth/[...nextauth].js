import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { Prisma } from "@prisma/client"
export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(Prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)