import { useMemo } from 'react';

import complexityIcon from '@/assets/icons/svg/work_people_icon.svg';
import { workComplexitiesPeople } from '@/constants/workComplexitiesPeople';
import { WorkStatus } from '@/types/contracts/workInfo';
import { WorkReportResult } from '@/types/contracts/workReportResult';
import { getWorkStatusById } from '@/utils/getWorkStatusById';

import { COMPLEXITY_PEOPLE_LABEL } from '../WorkInfoDisplay/constants';

import * as S from './styled';

const WorkReportResultDisplay = ({
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

	return (
		<S.WorkReportDisplayWrapper>
			<h2>{title}</h2>
			<p>{description}</p>
			<S.SetComplexityLabel>
				<img src={complexityIcon} />
				<p>
					{workComplexityInPeople} {COMPLEXITY_PEOPLE_LABEL}
				</p>
			</S.SetComplexityLabel>
			<S.SetStatus $isSuccessful={workStatus === WorkStatus.Successful}>
				{workStatus}
			</S.SetStatus>
		</S.WorkReportDisplayWrapper>
	);
};

export default WorkReportResultDisplay;
