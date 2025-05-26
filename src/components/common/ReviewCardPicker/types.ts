import { ReactNode } from 'react';

export type ReviewCardPickerProps = {
	children: ReactNode;
	onAccept: VoidFunction;
	onReject: VoidFunction;
	isLoading?: boolean;
};
