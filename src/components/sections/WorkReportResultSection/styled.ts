import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const FormWrapper = styled.form(({ theme }) => ({
	width: theme.widths.full,
	height: theme.heights.full,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.medium,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},
}));

export const SubmitButton = styled(Button)(() => ({
	justifySelf: 'flex-end',
	marginTop: 'auto',
}));

export const WorkStatusToggle = styled.p<{ $isSuccessful: boolean }>(
	({ theme, $isSuccessful }) => ({
		fontSize: theme.fontSizes.h2,
		color: $isSuccessful ? theme.colors.positive : theme.colors.negative,
		cursor: 'pointer',
		userSelect: 'none',

		':hover': {
			textDecoration: 'underline',
		},
	})
);
