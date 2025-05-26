import styled from 'styled-components';

export const AccordionWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	height: 'fit-content',
	display: 'flex',
	flexDirection: 'column',
}));

export const AccordionHeader = styled.div<{ $isToggled: boolean }>(
	({ theme, $isToggled }) => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		cursor: 'pointer',
		color: theme.colors.fullContrast,

		'& > p': {
			fontSize: theme.fontSizes.text,
		},

		'& > button': {
			padding: theme.indent.small,
			'& > img': {
				transform: $isToggled
					? theme.transforms.rotateOpposite
					: 'rotate(0)',
				filter: $isToggled
					? theme.colors.iconPrimary
					: theme.colors.iconContrast,
				transition: theme.transitions.fast,
			},
		},
	})
);

export const AccordionContent = styled.div<{ $isDisplayed: boolean }>(
	({ theme, $isDisplayed }) => ({
		height: $isDisplayed ? 'auto' : 0,
		overflow: 'hidden',
		transition: theme.transitions.fast,
	})
);
