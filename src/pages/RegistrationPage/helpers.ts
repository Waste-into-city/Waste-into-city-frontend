import { z, ZodSchema } from 'zod';

import { emailValidator } from '@/utils/validators/email';
import { nameValidator } from '@/utils/validators/name';
import { passwordValidator } from '@/utils/validators/password';

import { config, RegistrationForm } from './config';

const { NOT_MATCHING_PASSWORDS_MESSAGE } = config;

const RegistrationSchema: ZodSchema<RegistrationForm> = z
	.object({
		name: nameValidator,
		email: emailValidator,
		password: passwordValidator,
		confirmPassword: passwordValidator,
	})
	.refine(
		({ password, confirmPassword }) => {
			return password === confirmPassword;
		},
		{ message: NOT_MATCHING_PASSWORDS_MESSAGE, path: ['global'] }
	);

export const helpers = {
	RegistrationSchema,
};
