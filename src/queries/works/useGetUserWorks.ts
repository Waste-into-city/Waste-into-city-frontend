import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { WORKS_PAGE_SIZE } from '@/components/common/WorksList/constants';
import { GET_WORK_HISTORY_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { ByPageResponse } from '@/types/contracts/byPageResponse';
import { WorkInfo } from '@/types/contracts/workInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getWorkStatusById } from '@/utils/getWorkStatusById';

export const useGetUserWorks = (
	options?: UseQueryOptions<ByPageResponse<WorkInfo>>
) =>
	useQuery<ByPageResponse<WorkInfo>>({
		...options,
		queryKey: [WorkQueries.WorksHistory],
		queryFn: async () => {
			const response = await fetchWithAuth(
				`${GET_WORK_HISTORY_URI}?skipItems=0&size=${WORKS_PAGE_SIZE}`
			);
			if (response.ok) {
				const responseData = await response.json();
				return {
					...responseData,
					items: responseData.items.map(
						({
							workStatusTypesId,
							...otherFields
						}: {
							workStatusTypesId: number;
						}) => ({
							...otherFields,
							workStatusTypeForClient:
								getWorkStatusById(workStatusTypesId),
						})
					),
				};
			}
			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
