import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
	${({ theme }) => css`
		background-color: ${theme.colors.background};
		border-radius: ${theme.borderRadius.large};
		padding: ${theme.indent.small};
		box-shadow: ${theme.boxShadows.small};
		z-index: ${theme.zIndexes.middle};

		position: absolute;

		display: flex;
		justify-content: space-between;

		@media ${theme.media.landscape} {
			left: ${theme.indent.large};
			top: 50%;
			transform: translateY(-50%);
			flex-direction: column;

			@media ${theme.media.smallHeight} {
				height: ${theme.sizes.nearFull};
			}
		}

		@media ${theme.media.portrait} {
			bottom: ${theme.indent.large};
			left: 50%;
			transform: translateX(-50%);
			flex-direction: row;

			@media ${theme.media.phone} {
				width: ${theme.sizes.nearFull};
			}
		}
	`}
`;

export const SectionLink = styled(Link)<{ $isSelected: boolean }>`
	${({ theme, $isSelected }) => css`
		width: 55px;
		height: 55px;
		display: block;
		border-radius: ${theme.borderRadius.round};
		padding: ${theme.indent.small};
		transition: ${theme.transitions.fast};
		outline: none;

		&:hover,
		&:focus-visible {
			background-color: ${theme.colors.smallContrast};
		}

		img {
			width: 100%;
			height: 100%;
			filter: ${$isSelected
				? theme.colors.iconPrimary
				: theme.colors.iconContrast};
		}

		@media ${theme.media.landscape} {
			margin: ${theme.indent.large} 0;

			@media ${theme.media.smallHeight} {
				margin: ${theme.indent.medium} 0;
			}
		}

		@media ${theme.media.portrait} {
			margin: 0 ${theme.indent.large};

			@media ${theme.media.phone} {
				margin: 0 ${theme.indent.medium};
			}
		}
	`}
`;

export const LogInLink = styled(Link)`
	${({ theme }) => css`
		bottom: ${theme.indent.large};
		right: ${theme.indent.large};
		position: absolute;
		color: unset;
		box-shadow: ${theme.boxShadows.small};
		line-height: 0;

		background-color: ${theme.colors.background};
		width: 64px;
		height: 64px;
		border-radius: ${theme.borderRadius.circle};
		padding: ${theme.indent.medium};

		transition: ${theme.transitions.fast};
		z-index: ${theme.zIndexes.middle};
		outline: none;

		&:hover,
		&:focus-visible {
			background-color: ${theme.colors.smallContrast};
		}

		img {
			width: ${theme.widths.full};
			height: ${theme.heights.full};
			filter: ${theme.colors.iconContrast};
		}

		@media ${theme.media.phone} {
			bottom: ${theme.indent.large};
			right: ${theme.indent.medium};
		}
	`}
`;
