import {
	VectorCustomizationItem,
	YMapLocationRequest,
	ZoomRange,
} from '@yandex/ymaps3-types';

export const ZOOM_RANGE: ZoomRange = {
	max: 20,
	min: 10.3,
};

// Is using default while no geolocation is available
const defaultLocation: YMapLocationRequest = {
	center: [27.567444, 53.893009],
	zoom: 17,
	duration: 300,
	easing: 'ease-in-out',
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
