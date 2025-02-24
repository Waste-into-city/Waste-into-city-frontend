import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { LoginPage } from '@/pages/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage';

import { SectionsRouter } from '../SectionsRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.LOGIN} element={<LoginPage />} />
				<Route
					path={ROUTES.REGISTRATION}
					element={<RegistrationPage />}
				/>
				<Route path='/*' element={<SectionsRouter />} />
			</Routes>
		</BrowserRouter>
	);
};
