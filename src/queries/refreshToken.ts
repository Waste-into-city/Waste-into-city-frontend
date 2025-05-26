import { TOKEN_REFRESH_URI } from '@/constants/apiEndpoints';
import { RESPONSE_CODES } from '@/constants/responseCodes';

export const refreshToken = async () => {
	const tokenRefreshResponse = await fetch(TOKEN_REFRESH_URI, {
		method: 'POST',
		credentials: 'include',
	});

	if (!tokenRefreshResponse.ok) {
		const errorData = await tokenRefreshResponse.json();
		if (errorData.code === RESPONSE_CODES.TOKEN_IS_AVAILABLE) {
			return null;
		}
	}

	return tokenRefreshResponse;
};
