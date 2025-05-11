import { ScoreSettings } from '@/types/contracts/scoreSettings';

type ScoreSettingsDescription = Record<keyof ScoreSettings, string>;

export const SCORE_SETTINGS_SHORT_NAMES: ScoreSettingsDescription = {
	workRankingDefaultReviewAdding: 'WR-DRA',
	workNegativeAddingMultiplier: 'W-NAM',
	workNegativeSubstracting: 'W-NS',
	workRankingAdding: 'WR-A',
	workRankingSubstracting: 'WR-S',
	workApplicationRankingSubstracting: 'WA-RS',
	workApplicationNegativeAddingMultiplier: 'WA-NAM',
	workApplicationRankingAdding: 'WA-RA',
	workApplicationNegativeSubstracting: 'WA-NS',
	userBanRankingAtLeast: 'UB-RAL',
	pendingFinalizationWorkRankingSubstracting: 'P-FW-RS',
	pendingFinalizationWorkNegativeAdding: 'P-FW-NA',
	workComplaintParticipantNegativeAddingMultiplier: 'WCP-NAM',
	workComplaintParticipantRankingSubstracting: 'WCP-RS',
	workComplaintUserNegativeSubstracting: 'WCU-NS',
	workComplaintUserNegativeAddingMultiplier: 'WCU-NAM',
	workComplaintUserRankingSubstracting: 'WCU-RS',
	workComplaintUserRankingAdding: 'WCU-RA',
};

export const SCORE_SETTINGS_DESCRIPTIONS: ScoreSettingsDescription = {
	workRankingDefaultReviewAdding: 'Default rate for not rated user',

	workNegativeAddingMultiplier: 'Bad completed works counter multiplier',
	workNegativeSubstracting: 'Substracting of counter for bad completed works',

	workRankingAdding: 'Counter increase for successfully completed work',
	workRankingSubstracting: 'Counter decrease for unfinished work',

	workApplicationRankingSubstracting:
		'Rating decrease for rejected work application',
	workApplicationNegativeAddingMultiplier:
		'Increase of negative actions counter for rejected work',
	workApplicationRankingAdding:
		'Rating increase for accepted work application',
	workApplicationNegativeSubstracting:
		'Substracting of negative actions counter for rejected work',

	userBanRankingAtLeast: 'User ban rating threshold',

	pendingFinalizationWorkRankingSubstracting:
		'Participants rating decrease for not sending results',
	pendingFinalizationWorkNegativeAdding:
		'Increase of negative actions counter for participants not sending results',

	workComplaintParticipantNegativeAddingMultiplier:
		'Increase of negative counter for participant submitting unfinished work',
	workComplaintParticipantRankingSubstracting:
		'Rating decrease for participant submitting unfinished work',

	workComplaintUserNegativeSubstracting:
		'Decrease of negative actions counter for accepted user work report',
	workComplaintUserNegativeAddingMultiplier:
		'Increase of negative actions counter for rejected user work report',
	workComplaintUserRankingSubstracting:
		'Rating decrease for rejected user work report',
	workComplaintUserRankingAdding:
		'Rating increase for accepted user work report',
};

export const adminPanelFieldsKeys: Array<keyof ScoreSettings> = Object.keys(
	SCORE_SETTINGS_SHORT_NAMES
) as Array<keyof ScoreSettings>;
