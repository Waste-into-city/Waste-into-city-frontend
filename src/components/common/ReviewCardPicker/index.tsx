import {
	MouseEventHandler,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import acceptIcon from '@/assets/icons/svg/check_icon.svg';
import rejectIcon from '@/assets/icons/svg/cross_icon.svg';

import { cardWindowEvents, CHOICE_BORDER } from './constants';
import {
	getMovePercentPath,
	getPositionFromMoveEvent,
	isElementScrollable,
	isPointInElement,
} from './helpers';
import * as S from './styled';
import { ReviewCardPickerProps } from './types';

export const ReviewCardPicker = ({
	children,
	onAccept,
	onReject,
	isLoading,
}: ReviewCardPickerProps) => {
	const [isMoveStarted, setIsMoveStarted] = useState(false);
	const [movePosition, setMovePosition] = useState(0);
	const [moveStartPosition, setMoveStartPosition] = useState(0);
	const cardWrapperRef = useRef<HTMLDivElement>(null);

	const moveStart = useCallback(
		(event: Event) => {
			const clickPosition = getPositionFromMoveEvent(event);
			if (
				cardWrapperRef.current &&
				isPointInElement(cardWrapperRef.current, clickPosition)
			) {
				if (
					cardWrapperRef.current.contains(
						event.target as HTMLElement
					) &&
					isElementScrollable(event.target as HTMLElement)
				) {
					return;
				}
				setIsMoveStarted(true);
				setMoveStartPosition(clickPosition[0]);
			}
		},
		[setIsMoveStarted, setMoveStartPosition]
	);

	const moveCard = useCallback(
		(event: Event) => {
			if (isMoveStarted) {
				const movePath =
					getPositionFromMoveEvent(event)[0] - moveStartPosition;
				setMovePosition(
					getMovePercentPath(movePath, cardWrapperRef.current)
				);
			}
		},
		[isMoveStarted, setMovePosition, moveStartPosition]
	);

	const moveEnd = useCallback(() => {
		setIsMoveStarted(false);
		setMovePosition(0);

		if (movePosition >= CHOICE_BORDER && !isLoading) {
			onAccept();
		}

		if (movePosition <= -CHOICE_BORDER && !isLoading) {
			onReject();
		}
	}, [
		setIsMoveStarted,
		setMovePosition,
		movePosition,
		onAccept,
		onReject,
		isLoading,
	]);

	useEffect(() => {
		cardWindowEvents.start.forEach((eventName) =>
			window.addEventListener(eventName, moveStart)
		);
		cardWindowEvents.move.forEach((eventName) =>
			window.addEventListener(eventName, moveCard)
		);
		cardWindowEvents.end.forEach((eventName) =>
			window.addEventListener(eventName, moveEnd)
		);

		return () => {
			cardWindowEvents.start.forEach((eventName) =>
				window.removeEventListener(eventName, moveStart)
			);
			cardWindowEvents.move.forEach((eventName) =>
				window.removeEventListener(eventName, moveCard)
			);
			cardWindowEvents.end.forEach((eventName) =>
				window.removeEventListener(eventName, moveEnd)
			);
		};
	}, [moveStart, moveCard, moveEnd]);

	const handleClickEvent: MouseEventHandler = (event) => {
		event.stopPropagation();
	};

	return (
		<S.CardPickerWrapper
			ref={cardWrapperRef}
			$isAccepting={movePosition >= CHOICE_BORDER && !isLoading}
			$isRejecting={movePosition <= -CHOICE_BORDER && !isLoading}
			onClick={handleClickEvent}
		>
			<S.CardWrapper>{children}</S.CardWrapper>
			<S.CardOptionButtonsWrapper>
				<S.CancelOptionButton onClick={onReject}>
					<img src={rejectIcon} />
				</S.CancelOptionButton>
				<S.CardOptionButton variant='primary' onClick={onAccept}>
					<img src={acceptIcon} />
				</S.CardOptionButton>
			</S.CardOptionButtonsWrapper>
		</S.CardPickerWrapper>
	);
};
