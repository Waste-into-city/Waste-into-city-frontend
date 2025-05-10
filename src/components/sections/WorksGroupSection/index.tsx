import { WorksList } from '@/components/common/WorksList';
import { useSelectedWorksGroup } from '@/store/worksGroup/useSelectedWorksGroup';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { TrashTypes } from '@/types/trashTypes';

import { WORKS_GROUP_HEADING } from './constants';
import { WorksGroupWrapper } from './styled';

function randomEnum<T extends object>(anEnum: T): T[keyof T] {
	const enumValues = Object.keys(anEnum) as unknown as T[keyof T][];
	const randomIndex = Math.floor(Math.random() * enumValues.length);
	const randomEnumValue = enumValues[randomIndex];
	return randomEnumValue;
}

const mockList: Array<WorkInfo> = new Array(40).fill(0).map((zero, id) => ({
	id: String(id + zero),
	title: 'Titlee',
	description: 'Desc',
	imageApplications: [],
	trashTypes: [
		TrashTypes.Mixed,
		TrashTypes.Plastic,
		TrashTypes.Electronic,
		TrashTypes.Glass,
		TrashTypes.Batteries,
	],
	participants: [],
	lat: 2,
	lng: 2,
	workStatusTypeForClient: randomEnum(WorkStatus),
	workComplexityId: 1,
}));

export default function WorksGroupSection() {
	const { worksGroup } = useSelectedWorksGroup();
	console.log(worksGroup);

	return (
		<WorksGroupWrapper>
			<h2>{WORKS_GROUP_HEADING}</h2>
			<WorksList
				initialWorks={mockList.slice(0, 25)}
				getNextWorks={() =>
					Promise.resolve({
						total: mockList.length,
						pageSize: 25,
						skip: mockList.length,
						items: mockList.slice(25),
					})
				}
			/>
		</WorksGroupWrapper>
	);
}
