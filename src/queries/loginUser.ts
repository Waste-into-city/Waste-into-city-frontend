import { GET_SELF_USER_INFO_URI } from '@/constants/apiEndpoints';
import { SelfUserInfo } from '@/types/contracts/selfUserInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

type UserLogs = Record<'email' | 'password', string>;

const API_URI = import.meta.env.VITE_BACKEND_URI;
const FAIL_MESSAGE = 'Failed to log in! Check your email and password';

export const loginUser = async ({
	email,
	password,
}: UserLogs): Promise<SelfUserInfo> => {
	try {
		const loginResponse = await fetchWithAuth(
			`${API_URI}/api/v1/identity/login`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			}
		);

		if (!loginResponse.ok) {
			throw new Error();
		}

		const logsResponse = await fetchWithAuth(GET_SELF_USER_INFO_URI);

		if (!logsResponse.ok) {
			throw new Error();
		}

		const data = await logsResponse.json();

		return data;
	} catch {
		throw new Error(FAIL_MESSAGE);
	}
};
