"use client";

import Image from "next/image";
import Link from "next/link";
import { getProviders, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid";

const Nav = () => {
	const isUserLogged = true;

	const [providers, setProviders] = useState(null);
	const [toggleBurger, setToggleBurger] = useState(false);

	useEffect(() => {
		const reachProviders = async () => {
			const response = await getProviders();
			setProviders(response);
		};

		reachProviders();
	}, []);

	return (
		<div>
			<nav className="flex justify-between w-full mb-16 pt-3">
				<Link href="/" className="flex gap-2 flex-center md:w-14 md:h-14">
					<Image
						src="/assets/images/lotus-with-hands-g701b72ce1_1280.png"
						alt="site logo"
						width={30}
						height={30}
						className="object-contain"
						style={{ width: "auto", height: "auto" }}
					/>
				</Link>

				{/* Mobile Nav */}
				<div className="sm:hidden flex relative">
					{isUserLogged ? (
						<div className="flex">
							<Bars3Icon
								onClick={() => setToggleBurger((prev) => !prev)}
								className="h-10 w-10 text-gray-500"
							/>

							{toggleBurger && (
								<div className="dropdown">
									<Link
										href="/profile"
										className="dropdown_link"
										onClick={() => setToggleBurger(false)}
									>
										Profile
									</Link>
									<Link
										href="/add-song"
										className="dropdown_link"
										onClick={() => setToggleBurger(false)}
									>
										Add song
									</Link>
									<button
										onClick={() => {
											setToggleBurger(false);
											signOut();
										}}
										className="mt-5 w-full gray_btn"
									>
										Sign out
									</button>
								</div>
							)}
						</div>
					) : (
						<>
							{providers &&
								Object.values(providers).map((provider) => (
									<button
										key={provider.name}
										onClick={() => signIn(provider.id)}
										className="gray_btn"
									>
										Sign in
									</button>
								))}
						</>
					)}
				</div>

				{/* Desktop Nav */}
				<div className="sm:flex hidden">
					{isUserLogged ? (
						<div className="flex gap-3 md:gap-5">
							<Link href="/add-song" className="nav_link">
								Add song
							</Link>

							<button className="nav_link" onClick={signOut}>
								Sign out
							</button>

							<Link href="/profile">
								<UserIcon className="h-10 w-10 text-stone-700" />
							</Link>
						</div>
					) : (
						<>
							{providers &&
								Object.values(providers).map((provider) => (
									<button
										key={provider.name}
										onClick={() => signIn(provider.id)}
										className="gray_btn"
									>
										Sign in
									</button>
								))}
						</>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Nav;
