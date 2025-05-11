import acceptIcon from '@/assets/icons/svg/check_icon.svg';
import rejectIcon from '@/assets/icons/svg/cross_icon.svg';

import { CardSwiper } from './CardSwiper';
import * as S from './styled';
import { ReviewCardPickerProps } from './types';

export const ReviewCardPicker = ({
	children,
	onAccept,
	onReject,
}: ReviewCardPickerProps) => {
	return (
		<S.CardPickerWrapper>
			<CardSwiper onAccept={onAccept} onReject={onReject}>
				{children}
			</CardSwiper>
			<S.CardOptionButtonsWrapper>
				<S.CancelOptionButton variant='primary' onClick={onReject}>
					<img src={rejectIcon} />{' '}
				</S.CancelOptionButton>
				<S.CardOptionButton variant='primary' onClick={onAccept}>
					<img src={acceptIcon} />
				</S.CardOptionButton>
			</S.CardOptionButtonsWrapper>
		</S.CardPickerWrapper>
	);
};
