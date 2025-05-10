import { NO_AVATAR_ICON } from '@/constants/icons';
import { usePagination } from '@/hooks/usePagination';
import { useUserLogs } from '@/store/user/useUserLogs';

import { InfiniteScrollTrigger } from '../InfiniteScrollTrigger';

import * as S from './styled';
import { UsersListProps } from './types';

export const UsersList = ({
	usersList,
	isIndexed,
	getNextUsers,
}: UsersListProps) => {
	const {
		logs: { id: userId },
	} = useUserLogs();

	const { items, isLoading, getNextPage } = usePagination({
		top: 40,
		skip: 0,
		pageSize: 50,
		getPage: getNextUsers,
		initialItems: usersList,
	});

	return (
		<S.UserListWrapper>
			{items.map(
				({ id, nickname, avatarLink, ...otherFields }, index) => (
					<S.UsersListItem key={id}>
						{isIndexed && <p>{index + 1}.</p>}
						<S.UserInfoItem $isCurrentUser={id === userId}>
							<img src={avatarLink || NO_AVATAR_ICON} />
							<h3>{nickname}</h3>
						</S.UserInfoItem>
						{'rating' in otherFields && <p>{otherFields.rating}</p>}
					</S.UsersListItem>
				)
			)}
			<InfiniteScrollTrigger
				onReach={getNextPage}
				isLoading={isLoading}
			/>
		</S.UserListWrapper>
	);
};
