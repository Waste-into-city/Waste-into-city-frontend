import { useMutation } from '@tanstack/react-query';

import { CREATE_WORK_PARTICIPANT_MARKS_URI } from '@/constants/apiEndpoints';
import { UserRating } from '@/types/contracts/userRating';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useFinishWork = (
	workId: string,
	participantRates: Array<UserRating>
) =>
	useMutation({
		mutationFn: async () => {
			const response = await fetchWithAuth(
				`${CREATE_WORK_PARTICIPANT_MARKS_URI}`,
				{
					method: 'POST',
					body: JSON.stringify({
						worksId: workId,
						markColleaguePairStructs: participantRates.map(
							({ id, rating }) => ({
								aboutColleagueId: id,
								workMarkTypesId: rating,
							})
						),
					}),
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
