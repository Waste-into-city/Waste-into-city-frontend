import { memo } from 'react';

import { WorkStatus } from '@/types/contracts/workInfo';

import { WORK_STATUS_LABELS } from './constants';
import { StatusLabel } from './styled';

export const WorkStatusLabel = memo(({ status }: { status: WorkStatus }) => {
	return (
		<StatusLabel $status={status}>{WORK_STATUS_LABELS[status]}</StatusLabel>
	);
});
