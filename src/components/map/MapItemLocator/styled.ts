import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const MapItemLocationControls = styled.section(({ theme }) => ({
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
	zIndex: theme.zIndexes.middle,
	top: theme.indent.large,
	left: theme.indent.large,

	[`@media ${theme.media.phone}`]: {
		top: theme.indent.medium,
		left: theme.indent.medium,
		gap: theme.indent.medium,
	},
}));

export const ControlButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.colors.background,
	outline: theme.borders.small,
	outlineColor: theme.colors.smallContrast,
	borderRadius: theme.borderRadius.large,
	width: theme.sizes.controlIcon,
	height: theme.sizes.controlIcon,
}));

export const CancelButton = styled(ControlButton)(() => ({
	'& > img': {
		transform: 'rotate(90deg)',
	},
}));
