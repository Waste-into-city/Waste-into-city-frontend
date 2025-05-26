import styled from 'styled-components';

export const ScoreSettingsList = styled.ul(({ theme }) => ({
	color: theme.colors.fullContrast,
}));

export const ScoreSettingDescription = styled.li(({ theme }) => ({
	display: 'flex',
	gap: theme.indent.small,
	fontSize: theme.fontSizes.text,
	padding: `${theme.indent.medium} 0`,
	alignItems: 'center',
	border: theme.borders.small,
	borderColor: theme.colors.smallContrast,
	borderLeft: 'none',
	borderRight: 'none',

	[`@media ${theme.media.phone}`]: {
		fontSize: theme.fontSizes.label,
	},

	'&:first-child': {
		borderTop: 'none',
	},

	'&:last-child': {
		borderBottom: 'none',
	},

	'& > h3': {
		fontSize: theme.fontSizes.control,
		color: theme.colors.primary,
		minWidth: theme.widths.maxScoreSettingLabel,
		fontWeight: 'bolder',
		whiteSpace: 'pre',

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.text,
			minWidth: theme.widths.minScoreSettingLabel,
		},
	},

	'& > p': {
		width: theme.widths.full,
	},
}));
