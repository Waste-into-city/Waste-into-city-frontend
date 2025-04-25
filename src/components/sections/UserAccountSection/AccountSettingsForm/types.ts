export type UserAccountSettingsForm = {
	name: string;
	email: string;
	previousPassword?: string;
	newPassword?: string;
	newPasswordConfirmation?: string;
	avatarLink?: string;
};
