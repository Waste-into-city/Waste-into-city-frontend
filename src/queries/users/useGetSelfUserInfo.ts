import { useEffect } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { GET_SELF_USER_INFO_URI } from '@/constants/apiEndpoints';
import { useUserLogs } from '@/store/user/useUserLogs';
import { SelfUserInfo } from '@/types/contracts/selfUserInfo';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetSelfUserInfo = (
	options?: PatchedQueryOptions<SelfUserInfo, Error>
) => {
	const { updateLogs } = useUserLogs();

	const queryReturn = useQuery<SelfUserInfo>({
		...options,
		queryKey: [],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_SELF_USER_INFO_URI);
			if (response.ok) {
				const data = await response.json();
				return data;
			}
		},
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData,
	});

	useEffect(() => {
		if (queryReturn.data) {
			updateLogs({ ...queryReturn.data });
		}
	}, [queryReturn.data, updateLogs]);

	return queryReturn;
};
