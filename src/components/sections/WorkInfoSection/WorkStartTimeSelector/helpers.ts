import { HOURS_IN_DAY, MIN_HOUR_DIFFERENCE } from './constants';

export const getNearestStartTime = () => {
	const currentDateTime = new Date();
	return [
		(currentDateTime.getHours() + MIN_HOUR_DIFFERENCE) % HOURS_IN_DAY,
		currentDateTime.getMinutes(),
	];
};

export const checkForNextDay = (hours: number, minutes: number) => {
	const currentDateTime = new Date();
	const currentHours = currentDateTime.getHours();
	const currentMinutes = currentDateTime.getMinutes();

	if (
		hours < (currentHours + MIN_HOUR_DIFFERENCE) % HOURS_IN_DAY ||
		hours < currentHours
	) {
		return true;
	}

	if (hours === currentHours + MIN_HOUR_DIFFERENCE) {
		return minutes < currentMinutes;
	}

	return false;
};

export const getTimeValue =
	(maxValue: number) =>
	(value: string): string | null => {
		if (Number.isNaN(value)) {
			return null;
		}

		if (!value) {
			return value;
		}

		const newValue = (
			Number(value) > maxValue ? value[value.length - 1] : value
		).padStart(2, '0');

		return newValue.substring(newValue.length - 2);
	};
