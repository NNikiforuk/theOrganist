import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
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
			console.log("session");

			const sessionUser = await User.findOne({ email: session.user.email });
			session.user.id = sessionUser._id.toString();

			return session;
		},
		async signIn({ profile }) {
			console.log("signIn");

			try {
				await connectMongo();

				const userExists = await User.findOne({
					email: profile.email,
				});

				if (!userExists) {
					console.log(`Creating user with ${profile.email} ${profile.name}`);

					await User.create({
						email: profile.email,
						username: profile.name.replace(" ", "").toLowerCase(),
						image: profile.picture,
					});
				}

				return true;
			} catch (error) {
				console.error("Error checking if user exists: ", error.message);
				return false;
			}
		},
	},
});

export { handler as GET, handler as POST };
