import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useUserLogs } from '@/store/user/useUserLogs';

export const ProtectedRoute = ({
	children,
	isAuthRoute,
}: {
	children: ReactNode;
	isAuthRoute: boolean;
}) => {
	const {
		logs: { isLoggedIn },
	} = useUserLogs();

	if (isAuthRoute) {
		return isLoggedIn ? children : <Navigate to={ROUTES.MAIN} />;
	}
	return isLoggedIn ? <Navigate to={ROUTES.MAIN} /> : children;
};
