import { useEffect, useMemo, useState } from 'react';

import { LngLat, MapEventUpdateHandler } from '@yandex/ymaps3-types';
import {
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
	YMapListener,
} from 'ymap3-components';

import { useUserLocationTracking } from '@/hooks/useUserLocationTracking';
import { useCurrentLocation } from '@/store/location/useCurrentLocation';
import { useCurrentZoom } from '@/store/location/useCurrentZoom';
import { useMapItemLocation } from '@/store/location/useMapItemLocation';
import { useColoredTheme } from '@/store/theme/useColoredTheme';
import { Coordinates } from '@/types/coordinates';

import { LocatorItemMarker } from '../LocatorItemMarker';
import { MapControls } from '../MapControls';
import { MapItemLocator } from '../MapItemLocator';
import { UserMarker } from '../UserMarker';
import { WorkListMarkers } from '../WorkListMarkers';

import { config, ZOOM_RANGE } from './config';
import * as S from './styled';

const { defaultLocation, mapCustomization } = config;

export const MainMap = () => {
	const { theme } = useColoredTheme();
	const { setZoom } = useCurrentZoom();
	const { location } = useCurrentLocation();
	const {
		setLocation: setMapItemLocation,
		isSelected,
		location: mapItemLocation,
	} = useMapItemLocation();
	const [displayedCenter, setDisplayedCenter] = useState<LngLat>(
		defaultLocation.center
	);

	const initialLocation = useMemo(
		() =>
			location
				? {
						...defaultLocation,
						center: [location.lng, location.lat] as LngLat,
					}
				: defaultLocation,
		[]
	);

	const [mapCenter, setMapCenter] =
		useState<typeof defaultLocation>(initialLocation);

	useUserLocationTracking({
		onFirstLocate: ({ lat, lng }: Coordinates) => {
			setMapCenter((prevCenter) => ({
				...prevCenter,
				center: [lng, lat],
			}));
			setDisplayedCenter([lng, lat]);
		},
	});

	useEffect(() => {
		if (isSelected && mapItemLocation) {
			setMapCenter((prevCenter) => ({
				...prevCenter,
				center: mapItemLocation,
			}));
		}
	}, [mapItemLocation, isSelected]);

	const setLocationAtDisplayCenter = () => {
		if (isSelected && !mapItemLocation) {
			setMapItemLocation(displayedCenter);
		}
	};

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
				<LocatorItemMarker />
			</YMap>
			<MapControls
				displayedCenter={displayedCenter}
				setMapCenter={setMapCenter}
			/>
			<MapItemLocator onSetLocation={setLocationAtDisplayCenter} />
		</S.MapContainer>
	);
};
