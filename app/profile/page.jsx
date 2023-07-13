"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const [songs, setSongs] = useState([]);

	const fetchSongs = async () => {
		const response = await fetch(`/api/users/${session?.user.id}/songs`);
		const data = await response.json();

		if (session?.user.id) setSongs(data);
	};

	useEffect(() => {
		fetchSongs();
	}, []);

	const handleEdit = (song) => {
		router.push(`/update-song?id=${song._id}`);
	};

	const handleDelete = async (song) => {
		const hasConfirmed = confirm("Are u sure?");

		if (hasConfirmed) {
			try {
				await fetch(`/api/song/${song._id.toString()}`, {
					method: "DELETE",
				});

				const filteredSongs = songs.filter((song) => song._id !== song._id);
				setSongs(filteredSongs);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<Profile
			songs={songs}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};

export default MyProfile;
