import { UserRoles } from '../userRoles';

export type SelfUserInfo = {
	id: string;
	nickname: string;
	email: string;
	avatarImageName: string | null;
	highRoleName: UserRoles;
};
