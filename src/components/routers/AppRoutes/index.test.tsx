// import { MemoryRouter } from 'react-router-dom';

// import { screen } from '@testing-library/dom';

// import { renderWithProviders } from '@/utils/renderWithProviders';

// import { AppRoutes } from '.';

// Requires ProtectedRoute implementation

// describe('AppRouter', () => {
// 	it('login page', () => {
// 		renderWithProviders(
// 			<MemoryRouter initialEntries={['/login']}>
// 				<AppRoutes />
// 			</MemoryRouter>
// 		);
// 		expect(screen.getByText(/^Log in/)).toBeInTheDocument();
// 	});
// 	it('register page', () => {
// 		renderWithProviders(
// 			<MemoryRouter initialEntries={['/register']}>
// 				<AppRoutes />
// 			</MemoryRouter>
// 		);
// 		expect(screen.getByText(/^Register/)).toBeInTheDocument();
// 	});
// });
