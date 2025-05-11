import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const CardPickerWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	height: theme.heights.full,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	gap: theme.indent.medium,
}));

export const CardOptionButtonsWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	padding: `0 ${theme.indent.medium}`,
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: 'auto',
}));

export const CardOptionButton = styled(Button)(({ theme }) => ({
	width: theme.sizes.controlIcon,
	height: theme.sizes.controlIcon,
	borderRadius: theme.borderRadius.circle,
}));

export const CancelOptionButton = styled(CardOptionButton)(({ theme }) => ({
	backgroundColor: theme.colors.negative,
}));
