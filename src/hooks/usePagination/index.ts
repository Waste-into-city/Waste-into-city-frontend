import { useCallback, useState } from 'react';

import { UsePaginationProps } from './types';

export const usePagination = <T>({
	initialItems = [],
	top,
	skip,
	pageSize,
	getPage,
	onError,
}: UsePaginationProps<T>) => {
	const [items, setItems] = useState<Array<T>>(initialItems);
	const [page, setPage] = useState(skip);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(top);

	const getNextPage = useCallback(async () => {
		if (page < totalPages) {
			setIsLoading(true);
			try {
				const {
					items: newItems,
					skip,
					total,
				} = await getPage(page, pageSize);
				setPage(skip);
				setTotalPages(total);
				setItems((prevItems) => [...prevItems, ...newItems]);
			} catch (e: unknown) {
				onError?.(e as Error);
			} finally {
				setIsLoading(false);
			}
		}
	}, [
		setIsLoading,
		getPage,
		setPage,
		setTotalPages,
		setItems,
		onError,
		page,
		totalPages,
	]);

	return { items, getNextPage, isLoading };
};
