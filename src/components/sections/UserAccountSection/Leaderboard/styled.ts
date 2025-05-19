import styled from 'styled-components';

export const LeaderboardWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
	padding: theme.indent.small,
	marginTop: theme.indent.medium,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},
}));
