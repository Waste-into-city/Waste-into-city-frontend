import { Dispatch, memo, SetStateAction, useCallback } from 'react';

import { LngLat } from '@yandex/ymaps3-types';

import { useCurrentLocation } from '@/store/location/useCurrentLocation';
import { useCurrentZoom } from '@/store/location/useCurrentZoom';
import { useUserLogs } from '@/store/user/useUserLogs';
import { UserRoles } from '@/types/userRoles';

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
		logs: { highRoleName },
	} = useUserLogs();
	const { location } = useCurrentLocation();
	const { zoom } = useCurrentZoom();

	const handleZoomIn = useCallback(
		() =>
			setMapCenter((prevCenter) => ({
				...prevCenter,
				zoom: Math.min(zoom + 1, maxZoom),
				center: displayedCenter,
			})),
		[displayedCenter, setMapCenter, zoom]
	);

	const handleZoomOut = useCallback(
		() =>
			setMapCenter((prevCenter) => ({
				...prevCenter,
				zoom: Math.max(zoom - 1, minZoom),
				center: displayedCenter,
			})),
		[displayedCenter, setMapCenter, zoom]
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
		<MapControlsWrapper $isLoggedIn={highRoleName !== UserRoles.Guest}>
			<LocateControl onLocate={handleUserLocate} />
			<ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
		</MapControlsWrapper>
	);
};

export const MapControls = memo(MapControlsInner);
