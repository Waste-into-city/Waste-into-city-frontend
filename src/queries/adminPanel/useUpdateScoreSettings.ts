import { useMutation } from '@tanstack/react-query';

import { ADMIN_PANEL_SAVE_ALL_DATA_URI } from '@/constants/apiEndpoints';
import { ScoreSettings } from '@/types/contracts/scoreSettings';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useUpdateScoreSettings = (scoreSettings: ScoreSettings) =>
	useMutation({
		mutationFn: async () => {
			const response = await fetchWithAuth(
				ADMIN_PANEL_SAVE_ALL_DATA_URI,
				{
					method: 'POST',
					body: JSON.stringify(scoreSettings),
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
