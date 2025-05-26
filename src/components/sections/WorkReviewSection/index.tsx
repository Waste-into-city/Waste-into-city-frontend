import { useCallback, useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { ReviewCardPicker } from '@/components/common/ReviewCardPicker';
import { WorkInfoDisplay } from '@/components/common/WorkInfoDisplay';
import { ReviewQueries, WorkQueries } from '@/constants/queryKeys';
import { useApproveWorkReview } from '@/queries/reviews/useApproveWorkReview';
import { useGetWorkReview } from '@/queries/reviews/useGetWorkReview';
import { useRejectWorkReview } from '@/queries/reviews/useRejectWorkReview';
import { useMapItemLocation } from '@/store/location/useMapItemLocation';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import {
	FAILED_TO_GET_NEXT_WORK_REVIEW,
	WORK_LOCATION_BUTTON_LABEL,
} from './constants';
import { WorkLocationButton } from './styled';

const WorkReviewSection = () => {
	const queryClient = useQueryClient();

	const { displayItem, setLocation, cancelItem } = useMapItemLocation();
	const { data, isFetching, error, refetch } = useGetWorkReview();

	const { appendNotification } = useNotifications();

	const { mutate: approveReview, isPending: isApproving } =
		useApproveWorkReview({
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [ReviewQueries.WorkReview],
				});
				queryClient.invalidateQueries({
					queryKey: [WorkQueries.WorksLookup],
				});
				refetch();
			},
		});
	const { mutate: rejectReview, isPending: isRejecting } =
		useRejectWorkReview({
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [ReviewQueries.WorkReview],
				});
				refetch();
			},
		});

	const handleReviewApprove = useCallback(
		() => data?.id && approveReview(data.id),
		[data?.id, approveReview]
	);
	const handleReviewReject = useCallback(
		() => data?.id && rejectReview(data.id),
		[data?.id, rejectReview]
	);

	useEffect(() => {
		if (data) {
			setLocation([data.lng, data.lat]);
		}
		return () => {
			cancelItem();
		};
	}, [setLocation, data, cancelItem]);

	useEffect(() => {
		if (error) {
			appendNotification(
				NotificationTypes.Error,
				error.message || FAILED_TO_GET_NEXT_WORK_REVIEW
			);
		}
	}, [error, appendNotification]);

	const handleWorkLocationButtonClick = () => {
		displayItem();
	};

	const isLoadingCard =
		isFetching || isApproving || isRejecting || Boolean(error);

	return (
		<LoaderWrapper isLoaderVisible={isLoadingCard}>
			<ReviewCardPicker
				onAccept={handleReviewApprove}
				onReject={handleReviewReject}
				isLoading={isLoadingCard}
			>
				{data && (
					<WorkInfoDisplay workInfo={data} isMissingParticipants />
				)}
				<WorkLocationButton onClick={handleWorkLocationButtonClick}>
					{WORK_LOCATION_BUTTON_LABEL}
				</WorkLocationButton>
			</ReviewCardPicker>
		</LoaderWrapper>
	);
};

export default WorkReviewSection;
