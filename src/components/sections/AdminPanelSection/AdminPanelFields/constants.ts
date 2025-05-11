import { AdminPanelForm } from './types';

export const MIN_VALUE = -9999;
export const MAX_VALUE = 9999;
export const NUMBER_REG_EXP = /^-?\d*(\.\d*)?/;

export const MIN_VALUE_ERROR = `Min. value is ${MIN_VALUE}`;
export const MAX_VALUE_ERROR = `Max. value is ${MAX_VALUE}`;
export const REQUIRES_NUMBER_ERROR = 'Requires number';

export const SAVE_BUTTON_LABEL = 'Save settings';
export const RESET_BUTTON_LABEL = 'Reset settings';

export const ADMIN_PANEL_HEADING = 'Admin Panel';
export const SCORE_SETTINGS_HEADER = 'Score Settings';

export const EMPTY_SCORE_SETTINGS: AdminPanelForm = {
	workRankingDefaultReviewAdding: '0',
	workNegativeAddingMultiplier: '0',
	workNegativeSubstracting: '0',
	workRankingAdding: '0',
	workRankingSubstracting: '0',
	workApplicationRankingSubstracting: '0',
	workApplicationNegativeAddingMultiplier: '0',
	workApplicationRankingAdding: '0',
	workApplicationNegativeSubstracting: '0',
	userBanRankingAtLeast: '0',
	pendingFinalizationWorkRankingSubstracting: '0',
	pendingFinalizationWorkNegativeAdding: '0',
	workComplaintUserNegativeSubstracting: '0',
	workComplaintParticipantNegativeAddingMultiplier: '0',
	workComplaintUserNegativeAddingMultiplier: '0',
	workComplaintParticipantRankingSubstracting: '0',
	workComplaintUserRankingSubstracting: '0',
	workComplaintUserRankingAdding: '0',
};
