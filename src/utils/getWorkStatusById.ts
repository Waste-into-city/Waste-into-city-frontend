import { WorkStatus } from '@/types/contracts/workInfo';

const WORK_STATUSES_ORDER: Array<WorkStatus> = [
	WorkStatus.Available,
	WorkStatus.Preparing,
	WorkStatus.InProgress,
	WorkStatus.PendingFinalization,
	WorkStatus.FinishedSuccessfully,
	WorkStatus.FinishedFailed,
	WorkStatus.Closed,
];

export const getWorkStatusById = (workStatusId: number) => {
	return WORK_STATUSES_ORDER[workStatusId - 1];
};

export const getIdForWorkStatus = (workStatus: WorkStatus) =>
	WORK_STATUSES_ORDER.indexOf(workStatus) + 1;
