import { useState } from 'react';

import hiddenPasswordIcon from '@/assets/icons/svg/hidden_password_icon.svg';
import showingPasswordIcon from '@/assets/icons/svg/showing_password_icon.svg';
import { InputProps } from '@/types/props/inputProps';

import { Input } from '../Input';

import * as S from './styled';

type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = (props: PasswordInputProps) => {
	const [isShowingText, setIsShowingText] = useState(false);

	const handleSwitchTypeButtonClick = () => {
		setIsShowingText((isShowing) => !isShowing);
	};

	return (
		<S.PasswordInputContainer>
			<Input type={isShowingText ? 'text' : 'password'} {...props} />
			<S.SwitchTypeButton
				$isShowingPassword={isShowingText}
				onClick={handleSwitchTypeButtonClick}
			>
				<img
					src={
						isShowingText ? showingPasswordIcon : hiddenPasswordIcon
					}
				/>
			</S.SwitchTypeButton>
		</S.PasswordInputContainer>
	);
};
