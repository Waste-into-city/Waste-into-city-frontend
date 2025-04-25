import styled from 'styled-components';

import { Button } from '@/components/ui/Button';

export const OptionsList = styled.ul(() => ({
	listStyle: 'none',
}));

export const OptionItem = styled.li(({ theme }) => ({
	margin: `${theme.indent.medium} 0`,
}));

export const OptionButton = styled(Button)(({ theme }) => ({
	marginLeft: `-${theme.indent.medium}`,
}));
