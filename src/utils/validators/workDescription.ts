import { z } from 'zod';

import { FieldValidator } from '@/types/validator';

const validatorValues: FieldValidator = {
	min: {
		value: 0,
		message: '',
	},
	max: {
		value: 1000,
		message: 'Maximum length is 1000 symbols',
	},
};

export const workDescriptionValidator = z
	.string()
	.max(validatorValues.max.value, validatorValues.max.message)
	.optional();
