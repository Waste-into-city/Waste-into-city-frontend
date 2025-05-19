import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@/components/routers/AppRoutes';

import { Notificator } from './components/common/Notificator';

export const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes />
			<Notificator />
		</BrowserRouter>
	);
};
