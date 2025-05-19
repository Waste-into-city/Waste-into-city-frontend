import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';

export const getWorkInfoFromResponse = (workResponse?: WorkInfo): WorkInfo => ({
	id: workResponse?.id || '',
	title: workResponse?.title || '',
	description: workResponse?.description || '',
	participants: workResponse?.participants ?? [],
	imageNames: workResponse?.imageNames ?? [],
	trashTypesIds: workResponse?.trashTypesIds ?? [],
	workComplexityTypesId: workResponse?.workComplexityTypesId ?? 0,
	workStatusTypeForClient:
		workResponse?.workStatusTypeForClient || WorkStatus.Unknown,
	lat: workResponse?.lat ?? 0,
	lng: workResponse?.lng ?? 0,
});
