import { z, ZodSchema, ZodString } from 'zod';

import { adminPanelFieldsKeys } from '../constants';

import {
	MAX_VALUE,
	MAX_VALUE_ERROR,
	MIN_VALUE,
	MIN_VALUE_ERROR,
	REQUIRES_NUMBER_ERROR,
} from './constants';
import { AdminPanelForm } from './types';

const commonSchema = z
	.string()
	.refine((value) => !Number.isNaN(value), REQUIRES_NUMBER_ERROR)
	.refine((value) => Number(value) >= MIN_VALUE, MIN_VALUE_ERROR)
	.refine((value) => Number(value) <= MAX_VALUE, MAX_VALUE_ERROR);

export const validationSchema: ZodSchema<AdminPanelForm> = z.object(
	adminPanelFieldsKeys.reduce(
		(schema, fieldKey) => ({ ...schema, [fieldKey]: commonSchema }),
		{}
	) as Record<keyof AdminPanelForm, ZodString>
);
