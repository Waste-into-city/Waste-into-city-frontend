import { IColoredTheme } from '@/styles/coloredTheme';
import { WorkStatus } from '@/types/contracts/workInfo';

export const WORK_STATUS_LABELS: Record<WorkStatus, string> = {
	[WorkStatus.Active]: 'Active',
	[WorkStatus.InProgress]: 'In Progress',
	[WorkStatus.Pending]: 'Pending',
	[WorkStatus.Successful]: 'Successful',
	[WorkStatus.Unknown]: 'Unknown',
};

export const STATUS_COLORS: Record<WorkStatus, keyof IColoredTheme['colors']> =
	{
		[WorkStatus.Active]: 'warning',
		[WorkStatus.InProgress]: 'work',
		[WorkStatus.Pending]: 'smallContrast',
		[WorkStatus.Successful]: 'positive',
		[WorkStatus.Unknown]: 'negative',
	};
