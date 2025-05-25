import starIconFilled from '@/assets/icons/svg/star_icon_filled.svg';
import starIconOutlined from '@/assets/icons/svg/star_icon_outlined.svg';
import { getImageUriByName } from '@/constants/apiEndpoints';
import { NO_AVATAR_ICON } from '@/constants/icons';
import { UserRating } from '@/types/contracts/userRating';

import { RATINGS_LIST } from './constants';
import * as S from './styled';

export const ParticipantsRatesList = ({
	ratesList,
}: {
	ratesList: Array<UserRating>;
}) => (
	<S.ParticipantsRatesWrapper>
		{ratesList.map(({ id, nickname, avatarLink, ranking }) => (
			<S.ParticipantRateItem key={id}>
				<S.ParticipantInfo>
					<img
						src={
							avatarLink
								? getImageUriByName(avatarLink)
								: NO_AVATAR_ICON
						}
					/>
					<p>{nickname}</p>
				</S.ParticipantInfo>
				<S.SingleParticipantRatesWrapper>
					{RATINGS_LIST.map((index) => (
						<img
							key={index}
							src={
								index <= ranking
									? starIconFilled
									: starIconOutlined
							}
						/>
					))}
				</S.SingleParticipantRatesWrapper>
			</S.ParticipantRateItem>
		))}
	</S.ParticipantsRatesWrapper>
);
