import { getImageUriByName } from '@/constants/apiEndpoints';
import { NO_AVATAR_ICON } from '@/constants/icons';
import { usePagination } from '@/hooks/usePagination';
import { useUserLogs } from '@/store/user/useUserLogs';

import { InfiniteScrollTrigger } from '../InfiniteScrollTrigger';

import { USERS_LIST_PAGE_SIZE } from './constants';
import * as S from './styled';
import { UsersListProps } from './types';

export const UsersList = ({
	usersList,
	isIndexed,
	getNextUsers,
}: UsersListProps) => {
	const {
		logs: { id: userId, email: userEmail },
	} = useUserLogs();

	const { items, isLoading, getNextPage } = usePagination({
		top: usersList.total,
		skip: usersList.items.length,
		pageSize: USERS_LIST_PAGE_SIZE,
		getPage: getNextUsers,
		initialItems: usersList.items,
	});

	return (
		<S.UserListWrapper>
			{items.map(
				(
					{
						id,
						nickname,
						avatarImageName: avatarLink,
						email,
						...otherFields
					},
					index
				) => (
					<S.UsersListItem key={id}>
						{isIndexed && <p>{index + 1}.</p>}
						<S.UserInfoItem
							$isCurrentUser={
								id === userId || email === userEmail
							}
						>
							<img
								src={
									avatarLink
										? getImageUriByName(avatarLink)
										: NO_AVATAR_ICON
								}
							/>
							<h3>{nickname}</h3>
						</S.UserInfoItem>
						{'ranking' in otherFields && (
							<p>{otherFields.ranking}</p>
						)}
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
