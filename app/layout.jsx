import { Open_Sans } from "next/font/google";

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
				<main className="main">{children}</main>
			</body>
		</html>
	);
}
