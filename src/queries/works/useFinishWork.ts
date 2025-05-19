import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { CREATE_WORK_PARTICIPANT_MARKS_URI } from '@/constants/apiEndpoints';
import { UserRating } from '@/types/contracts/userRating';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useFinishWork = (
	workId: string,
	options?: UseMutationOptions<void, Error, Array<UserRating>>
) =>
	useMutation<void, Error, Array<UserRating>>({
		...options,
		mutationFn: async (participantRates: Array<UserRating>) => {
			const response = await fetchWithAuth(
				`${CREATE_WORK_PARTICIPANT_MARKS_URI}`,
				{
					method: 'POST',
					body: JSON.stringify({
						worksId: workId,
						markColleaguePairStructs: participantRates.map(
							({ id, ranking }) => ({
								aboutColleagueId: id,
								workMarkTypesId: ranking,
							})
						),
					}),
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
