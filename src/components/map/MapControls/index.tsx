import { Dispatch, memo, SetStateAction, useCallback } from 'react';

import { LngLat } from '@yandex/ymaps3-types';

import { useCurrentLocation } from '@/store/location/useCurrentLocation';
import { useUserLogs } from '@/store/user/useUserLogs';

import { config, ZOOM_RANGE } from '../MainMap/config';

import { LocateControl } from './LocateControl';
import { MapControlsWrapper } from './styled';
import { ZoomControls } from './ZoomControls';

const { max: maxZoom, min: minZoom } = ZOOM_RANGE;
const { defaultLocation } = config;

const MapControlsInner = ({
	setMapCenter,
	displayedCenter,
}: {
	setMapCenter: Dispatch<SetStateAction<typeof defaultLocation>>;
	displayedCenter: LngLat;
}) => {
	const {
		logs: { isLoggedIn },
	} = useUserLogs();
	const { location } = useCurrentLocation();

	const handleZoomIn = useCallback(
		() =>
			setMapCenter((prevCenter) => ({
				...prevCenter,
				zoom: Math.min(prevCenter.zoom + 1, maxZoom),
				center: displayedCenter,
			})),
		[displayedCenter, setMapCenter]
	);

	const handleZoomOut = useCallback(
		() =>
			setMapCenter((prevCenter) => ({
				...prevCenter,
				zoom: Math.max(prevCenter.zoom - 1, minZoom),
				center: displayedCenter,
			})),
		[displayedCenter, setMapCenter]
	);

	const handleUserLocate = useCallback(
		() =>
			location &&
			setMapCenter((prevCenter) => ({
				...prevCenter,
				center: [location.lng, location.lat],
				zoom: defaultLocation.zoom,
			})),
		[location, setMapCenter]
	);

	return (
		<MapControlsWrapper $isLoggedIn={isLoggedIn}>
			<LocateControl onLocate={handleUserLocate} />
			<ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
		</MapControlsWrapper>
	);
};

export const MapControls = memo(MapControlsInner);
