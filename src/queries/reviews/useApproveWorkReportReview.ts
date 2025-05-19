import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { WORK_REPORT_APPROVE_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useApproveWorkReportReview = (
	options?: UseMutationOptions<void, Error, string>
) =>
	useMutation<void, Error, string>({
		...options,
		mutationFn: async (reviewId: string) => {
			const response = await fetchWithAuth(
				`${WORK_REPORT_APPROVE_URI}/${reviewId}`,
				{
					method: 'POST',
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
