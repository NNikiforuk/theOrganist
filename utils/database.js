import mongoose from "mongoose";

let isConnected = false;

const connectMongo = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDB is already connected");
		return;
	}

	try {
		await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
			dbName: "track_list",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		isConnected(true);
		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
};

export default connectMongo;
