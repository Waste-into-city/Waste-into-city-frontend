import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import ThemeProvider from '@/components/providers/ThemeProvider';

export const renderWithProviders = (children: ReactNode) => {
	render(
		<ThemeProvider>
			<BrowserRouter>{children}</BrowserRouter>
		</ThemeProvider>
	);
};
