import { GET_WORK_HISTORY_URI } from '@/constants/apiEndpoints';
import { ByPageResponse } from '@/types/contracts/byPageResponse';
import { WorkInfo } from '@/types/contracts/workInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getWorkStatusById } from '@/utils/getWorkStatusById';

export const getNextUserWorks = async (
	skip: number,
	size: number
): Promise<ByPageResponse<WorkInfo>> => {
	const response = await fetchWithAuth(
		`${GET_WORK_HISTORY_URI}?skipItems=${skip}&skip=${size}`
	);
	if (response.ok) {
		const responseData = await response.json();
		return {
			...responseData,
			items: responseData.items.map(
				({
					workStatusTypesId,
					...otherFields
				}: {
					workStatusTypesId: number;
				}) => ({
					...otherFields,
					workStatusTypeForClient:
						getWorkStatusById(workStatusTypesId),
				})
			),
		};
	}
	throw new Error();
};
