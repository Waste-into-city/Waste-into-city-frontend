import { ScoreSettings } from '@/types/contracts/scoreSettings';
import { ScoreSettingSetter } from '@/types/contracts/selfUserInfo';
import { getIdForScoreSetting } from '@/utils/getScoreSettingById';

import { EMPTY_SCORE_SETTINGS } from './constants';
import { AdminPanelForm } from './types';

export const getFormValuesFromScoreSettings = (scoreSettings: ScoreSettings) =>
	Object.keys(scoreSettings).reduce(
		(formValues, scoreKey) => ({
			...formValues,
			[scoreKey]: String(scoreSettings[scoreKey as keyof ScoreSettings]),
		}),
		EMPTY_SCORE_SETTINGS
	);

export const getScoreSettingsFromFormValues = (
	formValues: AdminPanelForm
): Array<ScoreSettingSetter> =>
	Object.entries(formValues)
		.filter(([, value]) => Boolean(value))
		.map(([key, value]) => ({
			scoreSettingsTypesId: getIdForScoreSetting(
				key as keyof ScoreSettings
			),
			value: Number(value),
		}));
