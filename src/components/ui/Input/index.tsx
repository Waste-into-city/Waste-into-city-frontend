import { FocusEventHandler, memo, useState } from 'react';

import { InputProps } from '@/types/props/inputProps';

import * as S from './styled';

export const Input = memo(
	({ label, errorText, className, ...props }: InputProps) => {
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
			<S.Container className={className}>
				{Boolean(label) && (
					<S.Label
						$isFocused={isFocused}
						$isError={Boolean(errorText)}
					>
						{label}
					</S.Label>
				)}
				<S.Input
					$isError={Boolean(errorText)}
					{...props}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
				/>
				{Boolean(errorText) && <S.ErrorText>{errorText}</S.ErrorText>}
			</S.Container>
		);
	}
);
