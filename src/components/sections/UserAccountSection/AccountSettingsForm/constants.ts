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
