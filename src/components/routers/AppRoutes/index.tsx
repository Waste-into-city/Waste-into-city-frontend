import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { LoginPage } from '@/pages/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage';

import { ProtectedRoute } from '../ProtectedRoute';
import { SectionsRoutes } from '../SectionsRoutes';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path={ROUTES.LOGIN}
				element={
					<ProtectedRoute isAuthRoute={false}>
						<LoginPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path={ROUTES.REGISTRATION}
				element={
					<ProtectedRoute isAuthRoute={false}>
						<RegistrationPage />
					</ProtectedRoute>
				}
			/>
			<Route path={ROUTES.ANY_SECTION} element={<SectionsRoutes />} />
		</Routes>
	);
};
