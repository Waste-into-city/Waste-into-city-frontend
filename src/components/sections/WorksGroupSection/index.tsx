import { useCallback, useMemo } from 'react';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { WorksList } from '@/components/common/WorksList';
import { WORKS_PAGE_SIZE } from '@/components/common/WorksList/constants';
import { useGetWorksGroup } from '@/queries/works/useGetWorksGroup';
import { useSelectedWorksGroup } from '@/store/worksGroup/useSelectedWorksGroup';

import { WORKS_GROUP_HEADING } from './constants';
import { WorksGroupWrapper } from './styled';

export default function WorksGroupSection() {
	const { worksGroup } = useSelectedWorksGroup();
	const groupIds = useMemo(
		() => worksGroup?.map(({ id }) => id) ?? [],
		[worksGroup]
	);
	const { data, isLoading, error } = useGetWorksGroup(groupIds);

	const initialWorks = useMemo(
		() => (data ? data.slice(0, WORKS_PAGE_SIZE) : []),
		[data]
	);

	const getNextWorks = useCallback(
		(from: number, pageSize: number) =>
			Promise.resolve({
				total: data?.length ?? 0,
				pageSize: pageSize,
				skip: Math.min(from + pageSize, data?.length ?? 0),
				items: data ? data.slice(from, from + pageSize) : [],
			}),
		[data]
	);

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
			<WorksGroupWrapper>
				<h2>{WORKS_GROUP_HEADING}</h2>
				<WorksList
					initialWorks={initialWorks}
					getNextWorks={getNextWorks}
				/>
			</WorksGroupWrapper>
		</LoaderWrapper>
	);
}
