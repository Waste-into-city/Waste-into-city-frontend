import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { LngLat } from '@yandex/ymaps3-types';
import { YMapMarker } from 'ymap3-components';

import workIcon from '@/assets/icons/svg/work_icon.svg';
import { ROUTES } from '@/constants/routes';
import { WorkLookup } from '@/types/contracts/workLookup';

import { Z_INDEX } from '../../constants';

import { WorkMarkerPin } from './styled';

export const WorkMarker = ({ work }: { work: WorkLookup }) => {
	const navigate = useNavigate();

	const workCoordinates: LngLat = useMemo(() => [work.lng, work.lat], [work]);

	const handleMarkerClick = () => {
		navigate(ROUTES.WORK_INFO + `/${work.id}`);
	};

	return (
		<YMapMarker
			coordinates={workCoordinates}
			zIndex={Z_INDEX.workMarker}
			onClick={handleMarkerClick}
		>
			<WorkMarkerPin>
				<img src={workIcon} />
			</WorkMarkerPin>
		</YMapMarker>
	);
};
