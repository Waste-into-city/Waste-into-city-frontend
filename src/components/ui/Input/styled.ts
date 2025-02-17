import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: fit-content;
	height: fit-content;
	position: relative;
`;

export const Label = styled.label<{ $isFocused: boolean; $isError: boolean }>`
	${({ theme, $isFocused, $isError }) => css`
		background: ${theme.colors.background};
		font-size: ${theme.fontSizes.label};
		top: -${theme.indent.small};
		left: ${theme.indent.medium};
		padding: 0 ${theme.indent.small};
		border-radius: ${theme.borderRadius.round};
		color: ${$isError
			? theme.colors.negative
			: $isFocused
				? theme.colors.primary
				: theme.colors.fullContrast};
		transition: ${theme.transitions.fast};
		z-index: ${theme.zIndexes.middle};
		position: absolute;
	`}
`;

export const Input = styled.input<{ $isError: boolean }>`
	${({ theme, $isError }) => css`
		width: 100%;
		padding: ${theme.indent.medium};
		font-size: ${theme.fontSizes.control};
		color: ${theme.colors.fullContrast};
		background-color: ${theme.colors.background};
		outline: ${theme.borders.small}
			${$isError ? theme.colors.negative : theme.colors.smallContrast};
		border-radius: ${theme.borderRadius.round};
		transition: ${theme.transitions.fast};
		border: none;
		display: block;
		position: relative;

		&:hover,
		&:focus {
			outline-color: ${$isError
				? theme.colors.negative
				: theme.colors.primary};
		}

		@media ${theme.media.phone} {
			font-size: ${theme.fontSizes.text};
		}
	`}
`;
