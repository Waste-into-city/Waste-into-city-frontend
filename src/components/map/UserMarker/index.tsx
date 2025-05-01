import { useMemo } from 'react';

import { YMapMarker } from 'ymap3-components';

import { useCurrentLocation } from '@/store/location/useCurrentLocation';

import { Z_INDEX } from '../constants';

import { UserMarkerPin } from './styled';

export const UserMarker = () => {
	const { location } = useCurrentLocation();
	const markerCoordinates: [number, number] | null = useMemo(
		() => (location ? [location.lng, location.lat] : null),
		[location]
	);

	if (!markerCoordinates) {
		return null;
	}

	return (
		<YMapMarker coordinates={markerCoordinates} zIndex={Z_INDEX.userMarker}>
			<UserMarkerPin />
		</YMapMarker>
	);
};
