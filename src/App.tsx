import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@/components/routers/AppRoutes';

export const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
};
