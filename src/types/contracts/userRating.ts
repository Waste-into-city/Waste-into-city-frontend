import { OtherUser } from './otherUser';

export type UserRating = OtherUser & {
	ranking: number;
};
