import { useMemo } from 'react';

import complexityIcon from '@/assets/icons/svg/work_people_icon.svg';
import { NO_DESCRIPTION } from '@/constants/labels';
import { workComplexitiesPeople } from '@/constants/workComplexitiesPeople';
import { WorkStatus } from '@/types/contracts/workInfo';
import { WorkReportResult } from '@/types/contracts/workReportResult';
import { getWorkStatusById } from '@/utils/getWorkStatusById';

import { COMPLEXITY_PEOPLE_LABEL } from '../WorkInfoDisplay/constants';

import { FAILED_STATUS, SUCCESSFUL_STATUS } from './constants';
import * as S from './styled';

export const WorkReportResultDisplay = ({
	workReportResult,
}: {
	workReportResult: WorkReportResult;
}) => {
	const { title, description, workComplexityTypesId, workStatusTypesId } =
		workReportResult;
	const workStatus = useMemo(
		() => getWorkStatusById(workStatusTypesId),
		[workStatusTypesId]
	);
	const workComplexityInPeople = useMemo(
		() =>
			workComplexitiesPeople.find(
				({ id }) => id === workComplexityTypesId
			)?.people,
		[workComplexityTypesId]
	);

	const isSuccessful = workStatus === WorkStatus.FinishedSuccessfully;

	return (
		<S.WorkReportDisplayWrapper>
			<h2>{title}</h2>
			<p>{description || NO_DESCRIPTION}</p>
			<S.SetComplexityLabel>
				<img src={complexityIcon} />
				<p>
					{workComplexityInPeople} {COMPLEXITY_PEOPLE_LABEL}
				</p>
			</S.SetComplexityLabel>
			<S.SetStatus $isSuccessful={isSuccessful}>
				{isSuccessful ? SUCCESSFUL_STATUS : FAILED_STATUS}
			</S.SetStatus>
		</S.WorkReportDisplayWrapper>
	);
};
