import { useMemo, useState } from 'react';

import filledStarIcon from '@/assets/icons/svg/star_icon_filled.svg';
import outlinedStarIcon from '@/assets/icons/svg/star_icon_outlined.svg';
import { NO_AVATAR_ICON } from '@/constants/icons';

import { MAX_RATE } from './constants';
import * as S from './styled';
import { ParticipantRateProps } from './types';

export const ParticipantRate = ({
	participant,
	onRateChange,
}: ParticipantRateProps) => {
	const [rate, setRate] = useState(0);
	const starIds = useMemo(
		() => new Array(MAX_RATE).fill(0).map((_, rateId) => rateId + 1),
		[]
	);

	const handleRateStarClick = (rateId: number) => () => {
		setRate(rateId);
		onRateChange(rateId);
	};

	return (
		<S.ParticipantRateWrapper>
			<S.ParticipantInfo>
				<img src={participant.avatarLink || NO_AVATAR_ICON} />
				<p>{participant.nickname}</p>
			</S.ParticipantInfo>
			<S.RateStarsWrapper>
				{starIds.map((rateId) => (
					<img
						key={rateId}
						src={rate < rateId ? outlinedStarIcon : filledStarIcon}
						onClick={handleRateStarClick(rateId)}
					/>
				))}
			</S.RateStarsWrapper>
		</S.ParticipantRateWrapper>
	);
};
