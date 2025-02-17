import { css } from 'styled-components';

export const loaderCSS = (color?: string) => css`
	${({ theme }) => css`
		border-radius: ${theme.borderRadius.circle};
		background:
			radial-gradient(
					farthest-side,
					${color ?? theme.colors.primary} 94%,
					#0000
				)
				top/9px 9px no-repeat,
			conic-gradient(#0000 30%, ${color ?? theme.colors.primary});
		-webkit-mask: radial-gradient(
			farthest-side,
			#0000 calc(100% - 9px),
			#000 0
		);
		animation: spinner 1s infinite linear;

		@keyframes spinner {
			100% {
				transform: rotate(1turn);
			}
		}
	`}
`;
