import { useNavigate } from 'react-router-dom';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { WorkInfoForm } from '@/components/common/WorkInfoForm';
import { ROUTES } from '@/constants/routes';
import { useCreateWork } from '@/queries/works/useCreateWork';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import {
	FAILED_TO_CREATE_WORK_MESSAGE,
	formInitialValues,
	WORK_CREATED_SUCCESSFULLY_MESSSAGE,
} from './constants';

export default function NewWorkSection() {
	const navigate = useNavigate();
	const { appendNotification } = useNotifications();

	const { mutateAsync, isPending } = useCreateWork({
		onSuccess: () => {
			appendNotification(
				NotificationTypes.Success,
				WORK_CREATED_SUCCESSFULLY_MESSSAGE
			);
			navigate(ROUTES.MAIN);
		},
		onError: () => {
			appendNotification(
				NotificationTypes.Error,
				FAILED_TO_CREATE_WORK_MESSAGE
			);
		},
	});

	return (
		<LoaderWrapper isLoaderVisible={isPending}>
			<WorkInfoForm
				initialValues={formInitialValues}
				onSubmit={mutateAsync}
			/>
		</LoaderWrapper>
	);
}
