import styled from 'styled-components';

import { scrollbarCSS } from '@/styles/common/scrollbar';

export const AttachmentsWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
}));

export const AttachButtonPart = styled.div(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	alignItems: 'center',
	gap: theme.indent.small,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		color: theme.colors.fullContrast,

		[`@media ${theme.media.tablet}`]: {
			fontSize: theme.fontSizes.h3,
		},
	},

	'& > button': {
		width: theme.sizes.controlIcon,
		height: theme.sizes.controlIcon,

		[`@media ${theme.media.phone}`]: {
			width: theme.sizes.removeAttachmentButton,
			height: theme.sizes.removeAttachmentButton,
			padding: 0,
		},
	},
}));

const ScrollableList = styled.div`
	${scrollbarCSS}
`;

export const AttachmentsList = styled(ScrollableList)<{ $isNotEmpty: boolean }>(
	({ theme, $isNotEmpty }) => ({
		width: theme.widths.full,
		display: 'flex',
		gap: theme.indent.medium,
		overflow: 'auto',
		...($isNotEmpty && {
			marginTop: theme.indent.medium,
			padding: theme.indent.small,
			border: theme.borders.small,
			borderColor: theme.colors.smallContrast,
			borderRadius: theme.borderRadius.round,
		}),
	})
);

export const AttachmentItem = styled.div(({ theme }) => ({
	position: 'relative',

	'& > img': {
		height: theme.heights.workInfoImageApplication,
		borderRadius: theme.borderRadius.round,
		objectFit: 'cover',
	},

	'& > button': {
		position: 'absolute',
		width: theme.sizes.removeAttachmentButton,
		height: theme.sizes.removeAttachmentButton,
		padding: 0,
		borderRadius: theme.borderRadius.circle,
		top: theme.indent.medium,
		right: theme.indent.medium,
		background: theme.colors.background,
	},
}));
