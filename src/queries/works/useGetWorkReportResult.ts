import { useQuery } from '@tanstack/react-query';

import { GET_WORK_REPORT_RESULTS_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkReportResult } from '@/types/contracts/workReportResult';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorkReportResult = (
	id: string,
	options?: PatchedQueryOptions<WorkReportResult, Error>
) =>
	useQuery<WorkReportResult, Error>({
		...options,
		queryKey: [WorkQueries.WorkReportResult, id],
		queryFn: async () => {
			const response = await fetchWithAuth(
				`${GET_WORK_REPORT_RESULTS_URI}/${id}`
			);

			if (response.ok) {
				const responseData = await response.json();
				return responseData;
			}

			throw new Error();
		},
	});
