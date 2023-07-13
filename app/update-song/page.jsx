"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditSong = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const titleId = searchParams.get("id");
	const [song, setSong] = useState({
		title: "",
		tag: "advent",
	});

	useEffect(() => {
		const getSongDetails = async () => {
			const response = await fetch(`/api/song/${titleId}`);
			const data = await response.json();

			setSong({
				title: data.title,
				tag: data.tag,
			});
		};

		if (titleId) getSongDetails();
	}, [titleId]);

	const updateSong = async (e) => {
		e.preventDefault();

		if (!titleId) return alert("Title id not found");

		try {
			const response = await fetch(`/api/song/${titleId}`, {
				method: "PATCH",
				body: JSON.stringify({
					title: song.title,
					tag: song.tag,
				}),
			});

			if (response.ok) {
				router.push("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Form type="Edit" song={song} setSong={setSong} handleSubmit={updateSong} />
		</div>
	);
};

export default EditSong;
