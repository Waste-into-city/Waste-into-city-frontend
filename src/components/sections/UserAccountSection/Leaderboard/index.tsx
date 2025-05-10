import { UsersList } from '@/components/common/UsersList';
import { UserRating } from '@/types/contracts/userRating';

import { LEADERBOARD_HEADING } from './constants';
import { LeaderboardWrapper } from './styled';

const mockLeaders: Array<UserRating> = [
	{
		id: '1',
		nickname: 'Jonathan',
		avatarLink: '',
		rating: 200,
	},
	{
		id: '3',
		nickname: 'Joe',
		avatarLink: '',
		rating: 150,
	},
	{
		id: '9',
		nickname: 'Mike',
		avatarLink: '',
		rating: 100,
	},
	{
		id: '2',
		nickname: 'Bob',
		avatarLink: '',
		rating: 50,
	},
	{
		id: '7',
		nickname: 'Peter',
		avatarLink: '',
		rating: 50,
	},
];

export const Leaderboard = () => {
	return (
		<LeaderboardWrapper>
			<h2>{LEADERBOARD_HEADING}</h2>
			<UsersList
				usersList={mockLeaders}
				isIndexed
				getNextUsers={() =>
					Promise.resolve({
						total: 0,
						pageSize: 0,
						skip: 0,
						items: [],
					})
				}
			/>
		</LeaderboardWrapper>
	);
};
