import historyIcon from '@/assets/icons/svg/history_icon.svg';
import loginIcon from '@/assets/icons/svg/login_icon.svg';
import plusIcon from '@/assets/icons/svg/plus_icon.svg';
import profileIcon from '@/assets/icons/svg/profile_icon.svg';
import { ROUTES } from '@/constants/routes';

type Route = {
	name: string;
	path: string;
	icon: string;
};

const USER_ROUTES: Route[] = [
	{
		name: 'Works',
		path: ROUTES.WORKS,
		icon: historyIcon,
	},
	{
		name: 'New Work',
		path: ROUTES.NEW_WORK,
		icon: plusIcon,
	},
	{
		name: 'Account',
		path: ROUTES.ACCOUNT,
		icon: profileIcon,
	},
];

const LOG_IN_ROUTE: Route = {
	name: 'Log In',
	path: ROUTES.LOGIN,
	icon: loginIcon,
};

export const config = {
	LOG_IN_ROUTE,
	USER_ROUTES,
};
