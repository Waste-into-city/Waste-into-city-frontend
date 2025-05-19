import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { JOIN_WORK_FIRST_URI, JOIN_WORK_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useJoinWork = (
	workId: string,
	options?: UseMutationOptions<void, Error, Date | null>
) =>
	useMutation<void, Error, Date | null>({
		...options,
		mutationFn: async (startDateTime: Date | null) => {
			let response;

			if (startDateTime) {
				response = await fetchWithAuth(
					`${JOIN_WORK_FIRST_URI}/${workId}`,
					{
						method: 'PUT',
						body: JSON.stringify({
							startedDatetime: startDateTime.toISOString(),
						}),
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
			} else {
				response = await fetchWithAuth(`${JOIN_WORK_URI}/${workId}`);
			}

			if (!response.ok) {
				throw new Error();
			}
		},
	});
