import { WorkImageAttachment } from '@/components/common/WorkImageAttachments/types';

export type WorkReportForm = {
	title: string;
	description?: string;
};

export type WorkReportFormValues = WorkReportForm & {
	attachments: Array<WorkImageAttachment>;
};
