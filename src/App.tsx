import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@/components/routers/AppRoutes';

import { Notificator } from './components/common/Notificator';
import { useUserLogs } from './store/user/useUserLogs';
import { logoutObserver } from './utils/logoutObserver';

export const App = () => {
	const { logOut } = useUserLogs();

	useEffect(() => {
		const logOutReference = logOut;
		logoutObserver.subscribe(logOutReference);

		return () => {
			logoutObserver.unsubscribe(logOutReference);
		};
	}, [logOut]);

	return (
		<BrowserRouter>
			<AppRoutes />
			<Notificator />
		</BrowserRouter>
	);
};
