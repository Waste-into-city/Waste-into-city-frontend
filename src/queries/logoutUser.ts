import { USER_LOGOUT_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const logoutUser = async () =>
	fetchWithAuth(
		USER_LOGOUT_URI,
		{
			method: 'POST',
		},
		false
	);
