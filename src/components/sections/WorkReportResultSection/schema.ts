import { z, ZodSchema } from 'zod';

import { workDescriptionValidator } from '@/utils/validators/workDescription';
import { workTitleValidator } from '@/utils/validators/workTitle';

import { WorkReportResultForm } from './types';

export const validationSchema: ZodSchema<WorkReportResultForm> = z.object({
	title: workTitleValidator,
	description: workDescriptionValidator,
});
