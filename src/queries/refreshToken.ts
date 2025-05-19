import { TOKEN_REFRESH_URI } from '@/constants/apiEndpoints';

export const refreshToken = async () => {
	const tokenRefreshResponse = await fetch(TOKEN_REFRESH_URI, {
		method: 'POST',
		credentials: 'include',
	});
	return tokenRefreshResponse;
};
