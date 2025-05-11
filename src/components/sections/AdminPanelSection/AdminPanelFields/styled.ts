import styled from 'styled-components';

export const AdminPanelFieldsForm = styled.form(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,

	'& > button': {
		width: theme.widths.scoreSettingsField,
	},

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},
}));

export const ScoreSettingsFieldsGrid = styled.div(({ theme }) => ({
	display: 'grid',
	gap: theme.indent.large,
	gridTemplateColumns: `repeat(auto-fit, minmax(${theme.widths.scoreSettingsField},1fr))`,
	width: theme.widths.full,
	padding: `${theme.indent.small} ${theme.borders.small.split(' ')[0]}`,
}));

export const ScoreSettingsButtonsWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	gap: theme.indent.medium,

	[`@media ${theme.media.tablet}`]: {
		flexDirection: 'column',
	},
}));
