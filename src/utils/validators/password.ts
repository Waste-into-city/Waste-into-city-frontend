import { z } from 'zod';

import { FieldValidator } from '@/types/validator';

const validatorValues: FieldValidator = {
	min: {
		value: 8,
		message: 'Minimal length for password is 8 symbols!',
	},
	max: {
		value: 255,
		message: 'Maximum length for password is 255 symbols!',
	},
};

export const passwordValidator = z
	.string()
	.min(validatorValues.min.value, validatorValues.min.message)
	.max(validatorValues.max.value, validatorValues.max.message);
