import { OtherUser } from './otherUser';

export enum WorkStatus {
	Pending = 'Pending',
	Active = 'Active',
	InProgress = 'InProgress',
	Successful = 'Successful',
	Unknown = 'Unknown',
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
