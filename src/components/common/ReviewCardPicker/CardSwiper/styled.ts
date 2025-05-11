import styled from 'styled-components';

import { scrollbarCSS } from '@/styles/common/scrollbar';

const ScrollableContainer = styled.div`
	${scrollbarCSS}
`;

export const CardWrapper = styled(ScrollableContainer)<{
	$isAccepting: boolean;
	$isRejecting: boolean;
}>(({ theme, $isAccepting, $isRejecting }) => ({
	width: theme.widths.full,
	height: theme.heights.full,
	border: theme.borders.large,
	borderColor: theme.colors.smallContrast,
	borderRadius: theme.borderRadius.round,
	padding: theme.indent.scrollbar,
	paddingTop: theme.indent.small,
	transition: theme.transitions.fast,
	overflow: 'auto',
	position: 'relative',
	cursor: 'grab',

	...($isAccepting && {
		borderColor: theme.colors.primary,
	}),

	...($isRejecting && {
		borderColor: theme.colors.negative,
	}),
}));
