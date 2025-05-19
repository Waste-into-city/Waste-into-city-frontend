import styled from 'styled-components';

import { IColoredTheme } from '@/styles/coloredTheme';
import { scrollbarCSS } from '@/styles/common/scrollbar';

export const WorkInfoWrapper = styled.div(({ theme }) => ({
	width: theme.widths.full,
	color: theme.colors.fullContrast,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.medium,
}));

const ImagesWrapperScroll = styled.div`
	${scrollbarCSS}
`;

export const WorkImagesWrapper = styled(ImagesWrapperScroll)(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	gap: theme.indent.medium,
	overflow: 'auto',

	'& > img': {
		borderRadius: theme.borderRadius.round,
		width: theme.widths.full,
		height: theme.heights.workInfoImageApplication,
		objectFit: 'cover',
	},
}));

export const WorkStatusWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.indent.small,
	fontSize: theme.fontSizes.text,
}));

export const WorkTrashTypes = styled.div(({ theme }) => ({
	display: 'flex',
	gap: theme.indent.small,

	'& > img': {
		width: theme.sizes.listedTrashType,
		height: theme.sizes.listedTrashType,
		filter: theme.colors.iconContrast,
	},
}));

export const WorkComplexity = styled.p<{
	$complexityColors: [
		keyof IColoredTheme['colors'],
		keyof IColoredTheme['colors'],
	];
}>(({ theme, $complexityColors: [textColor, iconColor] }) => ({
	fontSize: theme.fontSizes.text,
	color: theme.colors[textColor],
	gap: theme.indent.small,
	display: 'flex',
	alignItems: 'center',

	'& > img': {
		width: theme.sizes.listedTrashType,
		height: theme.sizes.listedTrashType,
		filter: theme.colors[iconColor],
	},
}));

export const WorkStartAt = styled.p(({ theme }) => ({
	color: theme.colors.fullContrast,
	fontSize: theme.fontSizes.control,
	'& > span': {
		color: theme.colors.primary,
		textDecoration: 'underline',
	},
}));

export const WorkTitle = styled.h2(({ theme }) => ({
	fontSize: theme.fontSizes.h2,
	margin: 0,
	wordBreak: 'break-word',

	[`@media ${theme.media.phone}`]: {
		fontSize: theme.fontSizes.h3,
		fontWeight: 'bold',
	},
}));

export const WorkDescription = styled.p(({ theme }) => ({
	fontSize: theme.fontSizes.text,
	marginTop: theme.indent.small,
	wordBreak: 'break-word',
}));

export const ParticipantsSummary = styled.div<{ $isToggled: boolean }>(
	({ theme, $isToggled }) => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		cursor: 'pointer',

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

export const ParticipantsList = styled.ul<{ $isDisplayed: boolean }>(
	({ theme, $isDisplayed }) => ({
		height: $isDisplayed ? 'auto' : 0,
		overflow: 'hidden',
		transition: theme.transitions.fast,
		display: 'block',
		...(!$isDisplayed && {
			marginTop: `-${theme.indent.medium}`,
		}),
	})
);

export const ParticipantItem = styled.li<{ $isCurrentUser: boolean }>(
	({ theme, $isCurrentUser }) => ({
		display: 'flex',
		gap: theme.indent.medium,
		alignItems: 'center',
		padding: `${theme.indent.medium} 0`,
		marginLeft: theme.indent.scrollbar,

		'& > h3': {
			fontSize: theme.fontSizes.text,
			wordBreak: 'break-word',

			...($isCurrentUser && {
				color: theme.colors.primary,
			}),
		},

		'& > img': {
			width: theme.sizes.listedTrashType,
			height: theme.sizes.listedTrashType,
			borderRadius: theme.borderRadius.circle,
			objectFit: 'cover',

			...($isCurrentUser && {
				outline: theme.borders.small,
				outlineColor: theme.colors.primary,
			}),
		},
	})
);
