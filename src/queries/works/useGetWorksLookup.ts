import { useQuery } from '@tanstack/react-query';

import { GET_WORKS_LOOKUP_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkLookup } from '@/types/contracts/workLookup';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

const WORKS_REFETCH_INTERVAL = 30000;

export const useGetWorksLookup = (
	options?: PatchedQueryOptions<Array<WorkLookup>, Error>
) =>
	useQuery<Array<WorkLookup>>({
		...options,
		queryKey: [WorkQueries.WorksLookup],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_WORKS_LOOKUP_URI);

			if (response.ok) {
				const responseData = await response.json();
				return responseData as Array<WorkLookup>;
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
		refetchInterval: WORKS_REFETCH_INTERVAL,
	});
