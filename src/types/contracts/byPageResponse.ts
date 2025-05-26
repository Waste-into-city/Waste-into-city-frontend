export type ByPageResponse<T> = {
	skippedItems: number;
	size: number;
	items: Array<T>;
	total: number;
};
