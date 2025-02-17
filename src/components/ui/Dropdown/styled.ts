import styled, { css } from 'styled-components';

import { scrollbarCSS } from '@/styles/scrollbar';

export const Container = styled.div`
	${({ theme }) => css`
		position: relative;
		width: fit-content;

		input {
			padding-right: ${theme.indent.inputIconPadding};
		}
	`}
`;

export const DropdownItems = styled.ul<{ $isDropped: boolean }>`
	${({ theme, $isDropped }) => css`
		width: ${theme.widths.full};
		z-index: ${theme.zIndexes.front};
		border-radius: ${theme.borderRadius.round};
		background-color: ${theme.colors.background};
		outline: ${$isDropped ? theme.borders.small : 'none'};
		outline-color: ${theme.colors.smallContrast};
		top: ${theme.tops.dropdownList};
		max-height: ${$isDropped ? theme.heights.dropdownList : '0'};
		transition: ${theme.transitions.fast};
		overflow-y: scroll;

		text-align: center;
		position: absolute;
		left: 0;

		${scrollbarCSS}

		li {
			padding: ${theme.indent.medium} 0;
			color: ${theme.colors.fullContrast};
			transition: ${theme.transitions.fast};
			font-size: ${theme.fontSizes.text};
			cursor: pointer;

			&:hover {
				background-color: ${theme.colors.smallContrast};
			}
		}

		@media ${theme.media.phone} {
			margin-top: -${theme.indent.small};
		}
	`}
`;

export const DropButton = styled.button<{ $isDropped: boolean }>`
	${({ theme, $isDropped }) => css`
		position: absolute;
		right: ${theme.indent.small};
		border: none;
		background: none;
		cursor: pointer;

		top: 50%;

		transform: translateY(-50%)
			${$isDropped ? theme.transforms.rotateOpposite : ''};
		transition: ${theme.transitions.fast};
		filter: ${$isDropped
			? theme.colors.iconPrimary
			: theme.colors.iconContrast};
	`}
`;
