import { useMutation } from '@tanstack/react-query';

import { WORK_APPLICATIONS_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useApproveWorkReview = (reviewId: string) =>
	useMutation({
		mutationFn: async () => {
			const response = await fetchWithAuth(
				`${WORK_APPLICATIONS_URI}/${reviewId}`,
				{
					method: 'POST',
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
