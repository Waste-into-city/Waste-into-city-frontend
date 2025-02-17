import { css } from 'styled-components';

export const scrollbarCSS = css`
	${({ theme }) => css`
		&::-webkit-scrollbar {
			width: ${theme.widths.scrollbar};
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: ${theme.borderRadius.large};
			background-color: ${theme.colors.fullContrast};
			border: ${theme.indent.scrollbar} solid ${theme.colors.background};
			cursor: pointer;
		}
	`}
`;
