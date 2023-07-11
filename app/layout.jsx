import { Work_Sans } from "next/font/google";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
	title: "Organ track list",
	description: "Arrange your own track list",
};

const workSans = Work_Sans({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${workSans.className}`}>
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
