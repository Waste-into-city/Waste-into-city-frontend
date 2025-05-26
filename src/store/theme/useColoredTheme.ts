import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { COLORED_THEME_STORAGE } from '@/constants/persistStorages';
import { darkTheme, IColoredTheme, lightTheme } from '@/styles/coloredTheme';

type ColoredThemeInfo = {
	theme: 'dark' | 'light';
	themeObject: IColoredTheme;
};

type ColoredThemeState = ColoredThemeInfo & {
	toggleTheme: () => void;
};

const lightThemeState: ColoredThemeInfo = {
	theme: 'light',
	themeObject: lightTheme,
};

const darkThemeState: ColoredThemeInfo = {
	theme: 'dark',
	themeObject: darkTheme,
};

export const useColoredTheme = create<ColoredThemeState>()(
	persist(
		(set) => ({
			...lightThemeState,
			toggleTheme: () => {
				set((prevTheme) => ({
					...prevTheme,
					...(prevTheme.theme === 'light'
						? darkThemeState
						: lightThemeState),
				}));
			},
		}),
		{
			name: COLORED_THEME_STORAGE,
		}
	)
);
