import { UserRating } from '@/types/contracts/userRating';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { WorkLookup } from '@/types/contracts/workLookup';
import { WorkReport } from '@/types/contracts/workReport';
import { TrashTypes } from '@/types/trashTypes';

export const mockWorkInfo: WorkInfo = {
	id: 's',
	title: 'Dirty',
	description: 'Description',
	participants: [
		{
			id: '2',
			nickname: 'Nick',
			avatarLink:
				'https://audi-minsk.by/wp-content/uploads/2024/07/a6_1280x720-optimized.jpg',
		},
		{ id: '3', nickname: 'Jonathan', avatarLink: '' },
	],
	imageApplications: [
		'https://audi-minsk.by/wp-content/uploads/2024/07/a6_1280x720-optimized.jpg',
		'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k8QD2Ty9XCxSBUucxssdkV8aolbj2vrQlw&s',
		'https://treenewal.com/wp-content/uploads/2020/11/environmental_factors_affecting_trees.png',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwthecQSnalUrYNkUvavdk_EpcAaFyAn5X4w&s',
	],
	trashTypes: [
		TrashTypes.Batteries,
		TrashTypes.Electronic,
		TrashTypes.Glass,
		TrashTypes.Mixed,
		TrashTypes.Plastic,
	],
	workComplexityId: 1,
	workStatusTypeForClient: WorkStatus.Active,
	lat: 2,
	lng: 1,
};

function randomEnum<T extends object>(anEnum: T): T[keyof T] {
	const enumValues = Object.keys(anEnum) as unknown as T[keyof T][];
	const randomIndex = Math.floor(Math.random() * enumValues.length);
	const randomEnumValue = enumValues[randomIndex];
	return randomEnumValue;
}

export const mockWorksList: Array<WorkInfo> = new Array(40)
	.fill(0)
	.map((zero, id) => ({
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

export const mockReport: WorkReport = {
	id: '1',
	title: 'Report Title',
	description: 'Description of thr work report',
	imageNames: [
		'https://audi-minsk.by/wp-content/uploads/2024/07/a6_1280x720-optimized.jpg',
		'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k8QD2Ty9XCxSBUucxssdkV8aolbj2vrQlw&s',
		'https://treenewal.com/wp-content/uploads/2020/11/environmental_factors_affecting_trees.png',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwthecQSnalUrYNkUvavdk_EpcAaFyAn5X4w&s',
	],
};

export const mockLeaders: Array<UserRating> = [
	{
		id: '1',
		nickname: 'Jonathan',
		avatarLink: '',
		rating: 200,
	},
	{
		id: '3',
		nickname: 'Joe',
		avatarLink: '',
		rating: 150,
	},
	{
		id: '9',
		nickname: 'Mike',
		avatarLink: '',
		rating: 100,
	},
	{
		id: '2',
		nickname: 'Bob',
		avatarLink: '',
		rating: 50,
	},
	{
		id: '7',
		nickname: 'Peter',
		avatarLink: '',
		rating: 50,
	},
];

export const mockMarkerGroups: WorkLookup[] = [
	{
		id: '1',
		lat: 53.9020832,
		lng: 27.5349504,
	},
	{
		id: '2',
		lat: 53.9002832,
		lng: 27.5349504,
	},
	{
		id: '3',
		lat: 53.9013832,
		lng: 27.5349504,
	},
];
