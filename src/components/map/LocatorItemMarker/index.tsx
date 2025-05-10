import { memo } from 'react';

import { YMapMarker } from 'ymap3-components';

import pinIcon from '@/assets/icons/svg/map_pin_icon.svg';
import { useMapItemLocation } from '@/store/location/useMapItemLocation';

import { Z_INDEX } from '../constants';

import { MapPinCenter, MapPinMarker } from './styled';

export const LocatorItemMarker = memo(() => {
	const { location, isSelected } = useMapItemLocation();

	if (isSelected) {
		return location ? (
			<YMapMarker coordinates={location} zIndex={Z_INDEX.userMarker}>
				<MapPinMarker src={pinIcon} />
			</YMapMarker>
		) : (
			<MapPinCenter src={pinIcon} />
		);
	}

	return null;
});
