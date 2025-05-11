import { ReactNode } from 'react';

export type AccordionProps = {
	children: ReactNode;
	header: ReactNode | string;
	isDefaultDropped?: boolean;
};
