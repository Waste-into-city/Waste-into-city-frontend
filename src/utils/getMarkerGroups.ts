import { Coordinates } from '@/types/coordinates';

import { getDistanceBetweenPoints } from './getDistanceBetweenPoints';

export const getMarkerGroups = <T extends Coordinates>(
	markers: Array<T>,
	maxDistance: number
): Array<Array<T>> => {
	const markerGroups: Array<Array<T>> = [];

	const visited = new Set();

	for (let i = 0; i < markers.length; i++) {
		if (visited.has(i)) continue;

		const group = [markers[i]];
		visited.add(i);

		for (let j = 0; j < markers.length; j++) {
			if (i !== j && !visited.has(j)) {
				const distance = getDistanceBetweenPoints(
					markers[i],
					markers[j]
				);
				if (distance < maxDistance) {
					group.push(markers[j]);
					visited.add(j);
				}
			}
		}

		markerGroups.push(group);
	}

	return markerGroups;
};
