import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';
import { useFinishWork } from '@/queries/works/useFinishWork';
import { useGetWorkInfo } from '@/queries/works/useGetWorkInfo';
import { useUserLogs } from '@/store/user/useUserLogs';

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
	const {
		logs: { id: userId },
	} = useUserLogs();
	const [rates, setRates] = useState<Array<ParticipantRateInfo>>([]);

	const { data, isLoading, error } = useGetWorkInfo(id ?? '');
	const { mutate } = useFinishWork(id ?? '', {
		onSuccess: () => {
			navigate(ROUTES.MAIN);
		},
	});

	const otherParticipants = useMemo(
		() => data?.participants.filter(({ id }) => id !== userId) ?? [],
		[userId, data]
	);

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

	useEffect(() => {
		if (data && otherParticipants.length === 0) {
			mutate([]);
		}
	}, [data, mutate, otherParticipants.length]);

	const handleSubmitRatesButtonClick = async () => {
		mutate(
			rates.map(({ participantId, rate }) => ({
				id: participantId,
				ranking: rate,
				nickname: '',
				avatarLink: '',
			}))
		);
	};

	const handleSkipRatingButtonClick = async () => {
		mutate([]);
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
					{otherParticipants.map((participant) => (
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
