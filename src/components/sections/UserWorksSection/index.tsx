import { useEffect } from 'react';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { WorksList } from '@/components/common/WorksList';
import { getNextUserWorks } from '@/queries/works/getNextUserWorks';
import { useGetUserWorks } from '@/queries/works/useGetUserWorks';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import { FAILED_TO_GET_WORKS_MESSAGE, USER_WORKS_HEADING } from './constants';
import { UserWorksListWrapper } from './styled';

const UserWorksSection = () => {
	const { data, isLoading, error } = useGetUserWorks();
	const { appendNotification } = useNotifications();

	useEffect(() => {
		if (error) {
			appendNotification(
				NotificationTypes.Error,
				FAILED_TO_GET_WORKS_MESSAGE
			);
		}
	}, [error]);

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
			<UserWorksListWrapper>
				<h2>{USER_WORKS_HEADING}</h2>
				{data && (
					<WorksList
						initialWorks={data}
						getNextWorks={getNextUserWorks}
					/>
				)}
			</UserWorksListWrapper>
		</LoaderWrapper>
	);
};

export default UserWorksSection;
