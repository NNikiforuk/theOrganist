import { Schema, model, models } from "mongoose";

const TitleSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	title: {
		type: String,
		required: [true, "Title is required"],
	},
	tag: {
		type: String,
		required: [true, "Tag is required"],
	},
	secondaryTag: {
		type: String,
		required: [true, "Tag is required"],
	},
});

const Title = models.Title || model("Title", TitleSchema);

export default Title;
