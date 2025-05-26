import { IColoredTheme } from '@/styles/coloredTheme';

export const getParticipantsLabel = (participants: number) =>
	participants > 0
		? `${participants} participant${participants > 1 ? 's' : ''}`
		: 'No participants';

export const getComplexityColorsForId = (
	complexityId: number
): [keyof IColoredTheme['colors'], keyof IColoredTheme['colors']] => {
	switch (complexityId) {
		case 1:
			return ['positive', 'iconPositive'];
		case 2:
			return ['warning', 'iconWarning'];
		case 3:
			return ['negative', 'iconNegative'];
		default:
			return ['smallContrast', 'iconSmallContrast'];
	}
};

export const getWorkTime = (startDateTime: string) => {
	const startAsDate = new Date(`${startDateTime}Z`);
	return `${startAsDate.getHours()}:${String(startAsDate.getMinutes()).padStart(2, '0')} on ${startAsDate.toLocaleDateString()}`;
};
