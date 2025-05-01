import { useMemo } from 'react';

import { LngLat } from '@yandex/ymaps3-types';
import { YMapMarker } from 'ymap3-components';

import { WorkLookup } from '@/types/contracts/workLookup';

import { Z_INDEX } from '../../constants';

import { EXCEEDED_LIMIT_LABEL, GROUP_DISPLAY_LIMIT } from './constants';
import { WorksGroupMarkerPin } from './styled';

export const WorksGroupMarker = ({
	worksGroup,
}: {
	worksGroup: Array<WorkLookup>;
}) => {
	const averageWorkCoordinates: LngLat = useMemo(
		() =>
			worksGroup
				.reduce(
					(average, { lat, lng }) => [
						average[0] + lng,
						average[1] + lat,
					],
					[0, 0]
				)
				.map((coordinate) => coordinate / worksGroup.length) as LngLat,
		[worksGroup]
	);
	return (
		<YMapMarker
			coordinates={averageWorkCoordinates}
			zIndex={Z_INDEX.workMarker}
		>
			<WorksGroupMarkerPin
				$displayValue={Math.min(GROUP_DISPLAY_LIMIT, worksGroup.length)}
			>
				{worksGroup.length < GROUP_DISPLAY_LIMIT
					? worksGroup.length
					: EXCEEDED_LIMIT_LABEL}
			</WorksGroupMarkerPin>
		</YMapMarker>
	);
};
