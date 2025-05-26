import LoaderWrapper from '@/components/common/LoaderWrapper';
import { UsersList } from '@/components/common/UsersList';
import { getNextLeaderboardUsers } from '@/queries/users/getNextLeaderboardUsers';
import { useGetLeaderboard } from '@/queries/users/useGetLeaderboard';

import { LEADERBOARD_HEADING } from './constants';
import { LeaderboardWrapper } from './styled';

export const Leaderboard = () => {
	const { data, isLoading, error } = useGetLeaderboard();

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
			<LeaderboardWrapper>
				<h2>{LEADERBOARD_HEADING}</h2>
				{data && (
					<UsersList
						usersList={data}
						isIndexed
						getNextUsers={getNextLeaderboardUsers}
					/>
				)}
			</LeaderboardWrapper>
		</LoaderWrapper>
	);
};
