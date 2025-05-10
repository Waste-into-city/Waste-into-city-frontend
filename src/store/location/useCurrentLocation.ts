import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { GEOLOCATION_STORAGE } from '@/constants/persistStorages';
import { Coordinates } from '@/types/coordinates';

type CurrentLocationState = {
	location: Coordinates | null;
	setLocation: (point: Coordinates | null) => void;
};

export const useCurrentLocation = create<CurrentLocationState>()(
	persist(
		(set) => ({
			location: null,
			setLocation: (point) =>
				set((prevLocation) => ({ ...prevLocation, location: point })),
		}),
		{
			name: GEOLOCATION_STORAGE,
		}
	)
);
