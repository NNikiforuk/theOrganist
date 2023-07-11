import { connectMongo } from "@utils/database";
import Song from "@models/song";

const POST = async (request) => {
	const { title, userId, tag } = request.json();

	try {
		await connectMongo();

		const newSong = new Song({
			creator: userId,
			title,
			tag,
		});

		await newSong.save();
		return new Response(JSON.stringify(newSong), {
			status: 201,
		});
	} catch (error) {
		return new Response("Failed to add the song", {
			status: 500,
		});
	}
};
