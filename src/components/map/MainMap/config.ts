import {
	VectorCustomizationItem,
	YMapLocationRequest,
} from '@yandex/ymaps3-types';

// Is using default while no geolocation is available
const defaultLocation: YMapLocationRequest = {
	center: [21.018928, 52.231208],
	zoom: 18,
};

const mapCustomization: VectorCustomizationItem[] = [
	{
		tags: {
			all: ['poi'],
		},
		stylers: {
			visibility: 'off',
		},
	},
];

export const config = { defaultLocation, mapCustomization };
