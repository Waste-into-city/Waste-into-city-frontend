import { GET_LEADERBOARD_URI } from '@/constants/apiEndpoints';
import { ByPageResponse } from '@/types/contracts/byPageResponse';
import { UserRating } from '@/types/contracts/userRating';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const getNextLeaderboardUsers = async (
	skip: number,
	size: number
): Promise<ByPageResponse<UserRating>> => {
	const response = await fetchWithAuth(
		`${GET_LEADERBOARD_URI}?skipItems=${skip}&size=${size}`
	);

	if (response.ok) {
		const responseData = await response.json();
		return responseData;
	}

	throw new Error();
};
