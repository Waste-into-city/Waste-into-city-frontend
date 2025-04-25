import { ReactNode, useMemo } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useColoredTheme } from '@/store/theme/useColoredTheme';
import { baseTheme } from '@/styles/baseTheme';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { themeObject } = useColoredTheme();
	const theme = useMemo(
		() => ({ ...themeObject, ...baseTheme }),
		[themeObject]
	);
	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
