import { ReactNode, useCallback, useEffect } from 'react';

import { refreshToken } from '@/queries/refreshToken';
import { useNotifications } from '@/store/notifications/useNotifications';
import { useUserLogs } from '@/store/user/useUserLogs';
import { NotificationTypes } from '@/types/notificationTypes';
import { UserRoles } from '@/types/userRoles';
import { logoutObserver } from '@/utils/logoutObserver';

import { SESSION_EXPIRED_MESSAGE } from './constants';

export const LogoutProvider = ({ children }: { children: ReactNode }) => {
	const {
		logOut,
		logs: { highRoleName },
	} = useUserLogs();
	const { appendNotification } = useNotifications();

	const logOutWithNotification = useCallback(() => {
		logOut();
		appendNotification(NotificationTypes.Error, SESSION_EXPIRED_MESSAGE);
	}, [appendNotification, logOut]);

	useEffect(() => {
		const logOutReference = logOutWithNotification;
		logoutObserver.subscribe(logOutReference);

		return () => {
			logoutObserver.unsubscribe(logOutReference);
		};
	}, [logOutWithNotification]);

	useEffect(() => {
		if (highRoleName !== UserRoles.Guest) {
			refreshToken()
				.then(({ ok }) => {
					if (!ok) {
						logOutWithNotification();
					}
				})
				.catch(logOutWithNotification);
		}
	}, []);

	return children;
};
