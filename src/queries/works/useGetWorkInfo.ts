import { useQuery } from '@tanstack/react-query';

import { GET_SINGLE_WORK_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkInfo } from '@/types/contracts/workInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorkInfo = (id: string) =>
	useQuery<WorkInfo>({
		queryKey: [WorkQueries.WorkInfo, id],
		queryFn: async () => {
			const response = await fetchWithAuth(
				`${GET_SINGLE_WORK_URI}/${id}`
			);

			if (response.ok) {
				const responseData = await response.json();
				return responseData as WorkInfo;
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
