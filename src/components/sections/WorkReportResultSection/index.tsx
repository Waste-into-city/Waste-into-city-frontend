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

import { defaultValues } from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { WorkReportResultForm } from './types';

export default function WorkReportResultSection() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { appendNotification } = useNotifications();

	const { mutateAsync, isPending } = useCreateWorkReportResult(id ?? '', {
		onSuccess: () => {
			navigate(ROUTES.WORK_INFO + id);
			appendNotification(NotificationTypes.Success, 'OK');
		},
		onError: () => {
			appendNotification(NotificationTypes.Error, 'Bad');
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
							? WorkStatus.Successful
							: WorkStatus.Unknown
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
				<h2>Report work results</h2>
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
					{isWorkSuccessful ? 'Success' : 'Failed'}
				</S.WorkStatusToggle>
				<S.SubmitButton variant='primary' disabled={isPending}>
					Submit
				</S.SubmitButton>
			</S.FormWrapper>
		</LoaderWrapper>
	);
}
