type UserLogs = Record<'name' | 'email' | 'password', string>;

export const registerUser = async ({
	email,
	name,
	password,
}: UserLogs): Promise<void> => {
	const response = await fetch(
		'http://26.98.10.68:5111/api/v1/identity/register',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				nickname: name,
			}),
		}
	);
	if (response.ok) {
		return;
	}
	throw new Error();
};
