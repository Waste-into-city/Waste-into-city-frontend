import { HTMLAttributes } from 'react';

import { IStyledComponent } from 'styled-components';

import * as S from './styled';

type ButtonVariants = 'common' | 'negative' | 'positive' | 'primary';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariants;
};

const BUTTONS: Record<ButtonVariants, IStyledComponent<'web'>> = {
	common: S.CommonButton,
	negative: S.NegativeButton,
	positive: S.PositiveButton,
	primary: S.PrimaryButton,
};

export const config = {
	BUTTONS,
};
