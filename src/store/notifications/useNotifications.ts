import { ReactNode } from 'react';

import { create } from 'zustand';

import { NotificationTypes } from '@/types/notificationTypes';

type NotificationsState = {
	message: string | ReactNode | null;
	type: NotificationTypes;
	appendNotification: (
		type: NotificationTypes,
		message: string | ReactNode
	) => void;
	clearNotification: VoidFunction;
};

export const useNotifications = create<NotificationsState>()((set) => ({
	message: null,
	type: NotificationTypes.Info,

	appendNotification: (type, message) =>
		set((prevState) => ({ ...prevState, message, type })),

	clearNotification: () =>
		set((prevState) => ({
			...prevState,
			message: null,
			type: NotificationTypes.Info,
		})),
}));
