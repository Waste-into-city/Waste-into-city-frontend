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

	if (firstResponse.status === 401) {
		const tokenRefreshResponse = await refreshToken();

		if (tokenRefreshResponse.ok) {
			const secondResponse = await fetch(input, {
				...init,
				credentials: 'include',
			});
			return secondResponse;
		}

		if (isLogoutRequired) {
			logoutObserver.notify();
		}
		throw new Error();
	}

	return firstResponse;
};
