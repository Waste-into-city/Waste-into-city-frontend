type UserLogs = Record<'name' | 'email' | 'password', string>;

const API_URI = import.meta.env.VITE_BACKEND_URI;
const FAIL_MESSAGE = 'Failed to register! Check your credentials again';

export const registerUser = async ({
	email,
	name,
	password,
}: UserLogs): Promise<void> => {
	try {
		const response = await fetch(`${API_URI}/api/v1/identity/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				nickname: name,
			}),
		});
		if (response.ok) {
			return;
		}
		throw new Error();
	} catch {
		throw new Error(FAIL_MESSAGE);
	}
};
