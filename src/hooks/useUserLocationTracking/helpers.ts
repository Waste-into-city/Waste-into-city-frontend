import { Coordinates } from '@/types/coordinates';

import { FAILED_TO_LOCATE_ERROR, GEOLOCATION_TIMEOUT } from './constants';

export const getCurrentLocation = async (): Promise<Coordinates> => {
	try {
		const coordinates = await new Promise<Coordinates>(
			(resolve, reject) => {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
						({ coords }) =>
							resolve({
								lat: coords.latitude,
								lng: coords.longitude,
							}),
						(error) => reject(error),
						{
							timeout: GEOLOCATION_TIMEOUT,
							enableHighAccuracy: true,
						}
					);
				} else {
					reject(new Error());
				}
			}
		);
		return coordinates;
	} catch {
		throw new Error(FAILED_TO_LOCATE_ERROR);
	}
};
