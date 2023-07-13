"use client";

import { useState, useEffect } from "react";

import Song_list from "./Song_list";

const Feed = () => {
	const [searchText, setSearchText] = useState("");
	const [songs, setSongs] = useState([]);

	const handleSearch = (e) => {
		setSearchText(e.target.value);
	};

	const fetchSongs = async () => {
		const response = await fetch("/api/song");
		const data = await response.json();

		setSongs(data);
	};

	useEffect(() => {
		fetchSongs();
	}, []);

	return (
		<section className="feed">
			<form>
				<input
					type="text"
					placeholder="Search for a song or a tag"
					value={searchText}
					onChange={handleSearch}
					required
					className="search_input"
				/>
			</form>

			<Song_list songs={songs} />
		</section>
	);
};

export default Feed;
