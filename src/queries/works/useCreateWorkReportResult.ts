import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { CREATE_WORK_REPORT_RESULT_URI } from '@/constants/apiEndpoints';
import { WorkReportResult } from '@/types/contracts/workReportResult';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

type WorkReportResultInfo = Omit<WorkReportResult, 'workId'>;

export const useCreateWorkReportResult = (
	workId: string,
	options?: UseMutationOptions<void, Error, WorkReportResultInfo>
) =>
	useMutation<void, Error, WorkReportResultInfo>({
		...options,
		mutationFn: async (result: WorkReportResultInfo) => {
			const response = await fetchWithAuth(
				CREATE_WORK_REPORT_RESULT_URI,
				{
					method: 'POST',
					body: JSON.stringify({
						...result,
						worksId: workId,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
