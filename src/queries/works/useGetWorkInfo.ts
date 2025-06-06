import { useQuery } from '@tanstack/react-query';

import { GET_SINGLE_WORK_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkInfo } from '@/types/contracts/workInfo';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getWorkStatusById } from '@/utils/getWorkStatusById';

const WORK_REFETCH_INTERVAL = 15000;

export const useGetWorkInfo = (
	id: string,
	options?: PatchedQueryOptions<WorkInfo, Error>
) =>
	useQuery<WorkInfo>({
		refetchInterval: WORK_REFETCH_INTERVAL,
		...options,
		queryKey: [WorkQueries.WorkInfo, id],
		queryFn: async () => {
			const response = await fetchWithAuth(
				`${GET_SINGLE_WORK_URI}/${id}`
			);

			if (response.ok) {
				const responseData = await response.json();
				return {
					id: responseData.id,
					title: responseData.title,
					description: responseData.description,
					participants: responseData.participants,
					imageNames: responseData.imageNames,
					workComplexityTypesId: responseData.workComplexityTypesId,
					workStatusTypeForClient: getWorkStatusById(
						responseData.workStatusTypesId
					),
					trashTypesIds: responseData.trashTypesIds,
					startDateTime: responseData.startedDatetime,
					finishDateTime: responseData.finishDatetime,
					lat: responseData.lat,
					lng: responseData.lng,
				};
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
