import { ButtonProps, config } from './config';

const { BUTTONS } = config;

export const Button = ({ variant = 'common', ...props }: ButtonProps) => {
	const VariantButton = BUTTONS[variant];
	return <VariantButton {...props} />;
};
