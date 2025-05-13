import { MouseEventHandler, TouchEventHandler, useState } from 'react';

import arrowIcon from '@/assets/icons/svg/arrow_icon.svg';
import complexityIcon from '@/assets/icons/svg/work_people_icon.svg';
import { Button } from '@/components/ui/Button';
import { WorkStatusLabel } from '@/components/ui/WorkStatusLabel';
import { getImageUriByName } from '@/constants/apiEndpoints';
import { NO_AVATAR_ICON, TRASH_ICONS } from '@/constants/icons';
import { useUserLogs } from '@/store/user/useUserLogs';
import { WorkInfo } from '@/types/contracts/workInfo';

import { COMPLEXITY_PEOPLE_LABEL, STATUS_LABEL } from './constants';
import { getParticipantsLabel } from './helpers';
import * as S from './styled';

export const WorkInfoDisplay = ({
	workInfo: {
		title,
		description,
		participants,
		imageApplications,
		trashTypes,
		workComplexityId,
		workStatusTypeForClient,
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

	return (
		<S.WorkInfoWrapper>
			<S.WorkTitle>{title}</S.WorkTitle>
			<S.WorkImagesWrapper
				onMouseMove={handleImagesScroll}
				onTouchMove={handleImagesScroll}
			>
				{imageApplications.map((link) => (
					<img key={link} src={getImageUriByName(link)} />
				))}
			</S.WorkImagesWrapper>
			<S.WorkStatusWrapper>
				{STATUS_LABEL}
				<WorkStatusLabel status={workStatusTypeForClient} />
			</S.WorkStatusWrapper>
			<S.WorkTrashTypes>
				{trashTypes.map((trashType) => (
					<img key={trashType} src={TRASH_ICONS[trashType]} />
				))}
			</S.WorkTrashTypes>
			<S.WorkComplexity>
				<img src={complexityIcon} />
				{workComplexityId}
				{COMPLEXITY_PEOPLE_LABEL}
			</S.WorkComplexity>

			<S.WorkDescription>{description}</S.WorkDescription>
			{!isMissingParticipants && (
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
					<S.ParticipantsList $isDisplayed={areParticipantsDisplayed}>
						{participants.map(({ id, avatarLink, nickname }) => (
							<S.ParticipantItem
								key={id}
								$isCurrentUser={id === currentUserId}
							>
								<img
									src={
										avatarLink
											? getImageUriByName(avatarLink)
											: NO_AVATAR_ICON
									}
								/>
								<h3>{nickname}</h3>
							</S.ParticipantItem>
						))}
					</S.ParticipantsList>
				</>
			)}
		</S.WorkInfoWrapper>
	);
};
