import styled from 'styled-components';

import { GROUP_DISPLAY_LIMIT } from './constants';

export const WorksGroupMarkerPin = styled.div<{ $displayValue: number }>(
	({ theme, $displayValue }) => ({
		width: theme.sizes.workMarker,
		height: theme.sizes.workMarker,
		backgroundColor: theme.colors.work,
		borderRadius: theme.borderRadius.circle,
		color: theme.colors.white,
		boxShadow: `${theme.boxShadows.small} ${theme.colors.backgroundBlur}`,
		border: theme.borders.small,
		borderColor: theme.colors.primaryContrast,
		fontSize:
			$displayValue <= GROUP_DISPLAY_LIMIT
				? theme.fontSizes.text
				: theme.fontSizes.label,
		fontWeight: 'bolder',
		textAlign: 'center',
		alignContent: 'center',
		cursor: 'pointer',
	})
);
