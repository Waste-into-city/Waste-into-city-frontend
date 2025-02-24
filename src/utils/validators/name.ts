import { z } from 'zod';

import { FieldValidator } from '@/types/validator';

const validatorValues: FieldValidator = {
	min: {
		value: 1,
		message: 'Minimal length for name is 1 symbol!',
	},
	max: {
		value: 45,
		message: 'Maximum length for name is 45 symbols!',
	},
};

export const nameValidator = z
	.string()
	.min(validatorValues.min.value, validatorValues.min.message)
	.max(validatorValues.max.value, validatorValues.max.message);
