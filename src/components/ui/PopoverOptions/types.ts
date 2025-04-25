import { ReactNode } from 'react';

export type PopoverOption = {
	name: string;
	optionHandler: VoidFunction;
};

export type PopoverOptionsWrapperProps = {
	options: Array<PopoverOption>;
	children: ReactNode;
	disabled?: boolean;
};
