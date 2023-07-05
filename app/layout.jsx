import "@styles/globals.css";

export const metadata = {
	title: "Organ track list",
	description: "Arrange your own track list",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="main"></div>
				<main className="app">{children}</main>
			</body>
		</html>
	);
}
