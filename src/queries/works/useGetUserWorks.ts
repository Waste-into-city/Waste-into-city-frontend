import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { GET_WORK_HISTORY_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { ByPageResponse } from '@/types/contracts/byPageResponse';
import { WorkInfo } from '@/types/contracts/workInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetUserWorks = (
	options?: UseQueryOptions<ByPageResponse<WorkInfo>>
) =>
	useQuery<ByPageResponse<WorkInfo>>({
		...options,
		queryKey: [WorkQueries.WorksHistory],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_WORK_HISTORY_URI);
			if (response.ok) {
				const responseData = await response.json();
				return responseData;
			}
			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
