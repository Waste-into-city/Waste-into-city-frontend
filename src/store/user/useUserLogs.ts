import { create } from 'zustand';

import { loginUser } from '@/query/loginUser';

type UserLogs =
	| {
			isLoggedIn: true;
			nickname: string;
			email: string;
			accessToken: string;
			refreshToken: string;
	  }
	| {
			isLoggedIn: false;
	  };

type UserCredentials = {
	email: string;
	password: string;
};

type UserLogsState = {
	logs: UserLogs;
	logIn: (credentials: UserCredentials) => Promise<void>;
	logOut: () => Promise<void>;
};

export const useUserLogs = create<UserLogsState>()((set) => ({
	logs: {
		isLoggedIn: false,
	},
	logIn: loginUser,
	logOut: async () => {
		set({ logs: { isLoggedIn: false } });
	},
}));
