import Song from "./Song";

const Song_list = ({ songs }) => {

	const sortSongs = [...songs].sort((a, b) => (a.tag > b.tag ? 1 : -1));

	return (
		<div className="song_list">
			{sortSongs.map((song) => (
				<Song key={song._id} song={song} />
			))}
		</div>
	);
};

export default Song_list;
