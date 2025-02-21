import { ChangeEvent, memo, MouseEventHandler, useState } from 'react';

import arrowIcon from '@/assets/icons/svg/arrow_icon.svg';
import { InputProps } from '@/types/props/inputProps';

import * as S from './styled';

type DropdownProps = InputProps & {
	items: string[];
	handleChange?: (value: string) => void;
};

export const Dropdown = memo(
	({
		items,
		value: initialValue,
		handleChange,
		className,
		...props
	}: DropdownProps) => {
		const [isDropped, setIsDropped] = useState(false);
		const [inputValue, setInputValue] = useState(initialValue ?? '');

		const handleDropButtonClick: MouseEventHandler<HTMLButtonElement> = (
			event
		) => {
			setIsDropped((isDropped) => !isDropped);
			event.preventDefault();
		};

		const handleInputChange = (
			changeEvent: ChangeEvent<HTMLInputElement>
		) => {
			setInputValue(changeEvent.target.value);
			handleChange?.call(null, changeEvent.target.value);
		};

		const handleDroppedItemClick = (item: string) => () => {
			setIsDropped(false);
			setInputValue(item);
			handleChange?.call(null, item);
		};

		return (
			<S.Container className={className}>
				<S.ItemInput
					{...props}
					value={inputValue}
					onChange={handleInputChange}
				/>
				<S.DropButton
					$isDropped={isDropped}
					onClick={handleDropButtonClick}
				>
					<img src={arrowIcon} />
				</S.DropButton>
				<S.DropdownItems $isDropped={isDropped}>
					{items.map((item) => (
						<li key={item} onClick={handleDroppedItemClick(item)}>
							{item}
						</li>
					))}
				</S.DropdownItems>
			</S.Container>
		);
	}
);
