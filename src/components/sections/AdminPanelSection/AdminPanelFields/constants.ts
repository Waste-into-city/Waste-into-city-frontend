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
	workRankingDefaultReviewAdding: '',
	workNegativeAddingMultiplier: '',
	workNegativeSubstracting: '',
	workRankingAdding: '',
	workRankingSubstracting: '',
	workApplicationRankingSubstracting: '',
	workApplicationNegativeAddingMultiplier: '',
	workApplicationRankingAdding: '',
	workApplicationNegativeSubstracting: '',
	userBanRankingAtLeast: '',
	pendingFinalizationWorkRankingSubstracting: '',
	pendingFinalizationWorkNegativeAdding: '',
	workComplaintUserNegativeSubstracting: '',
	workComplaintParticipantNegativeAddingMultiplier: '',
	workComplaintUserNegativeAddingMultiplier: '',
	workComplaintParticipantRankingSubstracting: '',
	workComplaintUserRankingSubstracting: '',
	workComplaintUserRankingAdding: '',
};
