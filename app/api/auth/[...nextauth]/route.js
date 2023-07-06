import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectMongo } from "@utils/database";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async session({ session }) {
			return session;
		},
		async signIn({ profile }) {
			try {
				await connectMongo();
				
			} catch (error) {}
		},
	},
});

export { handler as GET, handler as POST };