import { create } from 'zustand';

import { Coordinates } from '@/types/coordinates';

type CurrentLocationState = {
	location: Coordinates | null;
	setLocation: (point: Coordinates | null) => void;
};

export const useCurrentLocation = create<CurrentLocationState>()((set) => ({
	location: null,
	setLocation: (point) =>
		set((prevLocation) => ({ ...prevLocation, location: point })),
}));
