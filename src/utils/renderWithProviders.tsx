import { ReactNode } from 'react';

import { render } from '@testing-library/react';

import ThemeProvider from '@/components/providers/ThemeProvider';

export const renderWithProviders = (children: ReactNode) => {
	render(<ThemeProvider>{children}</ThemeProvider>);
};
