import styled from 'styled-components';

import { WorkStatus } from '@/types/contracts/workInfo';

import { STATUS_COLORS } from './constants';

export const StatusLabel = styled.label<{ $status: WorkStatus }>(
	({ theme, $status }) => ({
		backgroundColor: `${theme.colors[STATUS_COLORS[$status]]}${theme.colors.hexLabelOpacity}`,
		color: theme.colors[STATUS_COLORS[$status]],
		padding: `${theme.indent.small} ${theme.indent.medium}`,
		borderRadius: theme.borderRadius.statusLabel,
		fontSize: theme.fontSizes.label,
		width: 'fit-content',
	})
);
