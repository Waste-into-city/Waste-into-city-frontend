import styled from 'styled-components';

export const TextArea = styled.textarea<{ $isError: boolean }>(
	({ theme, $isError }) => ({
		width: theme.widths.full,
		padding: theme.indent.medium,
		fontSize: theme.fontSizes.control,
		color: theme.colors.fullContrast,
		backgroundColor: theme.colors.background,
		outline: theme.borders.small,
		outlineColor: $isError
			? theme.colors.negative
			: theme.colors.smallContrast,
		borderRadius: theme.borderRadius.round,
		transition: theme.transitions.fast,
		border: 'none',
		display: 'block',
		position: 'relative',
		resize: 'none',

		'&:hover, &:focus': {
			outlineColor: $isError
				? theme.colors.negative
				: theme.colors.primary,
		},

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.text,
		},
	})
);
