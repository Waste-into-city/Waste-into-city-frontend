import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';
import { useGetWorkInfo } from '@/queries/works/useGetWorkInfo';

import {
	RATES_SECTION_LABEL,
	SKIP_RATING_BUTTON_LABEL,
	SUBMIT_RATES_BUTTON_LABEL,
} from './constants';
import { ParticipantRate } from './ParticipantRate';
import * as S from './styled';
import { ParticipantRateInfo } from './types';

export default function WorkParticipantsRateSection() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [rates, setRates] = useState<Array<ParticipantRateInfo>>([]);
	const { data, isLoading, error } = useGetWorkInfo(id ?? '');

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

	const handleSubmitRatesButtonClick = () => {
		navigate(ROUTES.MAIN);
	};

	const handleSkipRatingButtonClick = () => {
		navigate(ROUTES.MAIN);
	};

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
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
					{data?.participants.map((participant) => (
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
			\
		</LoaderWrapper>
	);
}
