import { useQuery } from '@tanstack/react-query';

import { GET_WORK_REPORT_URI } from '@/constants/apiEndpoints';
import { ReviewQueries } from '@/constants/queryKeys';
import { WorkReport } from '@/types/contracts/workReport';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorkReportReview = (
	options?: PatchedQueryOptions<WorkReport, Error>
) =>
	useQuery<WorkReport>({
		...options,
		queryKey: [ReviewQueries.WorkReportReview],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_WORK_REPORT_URI);

			if (response.ok) {
				const responseData = await response.json();
				return {
					...responseData,
					workId: responseData.worksId,
					workReportResultId: responseData.workReportResultsId,
				};
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
