import { z } from 'zod';

import { FieldValidator } from '@/types/validator';

const validatorValues: FieldValidator = {
	min: {
		value: 8,
		message: 'Minimal length is 8 symbols',
	},
	max: {
		value: 255,
		message: 'Maximum length is 255 symbols',
	},
};

export const passwordValidator = z
	.string()
	.min(validatorValues.min.value, validatorValues.min.message)
	.max(validatorValues.max.value, validatorValues.max.message);

export const PASSWORDS_MUST_MATCH_MESSAGE = 'Passwords must match!';
