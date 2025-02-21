import { z } from 'zod';

import { config } from './config';

const {
	FIELD_ERRORS: { email, password },
} = config;

const LoginFormSchema = z.object({
	email: z
		.string()
		.email(email.invalid)
		.min(email.min.value, email.min.message)
		.max(email.max.value, email.max.message),
	password: z
		.string()
		.min(password.min.value, password.min.message)
		.max(password.max.value, password.max.message),
});

export const helpers = {
	LoginFormSchema,
};
