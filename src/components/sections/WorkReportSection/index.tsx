import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { WorkImageAttachments } from '@/components/common/WorkImageAttachments';
import { WorkImageAttachment } from '@/components/common/WorkImageAttachments/types';
import { Input } from '@/components/ui/Input';
import { ROUTES } from '@/constants/routes';
import { useForm } from '@/hooks/useForm';
import { useReportWork } from '@/queries/works/useReportWork';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import {
	initialValues,
	REPORT_BUTTON_LABEL,
	REPORT_FORM_LABEL,
	REPORT_LABELS,
	WORK_NOT_REPORTED_MESSAGE,
	WORK_REPORTED_MESSAGE,
} from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { WorkReportForm } from './types';

export default function WorkReportSection() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { appendNotification } = useNotifications();

	const [attachments, setAttachments] = useState<Array<WorkImageAttachment>>(
		[]
	);

	const { mutateAsync } = useReportWork(id ?? '', {
		onError: () => {
			appendNotification(
				NotificationTypes.Error,
				WORK_NOT_REPORTED_MESSAGE
			);
		},
		onSuccess: () => {
			appendNotification(
				NotificationTypes.Success,
				WORK_REPORTED_MESSAGE
			);
		},
	});

	const submitHandler = useCallback(
		async ({ title, description }: WorkReportForm) => {
			await mutateAsync({
				title,
				description,
				attachments: attachments.map(({ file }) => file),
			});
			navigate(ROUTES.MAIN);
		},
		[attachments, navigate, mutateAsync]
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
