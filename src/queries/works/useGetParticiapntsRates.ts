import { useQuery } from '@tanstack/react-query';

import { GET_PARTICIPANTS_MARKS_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { UserRating } from '@/types/contracts/userRating';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetParticipantsRates = (
	workId: string,
	options: PatchedQueryOptions<Array<UserRating>, Error>
) =>
	useQuery<Array<UserRating>, Error>({
		...options,
		queryKey: [WorkQueries.WorkParticipantsRates, workId],
		queryFn: async () => {
			const response = await fetchWithAuth(
				`${GET_PARTICIPANTS_MARKS_URI}/${workId}`
			);
			if (response.ok) {
				const responseData = await response.json();
				return responseData.map(
					({
						aboutColleagueNickname,
						aboutColleagueEmail,
						workMarkTypesId,
						avatarImageName,
					}: {
						aboutColleagueNickname: string;
						aboutColleagueEmail: string;
						workMarkTypesId: number;
						avatarImageName: string | null;
					}) => ({
						nickname: aboutColleagueNickname,
						id: aboutColleagueEmail,
						ranking: workMarkTypesId,
						avatarImageName,
					})
				);
			}
		},
		refetchOnWindowFocus: false,
	});
