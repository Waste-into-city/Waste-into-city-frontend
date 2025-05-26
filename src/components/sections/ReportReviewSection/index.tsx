import { useCallback, useEffect, useMemo, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { ReportInfoDisplay } from '@/components/common/ReportInfoDisplay';
import { ReviewCardPicker } from '@/components/common/ReviewCardPicker';
import { WorkInfoDisplay } from '@/components/common/WorkInfoDisplay';
import { WorkReportResultDisplay } from '@/components/common/WorkReportResultDisplay';
import { ReviewQueries } from '@/constants/queryKeys';
import { useApproveWorkReportReview } from '@/queries/reviews/useApproveWorkReportReview';
import { useGetWorkReportReview } from '@/queries/reviews/useGetWorkReportReview';
import { useRejectWorkReportReview } from '@/queries/reviews/useRejectWorkReportReview';
import { useGetWorkInfo } from '@/queries/works/useGetWorkInfo';
import { useGetWorkReportResult } from '@/queries/works/useGetWorkReportResult';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import {
	FAILED_TO_GET_NEXT_REPORT_REVIEW,
	REPORT_REVIEW_SECTIONS,
} from './constants';
import { ReportReviewSectionSelector } from './ReportReviewSectionSelector';

const ReportReviewSection = () => {
	const { appendNotification } = useNotifications();

	const queryClient = useQueryClient();
	const { data, isFetching, error } = useGetWorkReportReview();
	const { data: workInfo, isFetching: isFetchingWorkInfo } = useGetWorkInfo(
		data?.workId ?? '',
		{
			enabled: Boolean(data?.workId),
			refetchInterval: undefined,
		}
	);
	const { data: workReportResult, isFetching: isFetchingWorkReportResult } =
		useGetWorkReportResult(data?.workReportResultId ?? '', {
			enabled: Boolean(data?.workReportResultId),
		});

	const [selectedSectionId, setSelectedSectionId] = useState(
		REPORT_REVIEW_SECTIONS[0].id
	);

	const { mutate: approveReport, isPending: isApproving } =
		useApproveWorkReportReview({
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [ReviewQueries.WorkReportReview],
				});
				setSelectedSectionId(REPORT_REVIEW_SECTIONS[0].id);
			},
		});
	const { mutate: rejectReport, isPending: isRejecting } =
		useRejectWorkReportReview({
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: [ReviewQueries.WorkReportReview],
				});
				setSelectedSectionId(REPORT_REVIEW_SECTIONS[0].id);
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
				error.message || FAILED_TO_GET_NEXT_REPORT_REVIEW
			);
		}
	}, [error, appendNotification]);

	const isLoadingCard =
		isFetching ||
		isApproving ||
		isRejecting ||
		Boolean(error) ||
		isFetchingWorkInfo ||
		isFetchingWorkReportResult;

	const selectedDisplay = useMemo(() => {
		switch (selectedSectionId) {
			case 1:
				return data && <ReportInfoDisplay report={data} />;
			case 2:
				return workInfo && <WorkInfoDisplay workInfo={workInfo} />;
			case 3:
				return (
					workReportResult && (
						<WorkReportResultDisplay
							workReportResult={workReportResult}
						/>
					)
				);
		}
	}, [data, selectedSectionId, workInfo, workReportResult]);

	return (
		<LoaderWrapper isLoaderVisible={isLoadingCard}>
			<ReviewCardPicker
				onAccept={handleReportAccept}
				onReject={handleReportReject}
				isLoading={isLoadingCard}
			>
				<ReportReviewSectionSelector
					currentId={selectedSectionId}
					setCurrentId={setSelectedSectionId}
				/>
				{selectedDisplay}
			</ReviewCardPicker>
		</LoaderWrapper>
	);
};

export default ReportReviewSection;
