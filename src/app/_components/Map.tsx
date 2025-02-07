'use client';

import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function GoogleMap() {
	return (
		<div>
			<APIProvider apiKey={'AIzaSyDQFGq7aB2YpD0YpT-yYCVPJhuDl6EWnjs'}>
				<Map
					style={{ width: '100vw', height: '60vh' }}
					defaultCenter={{ lat: 37.7373576, lng: 126.7601086 }}
					defaultZoom={14}
					gestureHandling={'greedy'}
					disableDefaultUI={true}
				/>
			</APIProvider>
		</div>
	);
}
