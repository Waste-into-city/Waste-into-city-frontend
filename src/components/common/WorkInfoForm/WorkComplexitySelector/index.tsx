import { Dispatch, SetStateAction } from 'react';

import { workComplexitiesPeople } from '@/constants/workComplexitiesPeople';

import { WORK_COMPLEXITY_LABEL } from './constants';
import * as S from './styled';

export const WorkComplexitySelector = ({
	complexity,
	setComplexity,
}: {
	complexity: number;
	setComplexity: Dispatch<SetStateAction<number>>;
}) => {
	const handleComplexityItemClick = (complexityItem: number) => () => {
		setComplexity(complexityItem);
	};

	return (
		<S.WorkComplexitiesWrapper>
			<h2>{WORK_COMPLEXITY_LABEL}</h2>
			<S.WorkComplexityOptionsWrapper>
				{workComplexitiesPeople.map(
					({ id: currentComplexity, people }) => (
						<S.WorkComplexityOption
							key={currentComplexity}
							$isSelected={complexity === currentComplexity}
							$complexity={complexity}
							onClick={handleComplexityItemClick(
								currentComplexity
							)}
						>
							{people}
						</S.WorkComplexityOption>
					)
				)}
			</S.WorkComplexityOptionsWrapper>
		</S.WorkComplexitiesWrapper>
	);
};
