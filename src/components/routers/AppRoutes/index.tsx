import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { AboutUsPage } from '@/pages/AboutUsPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { UserRoles } from '@/types/userRoles';

import { ProtectedRoute } from '../ProtectedRoute';
import { SectionsRoutes } from '../SectionsRoutes';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path={ROUTES.LOGIN}
				element={
					<ProtectedRoute allowedRoles={[UserRoles.Guest]}>
						<LoginPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path={ROUTES.REGISTRATION}
				element={
					<ProtectedRoute allowedRoles={[UserRoles.Guest]}>
						<RegistrationPage />
					</ProtectedRoute>
				}
			/>
			<Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
			<Route path={ROUTES.ANY_SECTION} element={<SectionsRoutes />} />
		</Routes>
	);
};
