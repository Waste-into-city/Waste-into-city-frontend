import { IColoredTheme } from '@/styles/coloredTheme';
import { WorkStatus } from '@/types/contracts/workInfo';

export const WORK_STATUS_LABELS: Record<WorkStatus, string> = {
	[WorkStatus.Available]: 'Available',
	[WorkStatus.Preparing]: 'Preparing',
	[WorkStatus.InProgress]: 'In Progress',
	[WorkStatus.PendingFinalization]: 'Finishing',
	[WorkStatus.FinishedSuccessfully]: 'Successful',
	[WorkStatus.FinishedFailed]: 'Failed',
	[WorkStatus.Closed]: 'Closed',
};

export const STATUS_COLORS: Record<WorkStatus, keyof IColoredTheme['colors']> =
	{
		[WorkStatus.Available]: 'warning',
		[WorkStatus.Preparing]: 'smallContrast',
		[WorkStatus.InProgress]: 'work',
		[WorkStatus.PendingFinalization]: 'smallContrast',
		[WorkStatus.FinishedSuccessfully]: 'positive',
		[WorkStatus.FinishedFailed]: 'negative',
		[WorkStatus.Closed]: 'smallContrast',
	};
