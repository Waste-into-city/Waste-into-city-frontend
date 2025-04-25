import { useColoredTheme } from '@/store/theme/useColoredTheme';

import { THEME_TOGGLE_LABEL } from './constants';
import * as S from './styled';

export const ThemeSwitch = () => {
	const { toggleTheme, theme } = useColoredTheme();
	const isDarkTheme = theme === 'dark';

	return (
		<S.ThemeSwitchWraper>
			<S.ThemeToggleButton
				onClick={toggleTheme}
				$isDarkTheme={isDarkTheme}
			/>
			<p>{THEME_TOGGLE_LABEL}</p>
		</S.ThemeSwitchWraper>
	);
};
