import { z } from 'zod';

import { emailValidator } from '@/utils/validators/email';
import { passwordValidator } from '@/utils/validators/password';

const LoginFormSchema = z.object({
	email: emailValidator,
	password: passwordValidator,
});

export const helpers = {
	LoginFormSchema,
};
