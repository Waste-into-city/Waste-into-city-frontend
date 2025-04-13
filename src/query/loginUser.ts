type UserLogs = Record<'email' | 'password', string>;

const API_URI = import.meta.env.VITE_BACKEND_URI;
const FAIL_MESSAGE = 'Failed to log in! Check your email and password';

export const loginUser = async ({ email, password }: UserLogs) => {
	try {
		const response = await fetch(`${API_URI}/api/v1/identity/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (response.ok) {
			const json = await response.json();
			console.log(json);
			return;
		}
		throw new Error();
	} catch {
		throw new Error(FAIL_MESSAGE);
	}
};
