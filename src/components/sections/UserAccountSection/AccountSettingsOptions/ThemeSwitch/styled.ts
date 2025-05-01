import styled from 'styled-components';

const TOGGLE_WIDTH = 60;
const TOGGLE_HEIGHT = TOGGLE_WIDTH / 2;

export const ThemeSwitchWraper = styled.div(({ theme }) => ({
	gap: theme.indent.medium,
	color: theme.colors.fullContrast,
	display: 'flex',
	alignItems: 'center',
	fontSize: theme.fontSizes.control,
	padding: `${theme.indent.medium} 0`,

	[`@media ${theme.media.phone}`]: {
		fontSize: theme.fontSizes.text,
	},
}));

export const ThemeToggleButton = styled.button<{ $isDarkTheme: boolean }>(
	({ theme, $isDarkTheme }) => ({
		width: TOGGLE_WIDTH,
		height: TOGGLE_HEIGHT,
		border: 'none',
		outline: `${theme.borders.small} ${theme.colors.fullContrast}`,
		backgroundColor: $isDarkTheme
			? theme.colors.primary
			: theme.colors.background,
		borderRadius: theme.borderRadius.large,
		position: 'relative',
		cursor: 'pointer',
		transition: theme.transitions.fast,

		'&:after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			left: 0,
			width: TOGGLE_HEIGHT,
			height: TOGGLE_HEIGHT,
			borderRadius: theme.borderRadius.circle,
			backgroundColor: $isDarkTheme
				? theme.colors.fullContrast
				: theme.colors.background,
			outline: `${theme.borders.small} ${theme.colors.fullContrast}`,
			transform: `translateX(${$isDarkTheme ? '100%' : '0s'})`,
			transition: theme.transitions.fast,
		},

		'&:focus-visible, &:hover': {
			outlineColor: theme.colors.primary,
			'&:after': {
				outlineColor: theme.colors.primary,
			},
		},
	})
);
