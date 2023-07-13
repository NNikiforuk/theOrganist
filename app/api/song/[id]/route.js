import { connectMongo } from "@utils/database";
import Title from "@models/title";

export const GET = async (req, { params }) => {
	try {
		await connectMongo();

		const title = await Title.findById(params.id).populate("creator");
		if (!title) return new Response("Title not found", { status: 404 });

		return new Response(JSON.stringify(title), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch songs", {
			status: 500,
		});
	}
};

export const PATCH = async (req, { params }) => {
	const { title, tag } = await req.json();

	try {
		await connectMongo();

		const existingTitle = await Title.findById(params.id);
		if (!existingTitle) return new Response("Title not found", { status: 404 });

		existingTitle.title = title;
		existingTitle.tag = tag;

		await existingTitle.save();

		return new Response(JSON.stringify(existingTitle), { status: 200 });
	} catch (error) {
		return new Response("Failed to update the song", { status: 500 });
	}
};

export const DELETE = async (req, { params }) => {
	try {
		await connectMongo();

		await Title.findByIdAndRemove(params.id);
		return new Response("Song deleted successfully", { status: 200 });
	} catch (error) {
		return new Response("Failed to delete the song", { status: 500 });
	}
};
