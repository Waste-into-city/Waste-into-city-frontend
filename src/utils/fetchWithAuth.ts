import { TOKEN_REFRESH_URI } from '@/constants/apiEndpoints';

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
		const tokenRefreshResponse = await fetch(TOKEN_REFRESH_URI, {
			method: 'POST',
			credentials: 'include',
		});

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
