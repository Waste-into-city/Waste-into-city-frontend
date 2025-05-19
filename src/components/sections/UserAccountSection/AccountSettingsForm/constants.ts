import { UserAccountSettingsForm } from './types';

export const defaultEmptyValues: UserAccountSettingsForm = {
	name: '',
	email: '',
	previousPassword: '',
	newPassword: '',
	newPasswordConfirmation: '',
};

export const USER_SETTINGS_FORM_VALUES: Omit<
	Record<keyof UserAccountSettingsForm, string>,
	'avatarLink'
> = {
	name: 'Nickname',
	email: 'E-Mail',
	previousPassword: 'Old password',
	newPassword: 'New password',
	newPasswordConfirmation: 'Confirm new password',
};

export const CANCEL_BUTTON_LABEL = 'Cancel';
export const EDIT_BUTTON_LABEL = 'Edit';
export const SAVE_BUTTON_LABEL = 'Save';

export const USER_INFO_CHANGE_SUCCESSFUL_MESSAGE = 'Account changes are saved';
export const USER_INFO_CHANGE_ERROR_MESSAGE =
	'Failed to update account information';

export const PREVIOUS_PASSWORD_NOT_SPECIFIED_MESSAGE =
	'You must specify previous password first';
export const ACCOUNT_INFORMATION_UPDATED_MESSAGE =
	'Your account information has been successfully updated!';
