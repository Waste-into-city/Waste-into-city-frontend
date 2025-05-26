import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { ParticipantsRatesList } from '@/components/common/ParticipantsRatesList';
import { WorkInfoDisplay } from '@/components/common/WorkInfoDisplay';
import { WorkQueries } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';
import { useGetParticipantsRates } from '@/queries/works/useGetParticiapntsRates';
import { useGetWorkInfo } from '@/queries/works/useGetWorkInfo';
import { useJoinWork } from '@/queries/works/useJoinWork';
import { useLeaveWork } from '@/queries/works/useLeaveWork';
import { useUserLogs } from '@/store/user/useUserLogs';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { UserRoles } from '@/types/userRoles';

import {
	FINISH_BUTTON_LABEL,
	JOIN_BUTTON_LABEL,
	LEAVE_BUTTON_LABEL,
	RATE_BUTTON_LABEL,
	REPORT_BUTTON_LABEL,
} from './constants';
import { getWorkInfoFromResponse } from './helpers';
import { SubmitButton, WorkControls, WorkInfoSectionWrapper } from './styled';
import { WorkStartTimeSelector } from './WorkStartTimeSelector';

const WorkInfoSection = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		logs: { id: userId, highRoleName },
	} = useUserLogs();
	const queryClient = useQueryClient();

	const { data, isLoading, error, refetch } = useGetWorkInfo(id ?? '');
	const { data: rates, isFetching: isFetchingRates } =
		useGetParticipantsRates(data?.id ?? '', {
			enabled: Boolean(data?.id),
		});

	const workInfo = useMemo<WorkInfo>(
		() => getWorkInfoFromResponse(data),
		[data]
	);

	const { mutate: joinWork, isPending: isJoining } = useJoinWork(
		workInfo.id,
		{
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [WorkQueries.WorkInfo, id],
				});
				refetch();
			},
		}
	);

	const { mutate: leaveWork, isPending: isLeaving } = useLeaveWork(
		workInfo.id,
		{
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [WorkQueries.WorkInfo, id],
				});
				refetch();
			},
		}
	);

	const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
		null
	);

	const isUserParticipant = useMemo(
		() => Boolean(workInfo.participants.find(({ id }) => id === userId)),
		[userId, workInfo]
	);

	const handleWorkReportButtonClick = () => {
		navigate(`${ROUTES.REPORT_WORK}/${id}`);
	};

	const handleWorkFinishButtonClick = () => {
		navigate(`${ROUTES.WORK_REPORT_RESULT}/${id}`);
	};

	const handleWorkRateButtonClick = () => {
		navigate(`${ROUTES.RATE_WORK_PARTICIPANTS}/${id}`);
	};

	const handleWorkJoinButtonClick = () => {
		joinWork(selectedStartDate);
	};

	const handleWorkLeaveButtonClick = () => {
		leaveWork();
	};

	const hasNoOtherParticipants = useMemo(
		() =>
			Boolean(
				workInfo.participants.filter(({ id }) => id !== userId).length
			),
		[workInfo]
	);

	const isWorkActive =
		workInfo.workStatusTypeForClient === WorkStatus.Available;
	const isWorkPreparing =
		workInfo.workStatusTypeForClient === WorkStatus.Preparing;
	const isWorkFinishing =
		workInfo.workStatusTypeForClient === WorkStatus.PendingFinalization;
	const isWorkSuccessful =
		workInfo.workStatusTypeForClient === WorkStatus.FinishedSuccessfully;
	const isWorkInProgress =
		workInfo.workStatusTypeForClient === WorkStatus.InProgress;

	const isWithoutParticipants = !workInfo.participants.length;
	const isLoadingWork =
		isLoading ||
		Boolean(error) ||
		isJoining ||
		isLeaving ||
		isFetchingRates;
	const isUserJoinable =
		highRoleName === UserRoles.User || highRoleName === UserRoles.Admin;

	return (
		<LoaderWrapper isLoaderVisible={isLoadingWork}>
			<WorkInfoSectionWrapper>
				<WorkInfoDisplay workInfo={workInfo} />
				{rates && <ParticipantsRatesList ratesList={rates} />}
				<WorkControls>
					{isWithoutParticipants &&
						isWorkActive &&
						isUserJoinable && (
							<WorkStartTimeSelector
								onTimeChange={setSelectedStartDate}
							/>
						)}
					{(isWorkPreparing || isWorkActive) && isUserJoinable && (
						<SubmitButton
							variant={isUserParticipant ? 'negative' : 'primary'}
							disabled={
								(isWithoutParticipants && !selectedStartDate) ||
								isLoadingWork
							}
							onClick={
								isUserParticipant
									? handleWorkLeaveButtonClick
									: handleWorkJoinButtonClick
							}
						>
							{isUserParticipant
								? LEAVE_BUTTON_LABEL
								: JOIN_BUTTON_LABEL}
						</SubmitButton>
					)}
					{isWorkSuccessful &&
						isUserJoinable &&
						(!isUserParticipant ? (
							<SubmitButton
								variant='negative'
								onClick={handleWorkReportButtonClick}
							>
								{REPORT_BUTTON_LABEL}
							</SubmitButton>
						) : (
							!rates?.length &&
							!hasNoOtherParticipants && (
								<SubmitButton
									variant='positive'
									onClick={handleWorkRateButtonClick}
								>
									{RATE_BUTTON_LABEL}
								</SubmitButton>
							)
						))}
					{(isWorkInProgress || isWorkFinishing) &&
						isUserJoinable &&
						isUserParticipant && (
							<SubmitButton
								variant='positive'
								onClick={handleWorkFinishButtonClick}
							>
								{FINISH_BUTTON_LABEL}
							</SubmitButton>
						)}
				</WorkControls>
			</WorkInfoSectionWrapper>
		</LoaderWrapper>
	);
};

export default WorkInfoSection;
