import React from 'react';
import type { Metadata } from 'next';
import { pretendardFont } from '@app/fonts';

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
		<html lang="ko">
			<body className={pretendardFont.className}>{children}</body>
		</html>
	);
}
