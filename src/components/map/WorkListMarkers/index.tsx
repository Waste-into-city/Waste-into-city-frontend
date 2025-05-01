import { useMemo } from 'react';

import { useCurrentZoom } from '@/store/location/useCurrentZoom';
import { WorkLookup } from '@/types/contracts/workLookup';
import { getMarkerGroups } from '@/utils/getMarkerGroups';

import { getActualDistanceForZoom } from './helpers';
import { WorkMarker } from './WorkMarker';
import { WorksGroupMarker } from './WorksGroupMarker';

const mockMarkerGroups: WorkLookup[] = [
	{
		id: '1',
		lat: 53.9020832,
		lng: 27.5349504,
	},
	{
		id: '2',
		lat: 53.9002832,
		lng: 27.5349504,
	},
	{
		id: '3',
		lat: 53.9013832,
		lng: 27.5349504,
	},
];

export const WorkListMarkers = () => {
	const { zoom } = useCurrentZoom();
	const groupedWorkMarkers = useMemo(
		() => getMarkerGroups(mockMarkerGroups, getActualDistanceForZoom(zoom)),
		[zoom]
	);

	return groupedWorkMarkers.map((group) =>
		group.length > 1 ? (
			<WorksGroupMarker key={group[0].id} worksGroup={group} />
		) : (
			<WorkMarker key={group[0].id} work={group[0]} />
		)
	);
};
