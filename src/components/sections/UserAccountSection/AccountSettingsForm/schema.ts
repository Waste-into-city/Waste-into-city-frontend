import { z, ZodSchema } from 'zod';

import { emailValidator } from '@/utils/validators/email';
import { nameValidator } from '@/utils/validators/name';
import { optionalValidator } from '@/utils/validators/optional';
import { passwordValidator } from '@/utils/validators/password';

import { UserAccountSettingsForm } from './types';

export const validationSchema: ZodSchema<UserAccountSettingsForm> = z.object({
	name: nameValidator,
	email: emailValidator,
	previousPassword: optionalValidator(passwordValidator),
	newPassword: optionalValidator(passwordValidator),
	newPasswordConfirmation: optionalValidator(passwordValidator),
});
