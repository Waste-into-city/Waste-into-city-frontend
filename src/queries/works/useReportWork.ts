import { useMutation } from '@tanstack/react-query';

import { CREATE_WORK_REPORT_URI } from '@/constants/apiEndpoints';
import { WorkReport } from '@/types/contracts/workReport';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useReportWork = (workId: string, report: WorkReport) =>
	useMutation({
		mutationFn: async () => {
			const response = await fetchWithAuth(
				`${CREATE_WORK_REPORT_URI}/${workId}`,
				{
					method: 'POST',
					body: JSON.stringify(report),
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		},
	});
