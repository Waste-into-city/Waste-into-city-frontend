import { z, ZodString } from 'zod';

export const optionalValidator = (validator: ZodString) =>
	z.optional(validator).or(z.literal(''));
