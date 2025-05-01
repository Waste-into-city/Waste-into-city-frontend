import { Coordinates } from '@/types/coordinates';

const EARTH_RADIUS = 6371;
const METERS_IN_KILOMETER = 1000;

const pointToRadians = (degrees: number) => degrees * (Math.PI / 180);

export const getDistanceBetweenPoints = (
	firstPoint: Coordinates,
	secondPoint: Coordinates
): number => {
	const dLat = pointToRadians(secondPoint.lat - firstPoint.lat);
	const dLng = pointToRadians(secondPoint.lng - firstPoint.lng);

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(pointToRadians(firstPoint.lat)) *
			Math.cos(pointToRadians(secondPoint.lat)) *
			Math.sin(dLng / 2) *
			Math.sin(dLng / 2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return EARTH_RADIUS * c * METERS_IN_KILOMETER;
};
