import styled from 'styled-components';

import { scrollbarCSS } from '@/styles/common/scrollbar';

export const ReportInfoWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
	color: theme.colors.fullContrast,

	'& > h2': {
		fontSize: theme.fontSizes.h2,
		wordBreak: 'break-word',
	},

	'& > p': {
		fontSize: theme.fontSizes.control,
		color: theme.colors.fullContrast,
		wordBreak: 'break-word',
	},

	[`@media ${theme.media.phone}`]: {
		'& > h2': {
			fontSize: theme.fontSizes.h3,
		},
		'& > p': {
			fontSize: theme.fontSizes.text,
		},
	},
}));

const ImagesWrapperScroll = styled.div`
	${scrollbarCSS}
`;

export const ReportImagesWrapper = styled(ImagesWrapperScroll)(({ theme }) => ({
	width: theme.widths.full,
	height: theme.heights.full,
	marginTop: 'auto',
	gap: theme.indent.medium,
	display: 'flex',
	overflow: 'auto',

	'& > img': {
		borderRadius: theme.borderRadius.round,
		maxWidth: theme.widths.full,
		height: theme.heights.workInfoImageApplication,
		objectFit: 'cover',
		userSelect: 'none',
	},
}));
