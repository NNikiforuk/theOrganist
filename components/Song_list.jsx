import Song from "./Song";

const Song_list = ({ songs, inputValue }) => {
	const filteredSongs = songs.filter((song) => {
		if (inputValue === "") {
			return song;
		} else {
			return song.title.toLowerCase().includes(inputValue);
		}
	});

	const sortedSongs = [...filteredSongs].sort((a, b) =>
		a.tag > b.tag ? 1 : -1
	);

	return (
		<div className="song_list">
			{sortedSongs.map((song) => (
				<Song key={song._id} song={song} />
			))}
		</div>
	);
};

export default Song_list;
