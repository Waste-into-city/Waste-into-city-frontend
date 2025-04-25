import { useColoredTheme } from '@/store/theme/useColoredTheme';

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
			<p>Dark theme</p>
		</S.ThemeSwitchWraper>
	);
};
