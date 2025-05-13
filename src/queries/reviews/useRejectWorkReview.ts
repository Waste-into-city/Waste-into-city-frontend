import { useMutation } from '@tanstack/react-query';

import { WORK_APPLICATION_REJECT_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useRejectWorkReview = (reviewId: string) =>
	useMutation({
		mutationFn: async () => {
			const response = await fetchWithAuth(
				`${WORK_APPLICATION_REJECT_URI}/${reviewId}`,
				{
					method: 'POST',
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
