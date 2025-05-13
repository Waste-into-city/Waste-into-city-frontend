import { useMutation } from '@tanstack/react-query';

import { WORK_REPORT_REJECT_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useRejectWorkReportReview = (reviewId: string) =>
	useMutation({
		mutationFn: async () => {
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
