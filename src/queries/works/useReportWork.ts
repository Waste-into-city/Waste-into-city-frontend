import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { CREATE_WORK_REPORT_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

import { uploadImage } from '../uploadImage';

type ReportMutation = {
	title: string;
	description?: string;
	attachments: Array<File | null>;
};

export const useReportWork = (
	workId: string,
	options?: UseMutationOptions<void, Error, ReportMutation>
) =>
	useMutation<void, Error, ReportMutation>({
		...options,
		mutationFn: async ({
			title,
			description,
			attachments,
		}: ReportMutation) => {
			const attachedNames = await Promise.all(
				attachments
					.filter(Boolean)
					.map((attachment) => attachment && uploadImage(attachment))
			);

			const response = await fetchWithAuth(`${CREATE_WORK_REPORT_URI}`, {
				method: 'POST',
				body: JSON.stringify({
					title,
					description,
					imageNames: attachedNames,
					worksId: workId,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error();
			}
		},
	});
