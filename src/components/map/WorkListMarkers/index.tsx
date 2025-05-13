import { useMemo } from 'react';

import { useGetWorksLookup } from '@/queries/works/useGetWorksLookup';
import { useCurrentZoom } from '@/store/location/useCurrentZoom';
import { getMarkerGroups } from '@/utils/getMarkerGroups';

import { getActualDistanceForZoom } from './helpers';
import { WorkMarker } from './WorkMarker';
import { WorksGroupMarker } from './WorksGroupMarker';

export const WorkListMarkers = () => {
	const { zoom } = useCurrentZoom();
	const { data } = useGetWorksLookup();

	const groupedWorkMarkers = useMemo(
		() => getMarkerGroups(data ?? [], getActualDistanceForZoom(zoom)),
		[zoom, data]
	);

	return groupedWorkMarkers.map((group) =>
		group.length > 1 ? (
			<WorksGroupMarker key={group[0].id} worksGroup={group} />
		) : (
			<WorkMarker key={group[0].id} work={group[0]} />
		)
	);
};
