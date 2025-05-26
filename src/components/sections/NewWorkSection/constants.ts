import { WorkInfoFormValues } from '@/components/common/WorkInfoForm/types';

export const formInitialValues: WorkInfoFormValues = {
	title: '',
	description: '',
	trashTypes: [],
	attachments: [],
	complexity: 1,
	location: {
		lat: 0,
		lng: 0,
	},
};

export const WORK_CREATED_SUCCESSFULLY_MESSSAGE =
	'Your application to create a work has been sent successfully!';
export const FAILED_TO_CREATE_WORK_MESSAGE = 'Failed to create the work!';
