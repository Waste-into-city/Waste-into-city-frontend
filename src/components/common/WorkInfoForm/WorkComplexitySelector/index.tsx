import { Dispatch, SetStateAction } from 'react';

import { complexityItems, WORK_COMPLEXITY_LABEL } from './constants';
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
				{complexityItems.map(
					({ complexity: currentComplexity, label }) => (
						<S.WorkComplexityOption
							key={currentComplexity}
							$isSelected={complexity === currentComplexity}
							$complexity={complexity}
							onClick={handleComplexityItemClick(
								currentComplexity
							)}
						>
							{label}
						</S.WorkComplexityOption>
					)
				)}
			</S.WorkComplexityOptionsWrapper>
		</S.WorkComplexitiesWrapper>
	);
};
