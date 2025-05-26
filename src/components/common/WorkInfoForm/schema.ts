import { z, ZodSchema } from 'zod';

import { workDescriptionValidator } from '@/utils/validators/workDescription';
import { workTitleValidator } from '@/utils/validators/workTitle';

import { WorkInfoForm } from './types';

export const validationSchema: ZodSchema<WorkInfoForm> = z.object({
	title: workTitleValidator,
	description: workDescriptionValidator,
});
