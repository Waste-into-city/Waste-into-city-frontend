import { memo, MouseEventHandler, useState } from 'react';

import hiddenPasswordIcon from '@/assets/icons/svg/hidden_password_icon.svg';
import showingPasswordIcon from '@/assets/icons/svg/showing_password_icon.svg';
import { InputProps } from '@/types/props/inputProps';

import * as S from './styled';

type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = memo(
	({ className, ...props }: PasswordInputProps) => {
		const [isShowingText, setIsShowingText] = useState(false);

		const handleSwitchTypeButtonClick: MouseEventHandler<
			HTMLButtonElement
		> = (event) => {
			setIsShowingText((isShowing) => !isShowing);
			event.preventDefault();
		};

		return (
			<S.PasswordInputContainer className={className}>
				<S.InputField
					type={isShowingText ? 'text' : 'password'}
					{...props}
				/>
				<S.SwitchTypeButton
					$isShowingPassword={isShowingText}
					onClick={handleSwitchTypeButtonClick}
				>
					<img
						src={
							isShowingText
								? showingPasswordIcon
								: hiddenPasswordIcon
						}
					/>
				</S.SwitchTypeButton>
			</S.PasswordInputContainer>
		);
	}
);
