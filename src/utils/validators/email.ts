import { z } from 'zod';

import { FieldValidator } from '@/types/validator';

const validatorValues: FieldValidator = {
	min: {
		value: 6,
		message: 'Minimal length for email is 6 symbols!',
	},
	max: {
		value: 45,
		message: 'Maximum length for email is 45 symbols!',
	},
};

const INVALID_EMAIL_MESSAGE = 'Provided email is invalid';

export const emailValidator = z
	.string()
	.email(INVALID_EMAIL_MESSAGE)
	.min(validatorValues.min.value, validatorValues.min.message)
	.max(validatorValues.max.value, validatorValues.max.message);
