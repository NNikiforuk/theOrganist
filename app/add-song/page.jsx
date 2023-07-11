"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";

const AddSong = () => {
	const [submitting, setSubmitting] = useState(false);
	const [song, setSong] = useState({
		title: "",
		tag: "",
	});

	const addSong = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			const response = await fetch("/api/song/new", {
				method: "POST",
				body: JSON.stringify({
					title: song.title,
					userId: session?.user.id,
					tag: song.tag,
				}),
			});

			if (response.ok) {
				router.push("/");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div>
			<Form
				type="Add"
				song={song}
				setSong={setSong}
				submitting={submitting}
				addSong={addSong}
			/>
		</div>
	);
};

export default AddSong;
