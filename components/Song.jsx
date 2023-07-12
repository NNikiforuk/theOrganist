"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/solid";

const Song = ({ song, handleTagClick }) => {
	const [copied, setCopied] = useState("");

	return (
		<div className="song">
			<div className="text-start">
				<p className="song_desc">{song.title}</p>
				<p
					onClick={() => handleTagClick && handleTagClick(song.tag)}
					className="song_tag"
				>
					{song.tag}
				</p>
			</div>

			<div className="copy_btn" onClick={() => {}}>
				{copied === song.title ? (
					<CheckIcon className="copy_icon" />
				) : (
					<ClipboardDocumentIcon className="copy_icon" />
				)}
			</div>
		</div>
	);
};

export default Song;
