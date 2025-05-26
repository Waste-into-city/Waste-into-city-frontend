import styled from 'styled-components';

export const NewWorkForm = styled.form(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	height: theme.heights.full,
	gap: theme.indent.large,
}));

export const BottomButtons = styled.div(({ theme }) => ({
	display: 'flex',
	justifySelf: 'flex-end',
	marginTop: 'auto',

	width: theme.widths.full,
	gap: theme.indent.large,

	'& > button': {
		flexGrow: 1,
	},

	[`@media ${theme.media.tablet}`]: {
		flexDirection: 'column',
		gap: theme.indent.medium,
	},
}));
