import { OtherUser } from '@/types/contracts/otherUser';

export type ParticipantRateProps = {
	participant: OtherUser;
	onRateChange: (rate: number) => void;
};
