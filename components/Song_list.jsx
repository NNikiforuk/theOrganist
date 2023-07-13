import Song from "./Song";

const Song_list = ({ songs }) => {
	return (
		<div className="song_list">
			{songs.map((song) => (
				<Song key={song._id} song={song} />
			))}
		</div>
	);
};

export default Song_list;
