import { Open_Sans } from "next/font/google";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: "400",
});

export const metadata = {
	title: "Organ track list",
	description: "Arrange your own track list",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={openSans.className}>
				<Provider>
					<main className="main flex-col">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}
