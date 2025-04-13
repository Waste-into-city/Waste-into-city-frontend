import { memo } from 'react';

import { ButtonProps, config } from './config';

const { BUTTONS } = config;

export const Button = memo(({ variant = 'common', ...props }: ButtonProps) => {
	const VariantButton = BUTTONS[variant];
	return <VariantButton {...props} />;
});
