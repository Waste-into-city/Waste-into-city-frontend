import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { WORK_REPORT_REJECT_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useRejectWorkReportReview = (
	options?: UseMutationOptions<void, Error, string>
) =>
	useMutation<void, Error, string>({
		...options,
		mutationFn: async (reviewId: string) => {
			const response = await fetchWithAuth(
				`${WORK_REPORT_REJECT_URI}/${reviewId}`,
				{
					method: 'POST',
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
