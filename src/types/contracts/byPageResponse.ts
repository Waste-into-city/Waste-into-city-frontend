export type ByPageResponse<T> = {
	skip: number;
	pageSize: number;
	items: Array<T>;
	total: number;
};
