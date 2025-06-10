import { UserRating } from '@/types/contracts/userRating';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { WorkLookup } from '@/types/contracts/workLookup';
import { WorkReport } from '@/types/contracts/workReport';

export const mockWorkInfo: WorkInfo = {
	id: 's',
	title: 'Bottles in Gorkov park',
	description:
		'There is a lot of bitten glass from bottles in Gorkov park near the bridge with locks. Also there are many plastic bottles!',
	participants: [],
	imageNames: [
		'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/276bbae3-f231-4aef-bb2e-dbdc3ae8d97f/-/format/webp/-/resize/1300x/',
		'https://bestbelarus.by/upload/resize_cache/webp/medialibrary/28e/28e92fb07dc4779db3be7fbd4b405075.webp',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyQmOUcUpNDmZiQSX6_OqqXT2m2h1FRukpA&s',
	],
	trashTypesIds: [2, 3],
	workComplexityTypesId: 2,
	workStatusTypeForClient: WorkStatus.PendingFinalization,
	lat: 2,
	lng: 1,
};

function randomEnum<T extends object>(anEnum: T): T[keyof T] {
	const enumValues = Object.keys(anEnum) as unknown as T[keyof T][];
	const randomIndex = Math.floor(Math.random() * 4) + 1;
	const randomEnumValue = enumValues[randomIndex];
	return randomEnumValue;
}

export const mockWorksList: Array<WorkInfo> = new Array(10)
	.fill(0)
	.map((zero, id) => ({
		id: String(id + zero),
		title: 'Child toys near Sosedi',
		description: 'Desc',
		imageNames: [],
		trashTypesIds: [1, 2, 3],
		participants: [],
		lat: 2,
		lng: 2,
		workStatusTypeForClient: randomEnum(WorkStatus),
		workComplexityTypesId: 1,
	}));

export const mockReport: WorkReport = {
	id: '1',
	title: 'Damage to benches',
	description:
		'The benches on Oktyabrskaya street have been broken while the litter was being collected!',
	imageNames: [
		'https://admin.willinghotel.by/media/articles/29/1614160785.jpg',
		'https://vetliva.ru/upload/resize_cache/iblock/e35/630_350_2/e3538c1f941bec113d95f443c7e2ccdf.jpg',
		'https://content.onliner.by/news/1100x5616/9f6bd04fcc79b04bedf905baf4e15ebb.jpeg',
	],
	workId: '2',
	workReportResultId: '12',
	fromUserEmail: 'user@gmail.com',
	fromUserNickname: 'mockUser',
};

export const mockUserRates: Array<UserRating> = [
	{
		id: '1',
		nickname: 'Jonathan',
		avatarImageName: '',
		ranking: 5,
	},
	{
		id: '3',
		nickname: 'Joe',
		avatarImageName: '',
		ranking: 1,
	},
	{
		id: '9',
		nickname: 'Mike',
		avatarImageName: '',
		ranking: 2,
	},
	{
		id: '2',
		nickname: 'Bob',
		avatarImageName: '',
		ranking: 3,
	},
	{
		id: '7',
		nickname: 'Peter',
		avatarImageName: '',
		ranking: 4,
	},
];

export const mockLeaders: Array<UserRating> = [
	{
		id: '1',
		nickname: 'Jonathan',
		avatarImageName: '',
		ranking: 200,
	},
	{
		id: '3',
		nickname: 'Joe',
		avatarImageName: '',
		ranking: 150,
	},
	{
		id: '9',
		nickname: 'Mike',
		avatarImageName: '',
		ranking: 100,
	},
	{
		id: '2',
		nickname: 'Bob',
		avatarImageName: '',
		ranking: 50,
	},
	{
		id: '7',
		nickname: 'Peter',
		avatarImageName: '',
		ranking: 50,
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
