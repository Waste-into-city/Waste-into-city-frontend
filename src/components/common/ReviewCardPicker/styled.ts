import styled from 'styled-components';

import { Button } from '@/components/ui/Button';
import { scrollbarCSS } from '@/styles/common/scrollbar';

export const CardPickerWrapper = styled.div<{
	$isAccepting: boolean;
	$isRejecting: boolean;
}>(({ theme, $isAccepting, $isRejecting }) => ({
	width: theme.widths.full,
	height: theme.heights.full,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	gap: theme.indent.medium,
	border: theme.borders.large,
	borderColor: theme.colors.smallContrast,
	cursor: 'grab',

	...($isAccepting && {
		borderColor: theme.colors.primary,
	}),

	...($isRejecting && {
		borderColor: theme.colors.negative,
	}),
}));

const ScrollableContainer = styled.div`
	${scrollbarCSS}
`;

export const CardWrapper = styled(ScrollableContainer)(({ theme }) => ({
	width: theme.widths.full,
	height: theme.heights.full,

	borderRadius: theme.borderRadius.round,
	padding: theme.indent.small,
	transition: theme.transitions.fast,
	overflow: 'auto',
	position: 'relative',
}));

export const CardOptionButtonsWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	padding: theme.indent.medium,
	display: 'flex',
	justifyContent: 'space-between',
	justifySelf: 'flex-end',
	marginTop: 'auto',
	boxShadow: `0 -2px ${theme.indent.small}`,
}));

export const CardOptionButton = styled(Button)(({ theme }) => ({
	width: theme.sizes.controlIcon,
	height: theme.sizes.controlIcon,
	borderRadius: theme.borderRadius.circle,
}));

export const CancelOptionButton = styled(CardOptionButton)(({ theme }) => ({
	backgroundColor: theme.colors.negative,
}));
