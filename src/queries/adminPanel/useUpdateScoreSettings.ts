import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { ADMIN_PANEL_SAVE_ALL_DATA_URI } from '@/constants/apiEndpoints';
import { ScoreSettingSetter } from '@/types/contracts/selfUserInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useUpdateScoreSettings = (
	options?: UseMutationOptions<void, Error, Array<ScoreSettingSetter>>
) =>
	useMutation<void, Error, Array<ScoreSettingSetter>>({
		...options,
		mutationFn: async (scoreSettings: Array<ScoreSettingSetter>) => {
			const response = await fetchWithAuth(
				ADMIN_PANEL_SAVE_ALL_DATA_URI,
				{
					method: 'POST',
					body: JSON.stringify(scoreSettings),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
