import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { GET_WORK_REPORT_URI } from '@/constants/apiEndpoints';
import { ReviewQueries } from '@/constants/queryKeys';
import { WorkReport } from '@/types/contracts/workReport';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorkReportReview = (
	options?: UseQueryOptions<WorkReport, Error>
) =>
	useQuery<WorkReport>({
		...options,
		queryKey: [ReviewQueries.WorkReportReview],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_WORK_REPORT_URI);

			if (response.ok) {
				const responseData = await response.json();
				return responseData;
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
