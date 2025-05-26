import { memo } from 'react';

import navigateIcon from '@/assets/icons/svg/navigate_icon.svg';

import { LocateButton } from './styled';

const LocateControlInner = ({ onLocate }: { onLocate: VoidFunction }) => {
	return (
		<LocateButton onClick={onLocate}>
			<img src={navigateIcon} />
		</LocateButton>
	);
};

export const LocateControl = memo(LocateControlInner);
