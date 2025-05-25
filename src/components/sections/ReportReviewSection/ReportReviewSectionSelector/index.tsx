import { Dispatch, SetStateAction } from 'react';

import arrowIcon from '@/assets/icons/svg/arrow_icon.svg';

import { REPORT_REVIEW_SECTIONS } from '../constants';

import * as S from './styled';

export const ReportReviewSectionSelector = ({
	currentId,
	setCurrentId,
}: {
	currentId: number;
	setCurrentId: Dispatch<SetStateAction<number>>;
}) => {
	const handleNextButtonClick = () => {
		setCurrentId((prevId) =>
			prevId <
			REPORT_REVIEW_SECTIONS[REPORT_REVIEW_SECTIONS.length - 1].id
				? prevId + 1
				: prevId
		);
	};

	const handlePrevButtonClick = () => {
		setCurrentId((prevId) =>
			prevId > REPORT_REVIEW_SECTIONS[0].id ? prevId - 1 : prevId
		);
	};

	const isLastId =
		currentId >=
		REPORT_REVIEW_SECTIONS[REPORT_REVIEW_SECTIONS.length - 1].id;
	const isFirstId = currentId <= REPORT_REVIEW_SECTIONS[0].id;

	return (
		<S.SectionsSelectorWrapper>
			<S.PrevSectionButton
				onClick={handlePrevButtonClick}
				disabled={isFirstId}
			>
				<img src={arrowIcon} />
			</S.PrevSectionButton>
			<h2>
				{
					REPORT_REVIEW_SECTIONS.find(({ id }) => id === currentId)
						?.label
				}
			</h2>
			<S.NextSectionButton
				onClick={handleNextButtonClick}
				disabled={isLastId}
			>
				<img src={arrowIcon} />
			</S.NextSectionButton>
		</S.SectionsSelectorWrapper>
	);
};
