import LoaderWrapper from '@/components/common/LoaderWrapper';
import { ReportInfoDisplay } from '@/components/common/ReportInfoDisplay';
import { ReviewCardPicker } from '@/components/common/ReviewCardPicker';
import { useGetWorkReportReview } from '@/queries/reviews/useGetWorkReportReview';

const ReportReviewSection = () => {
	const { data, isLoading, error } = useGetWorkReportReview();

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
			<ReviewCardPicker onAccept={() => {}} onReject={() => {}}>
				{data && <ReportInfoDisplay report={data} />}
			</ReviewCardPicker>
		</LoaderWrapper>
	);
};

export default ReportReviewSection;
