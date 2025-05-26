import { MouseEventHandler, useState } from 'react';

import arrowIcon from '@/assets/icons/svg/arrow_icon.svg';

import { Button } from '../Button';

import * as S from './styled';
import { AccordionProps } from './types';

export const Accordion = ({
	header,
	children,
	isDefaultDropped = false,
}: AccordionProps) => {
	const [isDropped, setIsDropped] = useState(isDefaultDropped);

	const handleAccordionToggle: MouseEventHandler = (mouseEvent) => {
		setIsDropped((prevDropped) => !prevDropped);
		mouseEvent.stopPropagation();
		mouseEvent.preventDefault();
	};

	return (
		<S.AccordionWrapper>
			<S.AccordionHeader
				$isToggled={isDropped}
				onClick={handleAccordionToggle}
			>
				{typeof header === 'string' ? <p>{header}</p> : header}
				<Button>
					<img src={arrowIcon} />
				</Button>
			</S.AccordionHeader>
			<S.AccordionContent $isDisplayed={isDropped}>
				{children}
			</S.AccordionContent>
		</S.AccordionWrapper>
	);
};
