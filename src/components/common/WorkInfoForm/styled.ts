import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const NewWorkForm = styled.form(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	height: theme.heights.full,
	paddingTop: theme.indent.large,
	gap: theme.indent.large,
}));

export const SubmitButton = styled(Button)(() => ({
	justifySelf: 'flex-end',
	marginTop: 'auto',
}));
