import { LngLat } from '@yandex/ymaps3-types';
import { create } from 'zustand';

type MapItemLocationState = {
	location: LngLat | null;
	isSelected: boolean;
	isDisplayOnly: boolean;
	setLocation: (location: LngLat | null) => void;
	selectItem: VoidFunction;
	displayItem: VoidFunction;
	cancelItem: VoidFunction;
};

export const useMapItemLocation = create<MapItemLocationState>()((set) => ({
	location: null,
	isSelected: false,
	isDisplayOnly: false,
	setLocation: (location) =>
		set((prevLocation) => ({ ...prevLocation, location })),
	selectItem: () =>
		set((locationInfo) => ({
			...locationInfo,
			isSelected: true,
			isDisplayOnly: false,
		})),
	displayItem: () =>
		set((locationInfo) => ({
			...locationInfo,
			isSelected: true,
			isDisplayOnly: true,
		})),
	cancelItem: () =>
		set((locationInfo) => ({
			...locationInfo,
			isSelected: false,
			isDisplayOnly: false,
		})),
}));
