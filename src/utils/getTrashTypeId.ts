import { TrashTypes } from '@/types/trashTypes';

const trashTypesIdOrder = [
	TrashTypes.Mixed,
	TrashTypes.Plastic,
	TrashTypes.Electronic,
	TrashTypes.Glass,
	TrashTypes.Batteries,
];

export const getTrashTypeId = (trashType: TrashTypes): number =>
	trashTypesIdOrder.indexOf(trashType) + 1;

export const getTrashTypeById = (trashTypeId: number) =>
	trashTypesIdOrder[trashTypeId - 1];
