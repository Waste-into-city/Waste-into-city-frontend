import { OtherUser } from './otherUser';

export enum WorkStatus {
	Available = 'Available',
	Preparing = 'Preparing',
	InProgress = 'InProgress',
	PendingFinalization = 'PendingFinalization',
	FinishedSuccessfully = 'FinishedSuccessfully',
	FinishedFailed = 'FinishedFailed',
	Closed = 'Closed',
}

export type WorkInfo = {
	id: string;
	title: string;
	description: string;
	participants: Array<OtherUser>;
	imageNames: Array<string>;
	trashTypesIds: Array<number>;
	workComplexityTypesId: number;
	workStatusTypeForClient: WorkStatus;
	startDateTime?: string;
	lat: number;
	lng: number;
};
