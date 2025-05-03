import { Dispatch, SetStateAction } from 'react';

export type WorkImageAttachment = {
	url: string;
	file: File | null;
};

export type WorkImageAttachmentsProps = {
	attachments: Array<WorkImageAttachment>;
	setAttachments: Dispatch<SetStateAction<Array<WorkImageAttachment>>>;
};
