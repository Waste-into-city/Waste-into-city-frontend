import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const OptionsList = styled.ul(({ theme }) => ({
	listStyle: 'none',
	backgroundColor: theme.colors.smallSectionContrast,
	padding: theme.indent.small,
	paddingLeft: theme.indent.large,
	borderRadius: theme.borderRadius.large,

	[`@media ${theme.media.phone}`]: {
		paddingLeft: theme.indent.medium,
	},
}));

export const OptionItem = styled.li(({ theme }) => ({
	margin: `${theme.indent.medium} 0`,

	'&:first-child': {
		marginTop: 0,
	},

	'&:last-child': {
		marginBottom: 0,
	},
}));

export const OptionButton = styled(Button)(({ theme }) => ({
	marginLeft: `-${theme.indent.medium}`,
}));
