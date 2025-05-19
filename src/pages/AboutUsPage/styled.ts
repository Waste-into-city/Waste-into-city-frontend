import styled from 'styled-components';

export const AboutUsPageWrapper = styled.main(({ theme }) => ({
	width: theme.widths.full,
	height: theme.heights.full,
	display: 'grid',
	gridTemplateRows: 'repeat(2, 1fr)',
	position: 'fixed',
	overflow: 'auto',

	[`@media ${theme.media.middleHeight} or ${theme.media.tablet}`]: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

export const AboutUsTopImage = styled.img(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	objectFit: 'cover',
	width: theme.widths.full,
	height: theme.heights.full,
	zIndex: theme.zIndexes.middle,
}));

export const DescriptionContainer = styled.section(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: theme.colors.background,

	'&:first-child': {
		boxShadow: theme.boxShadows.small,
	},

	[`@media ${theme.media.middleHeight} or ${theme.media.tablet}`]: {
		padding: theme.indent.large,
	},

	[`@media ${theme.media.phone}`]: {
		padding: theme.indent.medium,
	},
}));

export const TopDescriptionBlock = styled.article(({ theme }) => ({
	position: 'relative',
	padding: theme.indent.large,
	backgroundColor: theme.colors.background,
	borderRadius: theme.borderRadius.large,
	boxShadow: theme.boxShadows.small,
	zIndex: theme.zIndexes.front,
	gap: theme.indent.medium,

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	height: 'fit-content',
	width: 'fit-content',

	cursor: 'default',

	'& > img': {
		width: theme.sizes.logsFormLogo,
		height: theme.sizes.logsFormLogo,
	},

	'& > p': {
		fontSize: theme.fontSizes.control,
		color: theme.colors.fullContrast,
		width: theme.widths.aboutUsTopSection,
		textAlign: 'center',

		[`@media ${theme.media.laptop}`]: {
			width: 'auto',
		},
	},

	'& > a': {
		fontSize: theme.fontSizes.control,
		textDecoration: 'none',
		cursor: 'pointer',
		color: theme.colors.primary,
		textAlign: 'center',

		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));

export const BottomDescriptionBlock = styled.article(({ theme }) => ({
	fontSize: theme.fontSizes.control,
	padding: `${theme.indent.medium} ${theme.indent.large}`,
	lineHeight: theme.fontSizes.h2,
	color: theme.colors.fullContrast,

	[`@media ${theme.media.middleHeight} or ${theme.media.tablet}`]: {
		padding: 0,
	},
}));
