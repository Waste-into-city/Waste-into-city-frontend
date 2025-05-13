import { useNavigate } from 'react-router-dom';

import { WorkStatusLabel } from '@/components/ui/WorkStatusLabel';
import { TRASH_ICONS } from '@/constants/icons';
import { ROUTES } from '@/constants/routes';
import { usePagination } from '@/hooks/usePagination';

import { InfiniteScrollTrigger } from '../InfiniteScrollTrigger';

import { WORKS_PAGE_SIZE } from './constants';
import * as S from './styled';
import { WorksListProps } from './types';

export const WorksList = ({ initialWorks, getNextWorks }: WorksListProps) => {
	const navigate = useNavigate();

	const { items, isLoading, getNextPage } = usePagination({
		top: initialWorks.total,
		skip: initialWorks.skippedItems,
		pageSize: WORKS_PAGE_SIZE,
		getPage: getNextWorks,
		initialItems: initialWorks.items,
	});

	const handleWorkItemClick = (id: string) => () => {
		navigate(`${ROUTES.WORK_INFO}/${id}`);
	};

	return (
		<S.WorksListWrapper>
			{items.map(({ id, workStatusTypeForClient, title, trashTypes }) => (
				<S.WorksListItem key={id} onClick={handleWorkItemClick(id)}>
					<h3>{title}</h3>
					<S.WorkItemLabels>
						<WorkStatusLabel status={workStatusTypeForClient} />
						<S.WorkItemLabels>
							{trashTypes.map((trashType) => (
								<img
									key={trashType}
									src={TRASH_ICONS[trashType]}
								/>
							))}
						</S.WorkItemLabels>
					</S.WorkItemLabels>
				</S.WorksListItem>
			))}
			<InfiniteScrollTrigger
				onReach={getNextPage}
				isLoading={isLoading}
			/>
		</S.WorksListWrapper>
	);
};
