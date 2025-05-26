import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const WorkInfoSectionWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: theme.heights.full,
	gap: theme.indent.medium,
}));

export const WorkControls = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.medium,
	marginTop: 'auto',
	paddingBottom: theme.indent.medium,
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
	[`@media ${theme.media.phone}`]: {
		width: '100%',
	},
}));
