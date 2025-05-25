import { QueryKey, UseQueryOptions } from '@tanstack/react-query';

export type PatchedQueryOptions<
	TQueryFnData = unknown,
	TError = Error,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = readonly unknown[],
> = Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>;
