import styled, { css } from 'styled-components';

export const CommonButton = styled.button`
	${({ theme }) => css`
		padding: ${theme.indent.medium};
		color: ${theme.colors.fullContrast};
		background: transparent;
		border-radius: ${theme.borderRadius.round};
		font-size: ${theme.fontSizes.control};
		transition: ${theme.transitions.fast};

		display: flex;
		justify-content: center;
		align-items: center;

		border: none;
		cursor: pointer;
		line-height: normal;

		&:enabled {
			&:hover,
			&:focus-visible {
				background-color: ${theme.colors.smallContrast};
				outline: none;
			}
		}

		&:disabled {
			color: ${theme.colors.smallContrast};
			cursor: default;

			img {
				filter: ${theme.colors.iconSmallContrast};
			}
		}

		img {
			width: ${theme.widths.full};
			height: ${theme.heights.full};
			filter: ${theme.colors.iconContrast};
		}

		@media ${theme.media.phone} {
			font-size: ${theme.fontSizes.text};
		}
	`}
`;

export const PositiveButton = styled(CommonButton)`
	${({ theme }) => css`
		color: ${theme.colors.positive};

		img {
			filter: ${theme.colors.iconPositive};
		}
	`}
`;

export const NegativeButton = styled(CommonButton)`
	${({ theme }) => css`
		color: ${theme.colors.negative};

		img {
			filter: ${theme.colors.iconNegative};
		}
	`}
`;

export const PrimaryButton = styled(CommonButton)`
	${({ theme }) => css`
		background-color: ${theme.colors.primary};
		color: ${theme.colors.primaryContrast};

		img {
			filter: ${theme.colors.iconPrimaryContrast};
		}

		&:hover,
		&:focus-visible {
			color: ${theme.colors.primary};
			background-color: ${theme.colors.primaryHover};
			outline: none;
		}
	`}
`;
