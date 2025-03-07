import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

// Add storage and tests
// Add tests for SectionsRoutes
const isLoggedIn = true;

export const ProtectedRoute = ({
	children,
	isAuthRoute,
}: {
	children: ReactNode;
	isAuthRoute: boolean;
}) => {
	if (isAuthRoute) {
		return isLoggedIn ? children : <Navigate to={ROUTES.MAIN} />;
	}
	return isLoggedIn ? <Navigate to={ROUTES.MAIN} /> : children;
};
