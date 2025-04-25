import { MouseEventHandler, useEffect, useRef, useState } from 'react';

import { PopoverOptionsList, PopoverWrapper } from './styled';
import { PopoverOptionsWrapperProps } from './types';

export const PopoverOptionsWrapper = ({
	options,
	children,
	disabled = false,
}: PopoverOptionsWrapperProps) => {
	const [isPopoverVisible, setIsPopoverVisible] = useState(false);
	const popoverRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const closePopover = (clickEvent: MouseEvent | TouchEvent) => {
			if (
				popoverRef.current &&
				!popoverRef.current.contains(clickEvent.target as Node)
			) {
				setIsPopoverVisible(false);
			}
		};

		window.addEventListener('mousedown', closePopover);
		window.addEventListener('touchstart', closePopover);

		return () => {
			window.removeEventListener('mousedown', closePopover);
			window.removeEventListener('touchstart', closePopover);
		};
	}, [setIsPopoverVisible, popoverRef]);

	const handleOptionClick =
		(optionHandler: VoidFunction): MouseEventHandler =>
		() => {
			optionHandler();
			setIsPopoverVisible(false);
		};

	const handleWrapperClick: MouseEventHandler<HTMLDivElement> = (
		mouseEvent
	) => {
		mouseEvent.stopPropagation();
		setIsPopoverVisible((isPrevVisible) => !isPrevVisible);
	};

	return (
		<PopoverWrapper onClick={handleWrapperClick} ref={popoverRef}>
			{children}
			{isPopoverVisible && !disabled && (
				<PopoverOptionsList>
					{options.map(({ name, optionHandler }) => (
						<li
							key={name}
							onClickCapture={handleOptionClick(optionHandler)}
						>
							{name}
						</li>
					))}
				</PopoverOptionsList>
			)}
		</PopoverWrapper>
	);
};
