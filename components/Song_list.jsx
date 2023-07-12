import Song from "./Song";

const Song_list = ({ handleTagClick, songs }) => {
	return (
		<div className="song_list">
			{songs.map((song) => (
				<Song key={song._id} song={song} handleTagClick={handleTagClick} />
			))}
		</div>
	);
};

export default Song_list;
