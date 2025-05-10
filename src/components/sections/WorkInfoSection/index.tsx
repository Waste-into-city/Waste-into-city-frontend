import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { WorkInfoDisplay } from '@/components/common/WorkInfoDisplay';
import { ROUTES } from '@/constants/routes';
import { useUserLogs } from '@/store/user/useUserLogs';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { TrashTypes } from '@/types/trashTypes';

import {
	FINISH_BUTTON_LABEL,
	JOIN_BUTTON_LABEL,
	LEAVE_BUTTON_LABEL,
	REPORT_BUTTON_LABEL,
} from './constants';
import { SubmitButton, WorkInfoSectionWrapper } from './styled';

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

const WorkInfoSection = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		logs: { id: userId },
	} = useUserLogs();

	const isUserParticipant = useMemo(
		() =>
			Boolean(mockWorkInfo.participants.find(({ id }) => id === userId)),
		[userId]
	);

	const handleWorkReportButtonClick = () => {
		navigate(`${ROUTES.REPORT_WORK}/${id}`);
	};

	const handleWorkFinishButtonClick = () => {
		navigate(`${ROUTES.RATE_WORK_PARTICIPANTS}/${id}`);
	};

	const isWorkActive =
		mockWorkInfo.workStatusTypeForClient === WorkStatus.Active;
	const isWorkSuccessful =
		mockWorkInfo.workStatusTypeForClient === WorkStatus.Successful;
	const isWorkInProgress =
		mockWorkInfo.workStatusTypeForClient === WorkStatus.InProgress;

	return (
		<WorkInfoSectionWrapper>
			<WorkInfoDisplay workInfo={mockWorkInfo} />
			{isWorkActive && (
				<SubmitButton
					variant={isUserParticipant ? 'negative' : 'primary'}
				>
					{isUserParticipant ? LEAVE_BUTTON_LABEL : JOIN_BUTTON_LABEL}
				</SubmitButton>
			)}
			{isWorkSuccessful && (
				<SubmitButton
					variant='negative'
					onClick={handleWorkReportButtonClick}
				>
					{REPORT_BUTTON_LABEL}
				</SubmitButton>
			)}
			{isWorkInProgress && (
				<SubmitButton
					variant='positive'
					onClick={handleWorkFinishButtonClick}
				>
					{FINISH_BUTTON_LABEL}
				</SubmitButton>
			)}
		</WorkInfoSectionWrapper>
	);
};

export default WorkInfoSection;
