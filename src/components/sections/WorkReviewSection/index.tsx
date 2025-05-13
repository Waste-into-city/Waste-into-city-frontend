import { useEffect } from 'react';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { ReviewCardPicker } from '@/components/common/ReviewCardPicker';
import { WorkInfoDisplay } from '@/components/common/WorkInfoDisplay';
import { useGetWorkReview } from '@/queries/reviews/useGetWorkReview';
import { useMapItemLocation } from '@/store/location/useMapItemLocation';

import { WORK_LOCATION_BUTTON_LABEL } from './constants';
import { WorkLocationButton } from './styled';

const WorkReviewSection = () => {
	const { displayItem, setLocation, cancelItem } = useMapItemLocation();
	const { data, isLoading, error } = useGetWorkReview();

	const handleWorkLocationButtonClick = () => {
		displayItem();
	};

	useEffect(() => {
		if (data) {
			setLocation([data.lng, data.lat]);
		}
		return () => {
			cancelItem();
		};
	}, [setLocation, data]);

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
			<ReviewCardPicker onAccept={() => {}} onReject={() => {}}>
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
