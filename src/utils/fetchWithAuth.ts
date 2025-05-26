import { HTTP_STATUSES } from '@/constants/httpStatuses';
import { refreshToken } from '@/queries/refreshToken';

import { logoutObserver } from './logoutObserver';

export const fetchWithAuth = async (
	input: RequestInfo | URL,
	init?: RequestInit,
	isLogoutRequired: boolean = true
): Promise<Response> => {
	const firstResponse = await fetch(input, {
		...init,
		credentials: 'include',
	});

	if (firstResponse.status === HTTP_STATUSES.Unauthorized) {
		const tokenRefreshResponse = await refreshToken();

		if (tokenRefreshResponse && tokenRefreshResponse.ok) {
			const secondResponse = await fetch(input, {
				...init,
				credentials: 'include',
			});
			return secondResponse;
		}

		if (!tokenRefreshResponse) {
			return firstResponse;
		}

		if (isLogoutRequired) {
			logoutObserver.notify();
		}

		throw new Error();
	}

	return firstResponse;
};
