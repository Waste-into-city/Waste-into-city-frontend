import styled from 'styled-components';

export const UserWorksListWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.medium,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},
}));
