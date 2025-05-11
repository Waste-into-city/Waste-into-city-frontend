import { ReviewCardPicker } from '@/components/common/ReviewCardPicker';
import { WorkInfoDisplay } from '@/components/common/WorkInfoDisplay';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { TrashTypes } from '@/types/trashTypes';

const mockWorkInfo: WorkInfo = {
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

const WorkReviewSection = () => {
	return (
		<ReviewCardPicker onAccept={() => {}} onReject={() => {}}>
			<WorkInfoDisplay workInfo={mockWorkInfo} isMissingParticipants />
		</ReviewCardPicker>
	);
};

export default WorkReviewSection;
