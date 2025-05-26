import { ByPageResponse } from '@/types/contracts/byPageResponse';

export type UsePaginationProps<T> = {
	initialItems?: Array<T>;
	pageSize: number;
	top: number;
	skip: number;
	getPage: (from: number, pageSize: number) => Promise<ByPageResponse<T>>;
	onError?: (error: Error) => void;
};
