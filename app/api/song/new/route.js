import { connectMongo } from "@utils/database";
import Title from "@models/title";

export const POST = async (req) => {
	const { title, userId, tag } = await req.json();

	try {
		await connectMongo();

		const newTitle = new Title({
			creator: userId,
			title,
			tag,
		});

		await newTitle.save();
		return new Response(JSON.stringify(newTitle), {
			status: 201,
		});
	} catch (error) {
		console.error(error);
		return new Response(`Failed to add the song, due to error: ${error}`, {
			status: 500,
		});
	}
};
