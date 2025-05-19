import styled from 'styled-components';

export const WorkRatesWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	height: theme.heights.full,
	gap: theme.indent.large,

	'& > h2': {
		color: theme.colors.fullContrast,
		fontSize: theme.fontSizes.h2,

		[`@media ${theme.media.tablet}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},
}));

export const SubmitRatesButtons = styled.div(({ theme }) => ({
	display: 'flex',
	gap: theme.indent.large,

	[`@media ${theme.media.tablet}`]: {
		flexDirection: 'column',
		gap: theme.indent.medium,
	},
}));

export const ParticipantRatesWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.medium,
}));
