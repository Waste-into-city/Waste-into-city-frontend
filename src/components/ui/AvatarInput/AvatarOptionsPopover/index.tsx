import { forwardRef, MouseEventHandler } from 'react';

import { AvatarOption } from './types';

export const AvatarOptionsPopover = forwardRef<
	HTMLUListElement,
	{
		options: Array<AvatarOption>;
		closePopover?: VoidFunction;
	}
>(({ options, closePopover }, ref) => {
	const handleOptionClick =
		(optionHandler: VoidFunction): MouseEventHandler =>
		(mouseEvent) => {
			mouseEvent.stopPropagation();
			optionHandler();
			closePopover?.();
		};

	return (
		<ul ref={ref}>
			{options.map(({ name, optionHandler }) => (
				<li
					key={name}
					onClickCapture={handleOptionClick(optionHandler)}
				>
					{name}
				</li>
			))}
		</ul>
	);
});
