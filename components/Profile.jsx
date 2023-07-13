import Song from "./Song";

const Profile = ({ songs, handleEdit, handleDelete }) => {
	return (
		<section className="profile">
			<h1 className="logo_text text-xl md:text-4xl lg:text-3xl xl:text-3xl text-center">
				My profile
			</h1>

			<div className="song_list">
				{songs.map((song) => (
					<Song
						key={song._id}
						song={song}
						handleEdit={() => handleEdit && handleEdit(song)}
						handleDelete={() => handleDelete && handleDelete(song)}
					/>
				))}
			</div>
		</section>
	);
};

export default Profile;
