import { useQuery } from '@tanstack/react-query';

import { GET_WORK_REPORT_URI } from '@/constants/apiEndpoints';
import { HTTP_STATUSES } from '@/constants/httpStatuses';
import { ReviewQueries } from '@/constants/queryKeys';
import { WorkReport } from '@/types/contracts/workReport';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

import { NO_REVIEWS_AVAILABLE } from './constants';

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

			if (response.status === HTTP_STATUSES.NotFound) {
				throw new Error(NO_REVIEWS_AVAILABLE);
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
