import { useQuery } from '@tanstack/react-query';

import { USERS_LIST_PAGE_SIZE } from '@/components/common/UsersList/constants';
import { GET_LEADERBOARD_URI } from '@/constants/apiEndpoints';
import { UserQueries } from '@/constants/queryKeys';
import { ByPageResponse } from '@/types/contracts/byPageResponse';
import { UserRating } from '@/types/contracts/userRating';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetLeaderboard = (
	options?: PatchedQueryOptions<ByPageResponse<UserRating>, Error>
) =>
	useQuery<ByPageResponse<UserRating>>({
		...options,
		queryKey: [UserQueries.Leaderboard],
		queryFn: async () => {
			const response = await fetchWithAuth(
				`${GET_LEADERBOARD_URI}?skipItems=1&size=${USERS_LIST_PAGE_SIZE}`
			);

			if (response.ok) {
				const responseData = await response.json();
				return responseData;
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
