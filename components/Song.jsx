"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
	ClipboardDocumentIcon,
	CheckIcon,
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";

const Song = ({ song, handleEdit, handleDelete }) => {
	const [copied, setCopied] = useState("");

	const { data: session } = useSession();
	const pathName = usePathname();

	const handleCopy = () => {
		setCopied(song.title);
		navigator.clipboard.writeText(song.title);
		setTimeout(() => setCopied(""), 3000);
	};

	return (
		<div className="song">
			<div className="flex justify-between">
				<div className="text-start">
					<p className="song_desc">{song.title}</p>
					<p className="song_tag">{song.tag}</p>
				</div>

				<div className="copy_btn" onClick={handleCopy}>
					{copied === song.title ? (
						<CheckIcon className="copy_icon " />
					) : (
						<ClipboardDocumentIcon className="copy_icon" />
					)}
				</div>
			</div>

			{session?.user.id === song.creator._id && pathName === "/profile" && (
				<div className="song_btns song_desc">
					<PencilSquareIcon className="song_btn " onClick={handleEdit}>
						Edit
					</PencilSquareIcon>

					<TrashIcon className="song_btn" onClick={handleDelete}>
						Delete
					</TrashIcon>
				</div>
			)}
		</div>
	);
};

export default Song;
