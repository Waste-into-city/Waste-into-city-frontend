import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { WorkInfoDisplay } from '@/components/common/WorkInfoDisplay';
import { ROUTES } from '@/constants/routes';
import { useGetWorkInfo } from '@/queries/works/useGetWorkInfo';
import { useUserLogs } from '@/store/user/useUserLogs';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';

import {
	FINISH_BUTTON_LABEL,
	JOIN_BUTTON_LABEL,
	LEAVE_BUTTON_LABEL,
	REPORT_BUTTON_LABEL,
} from './constants';
import { getWorkInfoFromResponse } from './helpers';
import { SubmitButton, WorkInfoSectionWrapper } from './styled';

const WorkInfoSection = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		logs: { id: userId },
	} = useUserLogs();
	const { data, isLoading, error } = useGetWorkInfo(id ?? '');
	const workInfo = useMemo<WorkInfo>(
		() => getWorkInfoFromResponse(data),
		[data]
	);

	const isUserParticipant = useMemo(
		() => Boolean(workInfo.participants.find(({ id }) => id === userId)),
		[userId]
	);

	const handleWorkReportButtonClick = () => {
		navigate(`${ROUTES.REPORT_WORK}/${id}`);
	};

	const handleWorkFinishButtonClick = () => {
		navigate(`${ROUTES.RATE_WORK_PARTICIPANTS}/${id}`);
	};

	const isWorkActive = workInfo.workStatusTypeForClient === WorkStatus.Active;
	const isWorkSuccessful =
		workInfo.workStatusTypeForClient === WorkStatus.Successful;
	const isWorkInProgress =
		workInfo.workStatusTypeForClient === WorkStatus.InProgress;

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
			<WorkInfoSectionWrapper>
				<WorkInfoDisplay workInfo={workInfo} />
				{isWorkActive && (
					<SubmitButton
						variant={isUserParticipant ? 'negative' : 'primary'}
					>
						{isUserParticipant
							? LEAVE_BUTTON_LABEL
							: JOIN_BUTTON_LABEL}
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
		</LoaderWrapper>
	);
};

export default WorkInfoSection;
