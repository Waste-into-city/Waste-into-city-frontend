import { useEffect } from 'react';

import closeIcon from '@/assets/icons/svg/cross_icon.svg';
import { useNotifications } from '@/store/notifications/useNotifications';

import { NOTIFICATION_TIMEOUT } from './constants';
import * as S from './styled';

export const Notificator = () => {
	const { message, type, clearNotification } = useNotifications();

	useEffect(() => {
		let notificationTimeout: ReturnType<typeof setTimeout>;
		if (message) {
			notificationTimeout = setTimeout(
				clearNotification,
				NOTIFICATION_TIMEOUT
			);
		}
		return () => {
			clearTimeout(notificationTimeout);
		};
	}, [message, clearNotification]);

	return (
		<S.NotificationPopup $type={type} $isDisplayed={message !== null}>
			{message}
			<S.CloseNotificationButton onClick={clearNotification}>
				<img src={closeIcon} />
			</S.CloseNotificationButton>
		</S.NotificationPopup>
	);
};
