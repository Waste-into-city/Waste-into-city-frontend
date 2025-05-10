import styled from 'styled-components';

export const WorksListWrapper = styled.ul(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: theme.widths.full,
	gap: theme.indent.large,
}));

export const WorksListItem = styled.li(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	cursor: 'pointer',

	width: theme.widths.full,
	gap: theme.indent.medium,
	color: theme.colors.fullContrast,

	'& > h3': {
		wordBreak: 'break-word',
		fontSize: theme.fontSizes.h3,

		[`@media ${theme.media.tablet}`]: {
			width: theme.widths.full,
		},

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.text,
		},
	},
}));

export const WorkItemLabels = styled.div(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	gap: theme.indent.small,
	cursor: 'pointer',

	'& > img': {
		width: theme.sizes.listedTrashType,
		height: theme.sizes.listedTrashType,
		filter: theme.colors.iconContrast,
	},

	'& > label': {
		cursor: 'pointer',
	},
}));
