import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { WorkComplexitySelector } from '@/components/common/WorkInfoForm/WorkComplexitySelector';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { ROUTES } from '@/constants/routes';
import { useForm } from '@/hooks/useForm';
import { useCreateWorkReportResult } from '@/queries/works/useCreateWorkReportResult';
import { useNotifications } from '@/store/notifications/useNotifications';
import { WorkStatus } from '@/types/contracts/workInfo';
import { NotificationTypes } from '@/types/notificationTypes';
import { getIdForWorkStatus } from '@/utils/getWorkStatusById';

import {
	defaultValues,
	FAILED_WORK_STATUS,
	REPORT_CREATE_FAILED,
	REPORT_CREATED_SUCCESSFULLY,
	SUBMIT_BUTTON_LABEL,
	SUCCESSFUL_WORK_STATUS,
	WORK_REPORT_RESULT_HEADING,
} from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { WorkReportResultForm } from './types';

export default function WorkReportResultSection() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { appendNotification } = useNotifications();

	const { mutateAsync, isPending } = useCreateWorkReportResult(id ?? '', {
		onSuccess: () => {
			navigate(`${ROUTES.WORK_INFO}/${id}`);
			appendNotification(
				NotificationTypes.Success,
				REPORT_CREATED_SUCCESSFULLY
			);
		},
		onError: () => {
			appendNotification(NotificationTypes.Error, REPORT_CREATE_FAILED);
		},
	});

	const [complexity, setComplexity] = useState(1);
	const [isWorkSuccessful, setIsWorkSuccessful] = useState(true);

	const { handleFormSubmit, handleFieldChange, fields, errors } =
		useForm<WorkReportResultForm>({
			defaultValues,
			submitHandler: async ({ title, description }) => {
				await mutateAsync({
					title,
					description: description ?? '',
					workComplexityTypesId: complexity,
					workStatusTypesId: getIdForWorkStatus(
						isWorkSuccessful
							? WorkStatus.FinishedSuccessfully
							: WorkStatus.FinishedFailed
					),
				});
			},
			validationSchema,
		});

	const handleWorkStatusToggle = () => {
		setIsWorkSuccessful((prevSuccessful) => !prevSuccessful);
	};

	return (
		<LoaderWrapper isLoaderVisible={isPending}>
			<S.FormWrapper onSubmit={handleFormSubmit}>
				<h2>{WORK_REPORT_RESULT_HEADING}</h2>
				<Input
					placeholder='Title'
					onChange={handleFieldChange('title')}
					value={fields.title}
					errorText={errors.title}
				/>
				<TextArea
					placeholder='Description'
					onChange={handleFieldChange('description')}
					value={fields.description}
					errorText={errors.description}
				/>
				<WorkComplexitySelector
					complexity={complexity}
					setComplexity={setComplexity}
				/>
				<S.WorkStatusToggle
					$isSuccessful={isWorkSuccessful}
					onClick={handleWorkStatusToggle}
				>
					{isWorkSuccessful
						? SUCCESSFUL_WORK_STATUS
						: FAILED_WORK_STATUS}
				</S.WorkStatusToggle>
				<S.SubmitButton variant='primary' disabled={isPending}>
					{SUBMIT_BUTTON_LABEL}
				</S.SubmitButton>
			</S.FormWrapper>
		</LoaderWrapper>
	);
}
