import { TrashTypes } from '../trashTypes';

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
	imageApplications: Array<string>;
	trashTypes: Array<TrashTypes>;
	workComplexityId: number;
	workStatusTypeForClient: WorkStatus;
	lat: number;
	lng: number;
};
