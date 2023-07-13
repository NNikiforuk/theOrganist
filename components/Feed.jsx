"use client";

import { useState, useEffect } from "react";

import Song_list from "./Song_list";
import Track from "./Track";

const Feed = () => {
	const [inputValue, setInputValue] = useState("");
	const [songs, setSongs] = useState([]);

	const handleSearch = (e) => {
		setInputValue(e.target.value.toLowerCase());
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

			<Track />

			<form>
				<input
					type="text"
					placeholder="Search for a song or a tag"
					value={inputValue}
					onChange={handleSearch}
					required
					className="search_input"
				/>
			</form>

			<Song_list songs={songs} inputValue={inputValue} />
		</section>
	);
};

export default Feed;
