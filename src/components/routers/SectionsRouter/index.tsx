import { Navigate, Route, Routes } from 'react-router-dom';

import { MainMap } from '@/components/map/MainMap';

export const SectionsRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
			<MainMap />
		</>
	);
};
