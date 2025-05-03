import styled from 'styled-components';

export const ParticipantRateWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: theme.widths.full,
	gap: theme.indent.medium,
	flexWrap: 'wrap',

	[`@media ${theme.media.tablet}`]: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
}));

export const ParticipantInfo = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.indent.large,

	'& > p': {
		color: theme.colors.fullContrast,
		fontSize: theme.fontSizes.control,
		wordBreak: 'break-word',

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.text,
		},
	},

	'& > img': {
		width: theme.sizes.controlIcon,
		height: theme.sizes.controlIcon,
		borderRadius: theme.borderRadius.circle,
		objectFit: 'cover',
	},

	[`@media ${theme.media.tablet}`]: {
		gap: theme.indent.medium,
	},
}));

export const RateStarsWrapper = styled.ul(({ theme }) => ({
	display: 'flex',
	gap: theme.indent.small,

	'& > img': {
		width: theme.sizes.listedTrashType,
		height: theme.sizes.listedTrashType,
		filter: theme.colors.iconWarning,
		cursor: 'pointer',
	},

	[`@media ${theme.media.tablet}`]: {
		alignSelf: 'center',
	},
}));
