import { FocusEventHandler, useState } from 'react';

import { InputProps } from '@/types/props/inputProps';

import * as S from './styled';

export const Input = ({ label, isError, ...props }: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleInputFocus: FocusEventHandler<HTMLInputElement> = (
		focusEvent
	) => {
		setIsFocused(true);
		props.onFocus?.call(null, focusEvent);
	};

	const handleInputBlur: FocusEventHandler<HTMLInputElement> = (
		blurEvent
	) => {
		setIsFocused(false);
		props.onBlur?.call(null, blurEvent);
	};

	return (
		<S.Container>
			{label && (
				<S.Label $isFocused={isFocused} $isError={Boolean(isError)}>
					{label}
				</S.Label>
			)}
			<S.Input
				$isError={Boolean(isError)}
				{...props}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
			/>
		</S.Container>
	);
};
