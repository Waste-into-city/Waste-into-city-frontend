import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { LoginPage } from '@/pages/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage';

import { SectionsRoutes } from '../SectionsRoutes';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
			<Route path='/*' element={<SectionsRoutes />} />
		</Routes>
	);
};
