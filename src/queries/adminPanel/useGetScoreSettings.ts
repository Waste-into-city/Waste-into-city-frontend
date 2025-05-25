import { useQuery } from '@tanstack/react-query';

import { ADMIN_PANEL_GET_ALL_DATA_URI } from '@/constants/apiEndpoints';
import { AdminPanelQueries } from '@/constants/queryKeys';
import { ScoreSettings } from '@/types/contracts/scoreSettings';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getScoreSettingById } from '@/utils/getScoreSettingById';

export const useGetScoreSettings = (
	options?: PatchedQueryOptions<ScoreSettings, Error>
) =>
	useQuery<ScoreSettings>({
		...options,
		queryKey: [AdminPanelQueries.ScoreSettings],
		queryFn: async () => {
			const response = await fetchWithAuth(ADMIN_PANEL_GET_ALL_DATA_URI, {
				method: 'POST',
			});

			if (response.ok) {
				const responseData = await response.json();
				return responseData.reduce(
					(
						scoreSettings: ScoreSettings,
						{
							scoreSettingsTypesId,
							value,
						}: { scoreSettingsTypesId: number; value: number }
					) => ({
						...scoreSettings,
						[getScoreSettingById(scoreSettingsTypesId)]: value,
					}),
					{}
				);
			}

			throw new Error();
		},
		refetchOnWindowFocus: false,
	});
