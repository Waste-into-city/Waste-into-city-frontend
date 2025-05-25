import { useQuery } from '@tanstack/react-query';

import { GET_SINGLE_WORK_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkInfo } from '@/types/contracts/workInfo';
import { PatchedQueryOptions } from '@/types/patchedQueryOptions';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getWorkStatusById } from '@/utils/getWorkStatusById';

export const useGetWorksGroup = (
	workIds: string[],
	options?: PatchedQueryOptions<Array<WorkInfo>, Error>
) =>
	useQuery<Array<WorkInfo>>({
		...options,
		queryKey: [WorkQueries.WorksGroup, workIds.join(',')],
		queryFn: async () => {
			try {
				const responses = await Promise.all(
					workIds.map(
						(id) =>
							new Promise<WorkInfo>((resolve, reject) => {
								fetchWithAuth(
									`${GET_SINGLE_WORK_URI}/${id}`
								).then((response) => {
									if (response.ok) {
										response.json().then((data) =>
											resolve({
												...data,
												workStatusTypeForClient:
													getWorkStatusById(
														data.workStatusTypesId
													),
											})
										);
									} else {
										reject();
									}
								});
							})
					)
				);

				return responses;
			} catch {
				throw new Error();
			}
		},
		refetchOnWindowFocus: false,
	});
