import styled from 'styled-components';

export const PopoverWrapper = styled.div(() => ({
	position: 'relative',
	width: 'fit-content',
	height: 'fit-content',
}));

export const PopoverOptionsList = styled.ul(({ theme }) => ({
	position: 'absolute',
	width: 'max-content',
	top: '50%',
	left: '100%',
	backgroundColor: theme.colors.background,
	listStyle: 'none',
	padding: `0 ${theme.indent.small}`,
	border: `${theme.borders.small} ${theme.colors.smallContrast}`,
	borderRadius: theme.borderRadius.round,
	zIndex: theme.zIndexes.front,

	li: {
		cursor: 'pointer',
		color: theme.colors.fullContrast,
		transition: theme.transitions.fast,
		margin: `${theme.indent.small} 0`,

		'&:hover': {
			color: theme.colors.primary,
		},
	},
}));
