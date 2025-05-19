import { ScoreSettings } from '@/types/contracts/scoreSettings';

const SCORE_SETTINGS_ORDER: Array<keyof ScoreSettings> = [
	'workRankingDefaultReviewAdding',
	'workNegativeAddingMultiplier',
	'workNegativeSubstracting',
	'workRankingAdding',
	'workRankingSubstracting',
	'workApplicationRankingSubstracting',
	'workApplicationNegativeAddingMultiplier',
	'workApplicationRankingAdding',
	'workApplicationNegativeSubstracting',
	'userBanRankingAtLeast',
	'pendingFinalizationWorkRankingSubstracting',
	'pendingFinalizationWorkNegativeAdding',
	'workComplaintUserNegativeSubstracting',
	'workComplaintParticipantNegativeAddingMultiplier',
	'workComplaintUserNegativeAddingMultiplier',
	'workComplaintParticipantRankingSubstracting',
	'workComplaintUserRankingSubstracting',
	'workComplaintUserRankingAdding',
];

export const getScoreSettingById = (id: number): keyof ScoreSettings =>
	SCORE_SETTINGS_ORDER[id + 1];

export const getIdForScoreSetting = (scoreSetting: keyof ScoreSettings) =>
	SCORE_SETTINGS_ORDER.indexOf(scoreSetting) + 1;
