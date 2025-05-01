import { memo } from 'react';

import zoomOutIcon from '@/assets/icons/svg/minus_icon.svg';
import zoomInIcon from '@/assets/icons/svg/plus_icon.svg';
import { Button } from '@/components/ui/Button';
import { useUserLogs } from '@/store/user/useUserLogs';

import { ZoomControlsWrapper } from './styled';

const ZoomControlsInner = ({
	onZoomIn,
	onZoomOut,
}: {
	onZoomIn: VoidFunction;
	onZoomOut: VoidFunction;
}) => {
	const {
		logs: { isLoggedIn },
	} = useUserLogs();

	return (
		<ZoomControlsWrapper $isLoggedIn={isLoggedIn}>
			<Button onClick={onZoomIn}>
				<img src={zoomInIcon} />
			</Button>
			<Button onClick={onZoomOut}>
				<img src={zoomOutIcon} />
			</Button>
		</ZoomControlsWrapper>
	);
};

export const ZoomControls = memo(ZoomControlsInner);
