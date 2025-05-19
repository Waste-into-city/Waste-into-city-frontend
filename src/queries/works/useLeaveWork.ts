import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { LEAVE_WORK_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useLeaveWork = (
	workId: string,
	options?: UseMutationOptions<void, Error>
) =>
	useMutation<void, Error>({
		...options,
		mutationFn: async () => {
			const response = await fetchWithAuth(`${LEAVE_WORK_URI}/${workId}`);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
