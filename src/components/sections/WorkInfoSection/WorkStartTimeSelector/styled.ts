import styled from 'styled-components';

import { Dropdown } from '@/components/ui/Dropdown';

export const SelectorHeading = styled.h3(({ theme }) => ({
	fontSize: theme.fontSizes.h3,
	color: theme.colors.fullContrast,
}));

export const WorkStartTimeSelectorWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.indent.large,
	alignItems: 'center',
	marginTop: theme.indent.medium,

	'& > p': {
		fontSize: theme.fontSizes.control,
		color: theme.colors.fullContrast,
	},
}));

export const TimeDropdown = styled(Dropdown)(({ theme }) => ({
	width: 120,

	[`@media ${theme.media.phone}`]: {
		width: theme.widths.full,
	},
}));
