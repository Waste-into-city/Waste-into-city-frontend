import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const WorkLocationButton = styled(Button)(({ theme }) => ({
	width: theme.widths.full,
	marginTop: 'auto',
	justifySelf: 'flex-end',
}));
