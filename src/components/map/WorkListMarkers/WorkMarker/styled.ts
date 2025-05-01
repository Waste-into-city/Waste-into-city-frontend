import styled from 'styled-components';

export const WorkMarkerPin = styled.div(({ theme }) => ({
	width: theme.sizes.workMarker,
	height: theme.sizes.workMarker,
	padding: theme.indent.small,
	backgroundColor: theme.colors.work,
	borderRadius: theme.borderRadius.circle,
	boxShadow: theme.boxShadows.small,
	cursor: 'pointer',

	img: {
		width: theme.widths.full,
		height: theme.heights.full,
		filter: theme.colors.iconPrimaryContrast,
	},
}));
