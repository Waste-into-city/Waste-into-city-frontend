import arrowIcon from '@/assets/icons/svg/arrow_icon.svg';
import confirmIcon from '@/assets/icons/svg/check_icon.svg';
import closeIcon from '@/assets/icons/svg/cross_icon.svg';
import { useMapItemLocation } from '@/store/location/useMapItemLocation';

import * as S from './styled';

export const MapItemLocator = ({
	onSetLocation,
}: {
	onSetLocation: VoidFunction;
}) => {
	const { isSelected, location, cancelItem, setLocation, isDisplayOnly } =
		useMapItemLocation();

	const handleLocationSetButtonClick = () => {
		if (location) {
			setLocation(null);
		} else {
			onSetLocation();
		}
	};

	return (
		isSelected && (
			<S.MapItemLocationControls>
				<S.CancelButton onClick={cancelItem}>
					<img src={arrowIcon} />
				</S.CancelButton>
				{!isDisplayOnly && (
					<S.ControlButton onClick={handleLocationSetButtonClick}>
						<img src={location ? closeIcon : confirmIcon} />
					</S.ControlButton>
				)}
			</S.MapItemLocationControls>
		)
	);
};
