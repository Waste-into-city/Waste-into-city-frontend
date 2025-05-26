import { Coordinates } from '@/types/coordinates';
import { TrashTypes } from '@/types/trashTypes';

import { WorkImageAttachment } from '../WorkImageAttachments/types';

export type WorkInfoForm = {
	title: string;
	description?: string;
};

export type WorkInfoFormValues = WorkInfoForm & {
	attachments: Array<WorkImageAttachment>;
	complexity: number;
	trashTypes: Array<TrashTypes>;
	location: Coordinates;
};

export type WorkInfoFormProps = {
	initialValues: WorkInfoFormValues;
	onSubmit: (values: WorkInfoFormValues) => Promise<void>;
	isEditForm?: boolean;
};
