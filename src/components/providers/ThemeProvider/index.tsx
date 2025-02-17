import { ReactNode, useMemo } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { baseTheme } from '@/styles/baseTheme';
import { lightTheme } from '@/styles/coloredTheme';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const theme = useMemo(() => ({ ...lightTheme, ...baseTheme }), []);
	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
