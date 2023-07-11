import { Schema, model, models } from "mongoose";

const SongSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
        ref: "Song"
	},
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    }

});

const Song = models.Song || model("Song", SongSchema);

export default Song;
