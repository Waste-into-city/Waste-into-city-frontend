import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { GET_SINGLE_WORK_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkInfo } from '@/types/contracts/workInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getWorkStatusById } from '@/utils/getWorkStatusById';

export const useGetWorkInfo = (
	id: string,
	options?: UseQueryOptions<WorkInfo, Error>
) =>
	useQuery<WorkInfo>({
		...options,
		queryKey: [WorkQueries.WorkInfo, id],
		queryFn: async () => {
			const response = await fetchWithAuth(
				`${GET_SINGLE_WORK_URI}/${id}`
			);

			if (response.ok) {
				const responseData = await response.json();
				return {
					...responseData,
					workStatusTypeForClient: getWorkStatusById(
						responseData.workStatusTypesId
					),
				};
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
