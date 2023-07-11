import { connectMongo } from "@utils/database";

const POST = async (request) => {
	const { title, userId, tag } = request.json();

	try {
		await connectMongo();
	} catch (error) {
		console.log(error);
	}
};
