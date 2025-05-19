import { useCallback, useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { ReportInfoDisplay } from '@/components/common/ReportInfoDisplay';
import { ReviewCardPicker } from '@/components/common/ReviewCardPicker';
import { ReviewQueries } from '@/constants/queryKeys';
import { useApproveWorkReportReview } from '@/queries/reviews/useApproveWorkReportReview';
import { useGetWorkReportReview } from '@/queries/reviews/useGetWorkReportReview';
import { useRejectWorkReportReview } from '@/queries/reviews/useRejectWorkReportReview';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import { FAILED_TO_GET_NEXT_REPORT_REVIEW } from './constants';

const ReportReviewSection = () => {
	const { appendNotification } = useNotifications();

	const queryClient = useQueryClient();
	const { data, isLoading, error } = useGetWorkReportReview();

	const { mutate: approveReport, isPending: isApproving } =
		useApproveWorkReportReview({
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [ReviewQueries.WorkReportReview],
				});
			},
		});
	const { mutate: rejectReport, isPending: isRejecting } =
		useRejectWorkReportReview({
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [ReviewQueries.WorkReportReview],
				});
			},
		});

	const handleReportAccept = useCallback(
		() => data?.id && approveReport(data.id),
		[data?.id, approveReport]
	);
	const handleReportReject = useCallback(
		() => data?.id && rejectReport(data.id),
		[data?.id, rejectReport]
	);

	useEffect(() => {
		if (error) {
			appendNotification(
				NotificationTypes.Error,
				FAILED_TO_GET_NEXT_REPORT_REVIEW
			);
		}
	}, [error]);

	const isLoadingCard =
		isLoading || isApproving || isRejecting || Boolean(error);

	return (
		<LoaderWrapper isLoaderVisible={isLoadingCard}>
			<ReviewCardPicker
				onAccept={handleReportAccept}
				onReject={handleReportReject}
				isLoading={isLoadingCard}
			>
				{data && <ReportInfoDisplay report={data} />}
			</ReviewCardPicker>
		</LoaderWrapper>
	);
};

export default ReportReviewSection;
