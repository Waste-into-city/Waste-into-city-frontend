import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { ADMIN_PANEL_SAVE_ALL_DATA_URI } from '@/constants/apiEndpoints';
import { ScoreSettings } from '@/types/contracts/scoreSettings';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getIdForScoreSetting } from '@/utils/getScoreSettingById';

export const useUpdateScoreSettings = (
	options?: UseMutationOptions<void, Error, ScoreSettings>
) =>
	useMutation<void, Error, ScoreSettings>({
		...options,
		mutationFn: async (scoreSettings: ScoreSettings) => {
			const response = await fetchWithAuth(
				ADMIN_PANEL_SAVE_ALL_DATA_URI,
				{
					method: 'POST',
					body: JSON.stringify(
						Object.entries(scoreSettings).map(([key, value]) => ({
							scoreSettingTypesId: getIdForScoreSetting(
								key as keyof ScoreSettings
							),
							value,
						}))
					),
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
