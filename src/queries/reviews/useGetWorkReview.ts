import { useQuery } from '@tanstack/react-query';

import { GET_WORK_APPLICATION_URI } from '@/constants/apiEndpoints';
import { ReviewQueries } from '@/constants/queryKeys';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorkReview = (
	options?: PatchedQueryOptions<WorkInfo, Error>
) =>
	useQuery<WorkInfo>({
		...options,
		queryKey: [ReviewQueries.WorkReview],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_WORK_APPLICATION_URI);

			if (response.ok) {
				const responseData = await response.json();
				return {
					...responseData,
					participants: [],
					workStatusTypeForClient: WorkStatus.PendingFinalization,
				};
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
