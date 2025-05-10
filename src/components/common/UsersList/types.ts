import { ByPageResponse } from '@/types/contracts/byPageResponse';
import { OtherUser } from '@/types/contracts/otherUser';
import { UserRating } from '@/types/contracts/userRating';

export type UsersListProps = {
	usersList: Array<OtherUser | UserRating>;
	isIndexed?: boolean;
	getNextUsers: (
		from: number,
		pageSize: number
	) => Promise<ByPageResponse<OtherUser | UserRating>>;
};
