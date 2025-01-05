import React from 'react';
import type { Metadata } from 'next';

import './globals.css';
// import * as styles from "./common.css";

export const metadata: Metadata = {
	title: 'Front-End Developer Hoon',
	description: 'Hello next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
