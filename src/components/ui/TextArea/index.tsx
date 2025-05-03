import { FocusEventHandler, memo, useState } from 'react';

import { TextAreaProps } from '@/types/props/textAreaProps';

import * as InputStyle from '../Input/styled';

import * as S from './styled';

export const TextArea = memo(
	({ label, errorText, className, ...props }: TextAreaProps) => {
		const [isFocused, setIsFocused] = useState(false);

		const handleInputFocus: FocusEventHandler<HTMLTextAreaElement> = (
			focusEvent
		) => {
			setIsFocused(true);
			props.onFocus?.call(null, focusEvent);
		};

		const handleInputBlur: FocusEventHandler<HTMLTextAreaElement> = (
			blurEvent
		) => {
			setIsFocused(false);
			props.onBlur?.call(null, blurEvent);
		};

		return (
			<InputStyle.Container className={className}>
				{Boolean(label) && (
					<InputStyle.Label
						$isFocused={isFocused}
						$isError={Boolean(errorText)}
					>
						{label}
					</InputStyle.Label>
				)}
				<S.TextArea
					$isError={Boolean(errorText)}
					{...props}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
				/>
				{Boolean(errorText) && (
					<InputStyle.ErrorText>{errorText}</InputStyle.ErrorText>
				)}
			</InputStyle.Container>
		);
	}
);
