import { z } from 'zod';

import { FieldValidator } from '@/types/validator';

const validatorValues: FieldValidator = {
	min: {
		value: 1,
		message: 'Minimal length is 1 symbol',
	},
	max: {
		value: 100,
		message: 'Maximum length is 100 symbols',
	},
};

export const workTitleValidator = z
	.string()
	.min(validatorValues.min.value, validatorValues.min.message)
	.max(validatorValues.max.value, validatorValues.max.message);
