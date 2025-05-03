import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';
import { OtherUser } from '@/types/contracts/otherUser';

import {
	RATES_SECTION_LABEL,
	SKIP_RATING_BUTTON_LABEL,
	SUBMIT_RATES_BUTTON_LABEL,
} from './constants';
import { ParticipantRate } from './ParticipantRate';
import * as S from './styled';
import { ParticipantRateInfo } from './types';

const mockParticipants: Array<OtherUser> = [
	{
		id: '2',
		nickname: 'Nick',
		avatarLink:
			'https://audi-minsk.by/wp-content/uploads/2024/07/a6_1280x720-optimized.jpg',
	},
	{ id: '3', nickname: 'Jonathan', avatarLink: '' },
];

export default function WorkParticipantsRateSection() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [rates, setRates] = useState<Array<ParticipantRateInfo>>([]);

	console.log(id);

	const handleParticipantRateChange =
		(participantId: string) => (rate: number) => {
			setRates((prevRates) => {
				if (
					prevRates.find(
						(prevRate) => prevRate.participantId === participantId
					)
				) {
					return prevRates.map((prevRate) =>
						prevRate.participantId === participantId
							? { participantId, rate }
							: prevRate
					);
				}

				return [...prevRates, { participantId, rate }];
			});
		};

	console.log(rates);

	const handleSubmitRatesButtonClick = () => {
		navigate(ROUTES.MAIN);
	};

	const handleSkipRatingButtonClick = () => {
		navigate(ROUTES.MAIN);
	};

	return (
		<S.WorkRatesWrapper>
			<h2>{RATES_SECTION_LABEL}</h2>
			<S.SubmitRatesButtons>
				<Button
					variant='primary'
					disabled={rates.length === 0}
					onClick={handleSubmitRatesButtonClick}
				>
					{SUBMIT_RATES_BUTTON_LABEL}
				</Button>
				<Button onClick={handleSkipRatingButtonClick}>
					{SKIP_RATING_BUTTON_LABEL}
				</Button>
			</S.SubmitRatesButtons>
			<S.ParticipantRatesWrapper>
				{mockParticipants.map((participant) => (
					<ParticipantRate
						key={participant.id}
						participant={participant}
						onRateChange={handleParticipantRateChange(
							participant.id
						)}
					/>
				))}
			</S.ParticipantRatesWrapper>
		</S.WorkRatesWrapper>
	);
}
