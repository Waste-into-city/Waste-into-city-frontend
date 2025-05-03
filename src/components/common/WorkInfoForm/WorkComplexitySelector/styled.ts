import styled from 'styled-components';

export const WorkComplexitiesWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.medium,
	color: theme.colors.fullContrast,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		[`@media ${theme.media.tablet}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},
}));

export const WorkComplexityOptionsWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	justifyContent: 'space-around',
}));

export const WorkComplexityOption = styled.div<{
	$isSelected: boolean;
	$complexity: number;
}>(({ theme, $isSelected, $complexity }) => ({
	textAlign: 'center',
	width: 'fit-content',
	fontSize: theme.fontSizes.text,

	'&:before': {
		content: '""',
		display: 'block',
		cursor: 'pointer',
		width: theme.sizes.controlIcon,
		height: theme.sizes.controlIcon,
		borderRadius: theme.borderRadius.circle,
		backgroundColor: theme.colors.smallContrast,
		marginBottom: theme.indent.small,
		transition: theme.transitions.fast,

		...($isSelected && {
			...($complexity === 1 && {
				backgroundColor: theme.colors.positive,
			}),

			...($complexity === 2 && {
				backgroundColor: theme.colors.warning,
			}),

			...($complexity === 3 && {
				backgroundColor: theme.colors.negative,
			}),
		}),
	},
}));
