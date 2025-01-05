import localFont from 'next/font/local';

export const pretendardFont = localFont({
	src: [
		{
			path: './Pretendard/Pretendard-Medium.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	display: 'swap',
	fallback: [
		'apple-system',
		'BlinkMacSystemFont',
		'system-ui',
		'Roboto',
		'Helvetica Neue,Segoe UI',
		'Apple SD Gothic Neo',
		'Noto Sans KR,Malgun Gothic',
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol',
		'sans-serif',
	],
});
