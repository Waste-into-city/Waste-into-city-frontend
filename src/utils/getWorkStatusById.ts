import { WorkStatus } from '@/types/contracts/workInfo';

const WORK_STATUSES_ORDER: Array<WorkStatus> = [
	WorkStatus.Active,
	WorkStatus.InProgress,
	WorkStatus.Successful,
	WorkStatus.Unknown,
];

export const getWorkStatusById = (workStatusId: number) => {
	return WORK_STATUSES_ORDER[workStatusId - 1];
};

export const getIdForWorkStatus = (workStatus: WorkStatus) =>
	WORK_STATUSES_ORDER.indexOf(workStatus) + 1;
