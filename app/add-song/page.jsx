"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import { periods } from "@utils/periods";

const AddSong = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const [song, setSong] = useState({
		title: "",
		tag: "advent",
	});

	const addSong = async (e) => {
		e.preventDefault();

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
		}
	};
	return (
		<div>
			<Form type="Add" song={song} setSong={setSong} addSong={addSong} />
		</div>
	);
};

export default AddSong;
