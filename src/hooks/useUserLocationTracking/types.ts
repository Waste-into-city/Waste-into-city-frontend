import { Coordinates } from '@/types/coordinates';

export type UserLocationRecord = {
	location: Coordinates;
	speed: number;
};

export type UseUserLocationTrackingProps = {
	onFirstLocate?: (location: Coordinates) => void;
};
