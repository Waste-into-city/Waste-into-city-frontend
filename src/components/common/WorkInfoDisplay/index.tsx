import { MouseEventHandler, TouchEventHandler, useMemo, useState } from 'react';

import arrowIcon from '@/assets/icons/svg/arrow_icon.svg';
import complexityIcon from '@/assets/icons/svg/work_people_icon.svg';
import { Button } from '@/components/ui/Button';
import { WorkStatusLabel } from '@/components/ui/WorkStatusLabel';
import { getImageUriByName } from '@/constants/apiEndpoints';
import { NO_AVATAR_ICON, TRASH_ICONS } from '@/constants/icons';
import { NO_DESCRIPTION } from '@/constants/labels';
import { workComplexitiesPeople } from '@/constants/workComplexitiesPeople';
import { useUserLogs } from '@/store/user/useUserLogs';
import { WorkInfo, WorkStatus } from '@/types/contracts/workInfo';
import { getTrashTypeById } from '@/utils/getTrashTypeId';

import {
	COMPLEXITY_PEOPLE_LABEL,
	FINISH_TIME_LABEL,
	START_TIME_LABEL,
	STATUS_LABEL,
} from './constants';
import {
	getComplexityColorsForId,
	getParticipantsLabel,
	getWorkTime,
} from './helpers';
import * as S from './styled';

export const WorkInfoDisplay = ({
	workInfo: {
		title,
		description,
		participants,
		imageNames,
		trashTypesIds,
		workComplexityTypesId,
		workStatusTypeForClient,
		startDateTime,
		finishDateTime,
	},
	isMissingParticipants = false,
}: {
	workInfo: WorkInfo;
	isMissingParticipants?: boolean;
}) => {
	const {
		logs: { id: currentUserId },
	} = useUserLogs();

	const [areParticipantsDisplayed, setAreParticipantsDisplayed] =
		useState(false);

	const handleParticipantsSummaryClick = () =>
		setAreParticipantsDisplayed((areDisplayed) => !areDisplayed);

	const handleImagesScroll: MouseEventHandler & TouchEventHandler = (
		event
	) => {
		event.stopPropagation();
	};

	const workComplexityPeople = useMemo(
		() =>
			workComplexitiesPeople.find(
				({ id }) => id === workComplexityTypesId
			)?.people,
		[workComplexityTypesId]
	);

	const workStartTime = useMemo(
		() => (startDateTime ? getWorkTime(startDateTime) : null),
		[startDateTime]
	);

	const workFinishTime = useMemo(
		() => (finishDateTime ? getWorkTime(finishDateTime) : null),
		[finishDateTime]
	);

	return (
		<S.WorkInfoWrapper>
			<S.WorkTitle>{title}</S.WorkTitle>
			<S.WorkImagesWrapper
				onMouseMove={handleImagesScroll}
				onTouchMove={handleImagesScroll}
			>
				{imageNames.map((link) => (
					<img key={link} src={getImageUriByName(link)} />
				))}
			</S.WorkImagesWrapper>
			<S.WorkStatusWrapper>
				{STATUS_LABEL}
				<WorkStatusLabel status={workStatusTypeForClient} />
			</S.WorkStatusWrapper>
			<S.WorkTrashTypes>
				{trashTypesIds.map((trashTypeId) => (
					<img
						key={trashTypeId}
						src={TRASH_ICONS[getTrashTypeById(trashTypeId)]}
					/>
				))}
			</S.WorkTrashTypes>
			<S.WorkComplexity
				$complexityColors={getComplexityColorsForId(
					workComplexityTypesId
				)}
			>
				<img src={complexityIcon} />
				{workComplexityPeople}
				{COMPLEXITY_PEOPLE_LABEL}
			</S.WorkComplexity>
			{workStartTime && (
				<S.WorkStartAt>
					{START_TIME_LABEL}
					<span>{workStartTime}</span>
				</S.WorkStartAt>
			)}
			{workFinishTime && (
				<S.WorkStartAt>
					{FINISH_TIME_LABEL}
					<span>{workFinishTime}</span>
				</S.WorkStartAt>
			)}
			<S.WorkDescription>
				{description || NO_DESCRIPTION}
			</S.WorkDescription>
			{!isMissingParticipants &&
				workStatusTypeForClient !== WorkStatus.PendingFinalization && (
					<>
						<S.ParticipantsSummary
							onClick={handleParticipantsSummaryClick}
							$isToggled={areParticipantsDisplayed}
						>
							<p>{getParticipantsLabel(participants.length)}</p>
							{participants.length > 0 && (
								<Button>
									<img src={arrowIcon} />
								</Button>
							)}
						</S.ParticipantsSummary>
						<S.ParticipantsList
							$isDisplayed={areParticipantsDisplayed}
						>
							{participants.map(
								({
									id,
									avatarImageName: avatarLink,
									nickname,
								}) => (
									<S.ParticipantItem
										key={id}
										$isCurrentUser={id === currentUserId}
									>
										<img
											src={
												avatarLink
													? getImageUriByName(
															avatarLink
														)
													: NO_AVATAR_ICON
											}
										/>
										<h3>{nickname}</h3>
									</S.ParticipantItem>
								)
							)}
						</S.ParticipantsList>
					</>
				)}
		</S.WorkInfoWrapper>
	);
};
