import { useQuery } from '@tanstack/react-query';

import { ADMIN_PANEL_GET_ALL_DATA_URI } from '@/constants/apiEndpoints';
import { AdminPanelQueries } from '@/constants/queryKeys';
import { ScoreSettings } from '@/types/contracts/scoreSettings';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetScoreSettings = () =>
	useQuery<ScoreSettings>({
		queryKey: [AdminPanelQueries.ScoreSettings],
		queryFn: async () => {
			const response = await fetchWithAuth(ADMIN_PANEL_GET_ALL_DATA_URI, {
				method: 'POST',
			});

			if (response.ok) {
				const responseData = await response.json();
				return responseData;
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
