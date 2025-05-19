import { useNavigate } from 'react-router-dom';

import { WorkInfoForm } from '@/components/common/WorkInfoForm';
import { ROUTES } from '@/constants/routes';
import { useCreateWork } from '@/queries/works/useCreateWork';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import {
	formInitialValues,
	WORK_CREATED_SUCCESSFULLY_MESSSAGE,
} from './constants';

export default function NewWorkSection() {
	const navigate = useNavigate();
	const { appendNotification } = useNotifications();

	const { mutateAsync } = useCreateWork({
		onSuccess: () => {
			appendNotification(
				NotificationTypes.Success,
				WORK_CREATED_SUCCESSFULLY_MESSSAGE
			);
			navigate(ROUTES.MAIN);
		},
	});

	return (
		<WorkInfoForm
			initialValues={formInitialValues}
			onSubmit={mutateAsync}
		/>
	);
}
