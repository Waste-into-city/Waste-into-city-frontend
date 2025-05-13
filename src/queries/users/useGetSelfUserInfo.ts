import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { GET_SELF_USER_INFO_URI } from '@/constants/apiEndpoints';
import { useUserLogs } from '@/store/user/useUserLogs';
import { SelfUserInfo } from '@/types/contracts/selfUserInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetSelfUserInfo = () => {
	const { updateLogs } = useUserLogs();

	const queryReturn = useQuery<SelfUserInfo>({
		queryKey: [],
		queryFn: async () => {
			const response = await fetchWithAuth(GET_SELF_USER_INFO_URI);
			if (response.ok) {
				const data = await response.json();
				return data;
			}
		},
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		if (queryReturn.data) {
			updateLogs({ ...queryReturn.data });
		}
	}, [queryReturn.data]);

	return queryReturn;
};
