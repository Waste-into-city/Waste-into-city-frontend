import styled from 'styled-components';

import { Button } from '@/components/ui/Button';
import { TextArea } from '@/components/ui/TextArea';

export const WorkReportFormWrapper = styled.form(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
	paddingTop: theme.indent.large,
	width: theme.widths.full,
	height: theme.heights.full,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},
}));

export const ReportDescriptionArea = styled(TextArea)(({ theme }) => ({
	'& > textarea': {
		height: theme.heights.reportTextArea,
	},
}));

export const SubmitButton = styled(Button)(() => ({
	marginTop: 'auto',
}));
