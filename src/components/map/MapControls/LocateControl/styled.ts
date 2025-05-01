import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const LocateButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.colors.background,
	border: theme.borders.small,
	borderColor: theme.colors.smallContrast,
	borderRadius: theme.borderRadius.large,
	width: theme.sizes.controlIcon,
	height: theme.sizes.controlIcon,
	padding: theme.indent.medium,
}));
