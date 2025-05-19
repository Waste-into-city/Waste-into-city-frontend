import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { USER_LOGS_STORAGE } from '@/constants/persistStorages';
import { loginUser } from '@/queries/loginUser';
import { logoutUser } from '@/queries/logoutUser';
import { SelfUserInfo } from '@/types/contracts/selfUserInfo';
import { UserRoles } from '@/types/userRoles';

type UserLogs = SelfUserInfo;

type UserCredentials = {
	email: string;
	password: string;
};

type UserLogsState = {
	logs: UserLogs;
	logIn: (credentials: UserCredentials) => Promise<void>;
	logOut: () => Promise<void>;
	updateLogs: (logs: UserLogs) => void;
};

const emptyUserValues: UserLogs = {
	id: '',
	nickname: '',
	email: '',
	highRoleName: UserRoles.Guest,
	avatarImageName: null,
};

export const useUserLogs = create<UserLogsState>()(
	persist(
		(set) => ({
			logs: emptyUserValues,
			logIn: async (credentials) => {
				const userLogs = await loginUser(credentials);
				set((prevLogs) => ({
					...prevLogs,
					logs: { ...userLogs },
				}));
			},
			logOut: async () => {
				try {
					await logoutUser();
				} finally {
					set((prevLogs) => ({ ...prevLogs, logs: emptyUserValues }));
				}
			},
			updateLogs: (newLogs) =>
				set((prevLogs) => ({ ...prevLogs, logs: newLogs })),
		}),
		{
			name: USER_LOGS_STORAGE,
		}
	)
);
