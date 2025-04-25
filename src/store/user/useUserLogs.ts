import { create } from 'zustand';

import { loginUser } from '@/queries/loginUser';

type UserLogs = {
	isLoggedIn: boolean;
	nickname: string;
	email: string;
	avatarLink?: string;
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

const emptyUserValues: UserLogs = {
	isLoggedIn: false,
	nickname: '',
	email: '',
};

const mockUser: UserLogs = {
	isLoggedIn: true,
	nickname: 'Name',
	email: 'email@gmail.com',
};

export const useUserLogs = create<UserLogsState>()((set) => ({
	logs: mockUser,
	logIn: loginUser,
	logOut: async () => {
		set({ logs: emptyUserValues });
	},
}));
