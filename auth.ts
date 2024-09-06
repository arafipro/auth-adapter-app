import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { getDb } from "./drizzle/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "./drizzle/schema";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const db = getDb();
  return {
    providers: [GitHub, Google],
    adapter: DrizzleAdapter(db, {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens,
    }),
    pages: {
      signIn: "/signin",
    },
  };
});
