import { UserRoles } from '../userRoles';

export type ScoreSettingSetter = {
	scoreSettingsTypesId: number;
	value: number;
};

export type SelfUserInfo = {
	id: string;
	nickname: string;
	email: string;
	avatarImageName: string | null;
	highRoleName: UserRoles;
};
