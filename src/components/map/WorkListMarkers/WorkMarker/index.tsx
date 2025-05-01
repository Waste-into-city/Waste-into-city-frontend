import { useMemo } from 'react';

import { LngLat } from '@yandex/ymaps3-types';
import { YMapMarker } from 'ymap3-components';

import workIcon from '@/assets/icons/svg/work_icon.svg';
import { WorkLookup } from '@/types/contracts/workLookup';

import { Z_INDEX } from '../../constants';

import { WorkMarkerPin } from './styled';

export const WorkMarker = ({ work }: { work: WorkLookup }) => {
	const workCoordinates: LngLat = useMemo(() => [work.lng, work.lat], [work]);
	return (
		<YMapMarker coordinates={workCoordinates} zIndex={Z_INDEX.workMarker}>
			<WorkMarkerPin>
				<img src={workIcon} />
			</WorkMarkerPin>
		</YMapMarker>
	);
};
