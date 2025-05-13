import { useMutation } from '@tanstack/react-query';

import { JOIN_WORK_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useJoinWork = (workId: string) =>
	useMutation({
		mutationFn: async () => {
			const response = await fetchWithAuth(`${JOIN_WORK_URI}/${workId}`);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
