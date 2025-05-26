import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { LngLat } from '@yandex/ymaps3-types';
import { YMapMarker } from 'ymap3-components';

import { ROUTES } from '@/constants/routes';
import { useSelectedWorksGroup } from '@/store/worksGroup/useSelectedWorksGroup';
import { WorkLookup } from '@/types/contracts/workLookup';

import { Z_INDEX } from '../../constants';

import { EXCEEDED_LIMIT_LABEL, GROUP_DISPLAY_LIMIT } from './constants';
import { WorksGroupMarkerPin } from './styled';

export const WorksGroupMarker = ({
	worksGroup,
}: {
	worksGroup: Array<WorkLookup>;
}) => {
	const navigate = useNavigate();
	const { setWorksGroup } = useSelectedWorksGroup();

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

	const handleGroupMarkerClick = () => {
		setWorksGroup(worksGroup);
		navigate(ROUTES.WORKS_GROUP);
	};

	return (
		<YMapMarker
			coordinates={averageWorkCoordinates}
			zIndex={Z_INDEX.workMarker}
		>
			<WorksGroupMarkerPin
				$displayValue={Math.min(GROUP_DISPLAY_LIMIT, worksGroup.length)}
				onClick={handleGroupMarkerClick}
			>
				{worksGroup.length < GROUP_DISPLAY_LIMIT
					? worksGroup.length
					: EXCEEDED_LIMIT_LABEL}
			</WorksGroupMarkerPin>
		</YMapMarker>
	);
};
