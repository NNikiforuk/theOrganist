import { song_types } from "@utils/song_types";

const Track = () => {
	return (
		<div className="track">
			<form>

				{song_types.map((song_type) => (
					<label className="track_label">
						{song_type}
						<input type="text" className="track_input" />
					</label>
				))}
			</form>
		</div>
	);
};

export default Track;
