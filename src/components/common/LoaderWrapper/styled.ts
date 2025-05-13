import styled, { css } from 'styled-components';

import { loaderCSS } from '@/styles/common/loader';

export const LoaderWrapperContainer = styled.div(({ theme }) => ({
	width: theme.widths.full,
	minHeight: 'fit-content',
	position: 'relative',
	display: 'contents',
}));

export const LoaderSpinner = styled.div`
	${({ theme }) => css`
		${loaderCSS(theme.colors.primary)}
		width: ${theme.sizes.loader};
		height: ${theme.sizes.loader};
	`}
`;

export const LoaderBlur = styled.div<{ $isVisible: boolean }>(
	({ theme, $isVisible }) => ({
		width: theme.widths.full,
		height: theme.heights.full,
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: `${theme.colors.background}f0`,
		transition: theme.transitions.fast,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: theme.zIndexes.middle,

		...(!$isVisible && {
			opacity: 0,
		}),
	})
);
