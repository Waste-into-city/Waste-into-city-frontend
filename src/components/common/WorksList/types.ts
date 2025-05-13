import { ByPageResponse } from '@/types/contracts/byPageResponse';
import { WorkInfo } from '@/types/contracts/workInfo';

export type WorksListProps = {
	initialWorks: ByPageResponse<WorkInfo>;
	getNextWorks: (
		from: number,
		pageSize: number
	) => Promise<ByPageResponse<WorkInfo>>;
};
