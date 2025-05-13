import { ScoreSettings } from '@/types/contracts/scoreSettings';

import { EMPTY_SCORE_SETTINGS } from './constants';

export const getFormValuesFromScoreSettings = (scoreSettings: ScoreSettings) =>
	Object.keys(scoreSettings).reduce(
		(formValues, scoreKey) => ({
			...formValues,
			[scoreKey]: String(scoreSettings[scoreKey as keyof ScoreSettings]),
		}),
		EMPTY_SCORE_SETTINGS
	);
