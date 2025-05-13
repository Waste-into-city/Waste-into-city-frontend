import { useQuery } from '@tanstack/react-query';

import { GET_WORK_APPLICATION_URI } from '@/constants/apiEndpoints';
import { ReviewQueries } from '@/constants/queryKeys';
import { WorkInfo } from '@/types/contracts/workInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorkReview = () =>
	useQuery<WorkInfo>({
		queryKey: [ReviewQueries.WorkReview],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_WORK_APPLICATION_URI);

			if (response.ok) {
				const responseData = await response.json();
				return responseData;
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
