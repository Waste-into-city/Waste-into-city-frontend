import styled from 'styled-components';

import { loaderCSS } from '@/styles/common/loader';

export const Loader = styled.div`
	${({ theme }) => `
    ${loaderCSS(theme.colors.primary)}
    width: ${theme.sizes.loader};
    height: ${theme.sizes.loader};
`}
`;

export const TriggerLoaderWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	minHeight: 1,
}));
