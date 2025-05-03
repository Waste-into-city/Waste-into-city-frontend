import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { WorkImageAttachments } from '@/components/common/WorkImageAttachments';
import { WorkImageAttachment } from '@/components/common/WorkImageAttachments/types';
import { Input } from '@/components/ui/Input';
import { ROUTES } from '@/constants/routes';
import { useForm } from '@/hooks/useForm';

import {
	initialValues,
	REPORT_BUTTON_LABEL,
	REPORT_FORM_LABEL,
	REPORT_LABELS,
} from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { WorkReportForm } from './types';

export default function WorkReportSection() {
	const navigate = useNavigate();
	const [attachments, setAttachments] = useState<Array<WorkImageAttachment>>(
		[]
	);

	const submitHandler = useCallback(
		async ({ title, description }: WorkReportForm) => {
			console.log(title, description, attachments);
			navigate(ROUTES.MAIN);
		},
		[attachments, navigate]
	);

	const { fields, handleFieldChange, handleFormSubmit, errors } =
		useForm<WorkReportForm>({
			defaultValues: initialValues,
			validationSchema,
			submitHandler,
		});

	return (
		<S.WorkReportFormWrapper onSubmit={handleFormSubmit}>
			<h2>{REPORT_FORM_LABEL}</h2>
			<Input
				value={fields.title}
				onChange={handleFieldChange('title')}
				errorText={errors.title}
				placeholder={REPORT_LABELS.title}
			/>
			<S.ReportDescriptionArea
				value={fields.description}
				onChange={handleFieldChange('description')}
				errorText={errors.description}
				placeholder={REPORT_LABELS.description}
			/>
			<WorkImageAttachments
				attachments={attachments}
				setAttachments={setAttachments}
			/>
			<S.SubmitButton variant='negative'>
				{REPORT_BUTTON_LABEL}
			</S.SubmitButton>
		</S.WorkReportFormWrapper>
	);
}
