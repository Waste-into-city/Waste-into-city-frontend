import { z, ZodSchema } from 'zod';

import { emailValidator } from '@/utils/validators/email';
import { nameValidator } from '@/utils/validators/name';
import { optionalValidator } from '@/utils/validators/optional';
import {
	PASSWORDS_MUST_MATCH_MESSAGE,
	passwordValidator,
} from '@/utils/validators/password';

import { PREVIOUS_PASSWORD_NOT_SPECIFIED_MESSAGE } from './constants';
import { UserAccountSettingsForm } from './types';

export const validationSchema: ZodSchema<UserAccountSettingsForm> = z
	.object({
		name: nameValidator,
		email: emailValidator,
		previousPassword: optionalValidator(passwordValidator),
		newPassword: optionalValidator(passwordValidator),
		newPasswordConfirmation: optionalValidator(passwordValidator),
	})
	.superRefine((data, context) => {
		if (
			(data.newPassword || data.newPasswordConfirmation) &&
			!data.previousPassword
		) {
			context.addIssue({
				code: z.ZodIssueCode.custom,
				message: PREVIOUS_PASSWORD_NOT_SPECIFIED_MESSAGE,
				path: ['global'],
			});
			return;
		}

		if (data.newPassword !== data.newPasswordConfirmation) {
			context.addIssue({
				code: z.ZodIssueCode.custom,
				message: PASSWORDS_MUST_MATCH_MESSAGE,
				path: ['global'],
			});
		}
	});
