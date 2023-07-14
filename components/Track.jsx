"use client";

import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

import { song_types } from "@utils/song_types";

const Track = () => {
	const [toggleTrack, setToggleTrack] = useState(false);
	const [trackValues, setTrackValues] = useState({
		Entrance: "",
		Gifts_preparation: "",
		Communion: "",
		Adoration: "",
		Farewell: "",
	});

	const TrackIcon = toggleTrack ? MinusCircleIcon : PlusCircleIcon;

	const handleTrackInputs = (song_type, e) => {
		setTrackValues((prevValues) => ({
			...prevValues,
			[song_type]: e.target.value,
		}));
	};

	return (
		<div className="track">
			<div className="track_icons">
				<TrackIcon
					className="track_icon"
					onClick={() => setToggleTrack((prev) => !prev)}
				/>
			</div>

			{toggleTrack && (
				<form>
					{song_types.map((song_type) => (
						<label className="track_label" key={song_type}>
							{song_type}
							<input
								type="text"
								className="track_input"
								value={trackValues[song_type]}
								name={trackValues[song_type]}
								onChange={(e) => handleTrackInputs(song_type, e)}
							/>
						</label>
					))}
				</form>
			)}
		</div>
	);
};

export default Track;
