import Link from "next/link";
import React from "react";

const Form = ({ type, song, setSong, submitting, addSong }) => {
	return (
		<section className="text-center">
			<h1 className="logo_text text-xl md:text-4xl lg:text-3xl">{type} Post</h1>

			<form onSubmit={addSong} className="mt-5">
				<label className="text-gray-700 flex flex-col text-left mt-2">
					<span className="font-semibold">Title</span>

					<textarea
						value={song.title}
						onChange={(e) => setSong({ ...song, title: e.target.value })}
						placeholder="Song title..."
						required
						className="form_textarea resize-none"
					/>
				</label>

				<label className="text-gray-700 flex flex-col text-left mt-5">
					<span className="font-semibold">Liturgical period</span>

					<ul className="flex flex-wrap gap-2 justify-center mt-2">
						<li
							className="form_item bg-red-400"
							onClick={(e) => setSong({ ...song, tag: e.target.textContent })}
						>
							Advent
						</li>
						<li
							className="form_item bg-yellow-500"
							onClick={(e) => setSong({ ...song, tag: e.target.textContent })}
						>
							Christmas
						</li>
						<li
							className="form_item bg-green-400"
							onClick={(e) => setSong({ ...song, tag: e.target.textContent })}
						>
							Ordinary
						</li>
						<li
							className="form_item bg-gray-400"
							onClick={(e) => setSong({ ...song, tag: e.target.textContent })}
						>
							Lent
						</li>
						<li
							className="form_item bg-pink-400"
							onClick={(e) => setSong({ ...song, tag: e.target.textContent })}
						>
							Triduum
						</li>
						<li
							className="form_item bg-orange-500"
							onClick={(e) => setSong({ ...song, tag: e.target.textContent })}
						>
							Easter
						</li>
					</ul>
				</label>

				<div className="mt-40 text-end">
					<Link href="/" className="text-gray-700 font-semibold">
						Cancel
					</Link>

					<button type="submit" disabled={submitting} className="px-5 py-1.5 ml-5 text-white bg-gray-700 rounded-2xl">
						{submitting ? `${type}...` : type}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
