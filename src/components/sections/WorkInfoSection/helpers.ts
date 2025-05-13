import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';

export const getWorkInfoFromResponse = (workResponse?: WorkInfo): WorkInfo => ({
	id: workResponse?.id || '',
	title: workResponse?.title || '',
	description: workResponse?.description || '',
	participants: workResponse?.participants ?? [],
	imageApplications: workResponse?.imageApplications ?? [],
	trashTypes: workResponse?.trashTypes ?? [],
	workComplexityId: workResponse?.workComplexityId ?? 0,
	workStatusTypeForClient:
		workResponse?.workStatusTypeForClient || WorkStatus.Unknown,
	lat: workResponse?.lat ?? 0,
	lng: workResponse?.lng ?? 0,
});
