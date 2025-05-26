import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const SectionsSelectorWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: theme.widths.full,
	padding: theme.indent.medium,

	'& > h2': {
		color: theme.colors.fullContrast,
		fontSize: theme.fontSizes.h2,
		textAlign: 'center',

		[`@media ${theme.media.tablet}`]: {
			fontSize: theme.fontSizes.control,
		},

		[`@media ${theme.media.smallPhone}`]: {
			fontSize: theme.fontSizes.label,
		},
	},

	[`@media ${theme.media.tablet}`]: {
		padding: theme.indent.small,
	},
}));

export const NextSectionButton = styled(Button)(({ theme }) => ({
	width: theme.sizes.controlIcon,
	height: theme.sizes.controlIcon,
	'& > img': {
		transform: 'rotate(-90deg)',
	},
}));

export const PrevSectionButton = styled(NextSectionButton)(() => ({
	'& > img': {
		transform: 'rotate(90deg)',
	},
}));
