import { useQuery } from '@tanstack/react-query';

import { GET_WORKS_LOOKUP_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkLookup } from '@/types/contracts/workLookup';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorksLookup = () =>
	useQuery<Array<WorkLookup>>({
		queryKey: [WorkQueries.WorksLookup],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_WORKS_LOOKUP_URI);

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);
				return responseData as Array<WorkLookup>;
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
		enabled: false,
	});
