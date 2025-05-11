import { ReportInfoDisplay } from '@/components/common/ReportInfoDisplay';
import { ReviewCardPicker } from '@/components/common/ReviewCardPicker';
import { WorkReport } from '@/types/contracts/workReport';

const mockReport: WorkReport = {
	id: '1',
	title: 'Report Title',
	description: 'Description of thr work report',
	imageNames: [
		'https://audi-minsk.by/wp-content/uploads/2024/07/a6_1280x720-optimized.jpg',
		'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k8QD2Ty9XCxSBUucxssdkV8aolbj2vrQlw&s',
		'https://treenewal.com/wp-content/uploads/2020/11/environmental_factors_affecting_trees.png',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwthecQSnalUrYNkUvavdk_EpcAaFyAn5X4w&s',
	],
};

const ReportReviewSection = () => {
	return (
		<ReviewCardPicker onAccept={() => {}} onReject={() => {}}>
			<ReportInfoDisplay report={mockReport} />
		</ReviewCardPicker>
	);
};

export default ReportReviewSection;
