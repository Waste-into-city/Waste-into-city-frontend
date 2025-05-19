import styled from 'styled-components';

export const WorkReportDisplayWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
	width: theme.widths.full,
	height: theme.heights.full,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},

	'& > p': {
		fontSize: theme.fontSizes.control,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.text,
		},
	},
}));

export const SetComplexityLabel = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.indent.medium,
	color: theme.colors.smallContrast,

	'& > img': {
		width: theme.sizes.listedTrashType,
		height: theme.sizes.listedTrashType,
		filter: theme.colors.iconSmallContrast,
	},
}));

export const SetStatus = styled.h2<{ $isSuccessful: boolean }>(
	({ theme, $isSuccessful }) => ({
		fontSize: theme.fontSizes.h2,
		color: $isSuccessful ? theme.colors.positive : theme.colors.negative,

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.h3,
		},
	})
);
