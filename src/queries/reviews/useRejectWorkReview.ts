import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { WORK_APPLICATION_REJECT_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useRejectWorkReview = (
	options?: UseMutationOptions<void, Error, string>
) =>
	useMutation<void, Error, string>({
		...options,
		mutationFn: async (reviewId: string) => {
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
