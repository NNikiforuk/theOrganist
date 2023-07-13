import { connectMongo } from "@utils/database";
import Title from "@models/title";

export const GET = async (req, {params}) => {
	try {
		await connectMongo();

		const titles = await Title.find({
            creator: params.id
        }).populate("creator");

		return new Response(JSON.stringify(titles), {
			status: 200,
		});
	} catch (error) {
		return new Response("Failed to fetch songs", {
			status: 500,
		});
	}
};
