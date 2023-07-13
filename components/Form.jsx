"use client";

import Link from "next/link";

import { periods } from "@utils/periods";

const Form = ({ type, song, setSong, handleSubmit }) => {
	const choosePeriod = (e) => {
		setSong({
			...song,
			tag: e.target.value,
		});
	};

	return (
		<section className="text-center static lg:m-10">
			<h1 className="logo_text text-xl md:text-4xl lg:text-3xl xl:text-xl">
				{type} song
			</h1>

			<form onSubmit={handleSubmit} className="mt-5 xl:mt-20">
				<label className="text-gray-700 flex flex-col mt-2 text-center">
					<span className="font-semibold md:text-2xl xl:text-lg">Title</span>

					<textarea
						value={song.title}
						onChange={(e) => setSong({ ...song, title: e.target.value })}
						placeholder="Song title..."
						required
						className="form_textarea resize-none"
					/>
				</label>

				<label className="text-gray-700 flex flex-col text-center mt-5">
					<span className="font-semibold md:text-2xl xl:text-lg xl:text-center">
						Liturgical period
					</span>

					<div className="flex flex-wrap gap-2 justify-center mt-2 md:mt-4 md:gap-4">
						<select
							className="form_textarea outline-none"
							onChange={choosePeriod}
						>
							{periods.map((period) => (
								<option
									key={period.value}
									value={period.value}
									className=" md:text-sm"
								>
									{period.label}
								</option>
							))}
						</select>
					</div>
				</label>

				<div className="text-end absolute bottom-0 right-0 m-5 md:text-2xl lg:text-3xl lg:m-10 xl:text-sm">
					<Link
						href="/"
						className="text-gray-700 font-semibold xl:hover:text-black"
					>
						Cancel
					</Link>

					<button
						type="submit"
						className="px-5 py-1.5 ml-5 text-white bg-gray-700 rounded-2xl md:rounded-full md:px-6 md:py-3 cursor-pointer xl:hover:text-black"
					>
						{type}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
