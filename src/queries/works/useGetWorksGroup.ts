import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { GET_SINGLE_WORK_URI } from '@/constants/apiEndpoints';
import { WorkQueries } from '@/constants/queryKeys';
import { WorkInfo } from '@/types/contracts/workInfo';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useGetWorksGroup = (
	workIds: string[],
	options?: UseQueryOptions<Array<WorkInfo>, Error>
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
										response
											.json()
											.then((data) => resolve(data));
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
