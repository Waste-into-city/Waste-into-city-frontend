export const HOURS_IN_DAY = 24;
export const MINUTES_IN_HOUR = 60;
export const MIN_HOUR_DIFFERENCE = 3;

export const hoursItems = new Array(HOURS_IN_DAY)
	.fill(0)
	.map((_, index) => String(index).padStart(2, '0'));
export const minutesItems = new Array(MINUTES_IN_HOUR)
	.fill(0)
	.map((_, index) => String(index).padStart(2, '0'));

export const TODAY_LABEL = 'Today';
export const TOMMRORW_LABEL = 'Tommorow';

export const SELECTOR_HEADING = 'Select the work start time';
