import { useState } from 'react';

import { LngLat, MapEventUpdateHandler } from '@yandex/ymaps3-types';
import {
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
	YMapListener,
} from 'ymap3-components';

import { useUserLocationTracking } from '@/hooks/useUserLocationTracking';
import { useCurrentZoom } from '@/store/location/useCurrentZoom';
import { useColoredTheme } from '@/store/theme/useColoredTheme';
import { Coordinates } from '@/types/coordinates';

import { MapControls } from '../MapControls';
import { UserMarker } from '../UserMarker';
import { WorkListMarkers } from '../WorkListMarkers';

import { config, ZOOM_RANGE } from './config';
import * as S from './styled';

const { defaultLocation, mapCustomization } = config;

export const MainMap = () => {
	const { theme } = useColoredTheme();
	const { setZoom } = useCurrentZoom();
	const [displayedCenter, setDisplayedCenter] = useState<LngLat>(
		defaultLocation.center
	);

	const [mapCenter, setMapCenter] =
		useState<typeof defaultLocation>(defaultLocation);

	useUserLocationTracking({
		onFirstLocate: ({ lat, lng }: Coordinates) => {
			setMapCenter((prevCenter) => ({
				...prevCenter,
				center: [lng, lat],
			}));
			setDisplayedCenter([lng, lat]);
		},
	});

	const mapUpdateEventHandler: MapEventUpdateHandler = ({ location }) => {
		setZoom(location.zoom);
		setDisplayedCenter(location.center);
	};

	return (
		<S.MapContainer>
			<YMap location={mapCenter} zoomRange={ZOOM_RANGE}>
				<YMapDefaultSchemeLayer
					customization={mapCustomization}
					theme={theme}
				/>
				<YMapDefaultFeaturesLayer />
				<YMapListener onUpdate={mapUpdateEventHandler} />
				<UserMarker />
				<WorkListMarkers />
			</YMap>
			<MapControls
				displayedCenter={displayedCenter}
				setMapCenter={setMapCenter}
			/>
		</S.MapContainer>
	);
};
