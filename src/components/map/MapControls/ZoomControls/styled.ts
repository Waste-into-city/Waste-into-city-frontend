import styled from 'styled-components';

export const ZoomControlsWrapper = styled.div<{ $isLoggedIn: boolean }>(
	({ theme, $isLoggedIn }) => ({
		display: 'flex',
		position: 'relative',
		backgroundColor: theme.colors.background,
		borderRadius: theme.borderRadius.large,
		border: theme.borders.small,
		borderColor: theme.colors.smallContrast,
		overflow: 'hidden',

		button: {
			width: theme.sizes.controlIcon,
			height: theme.sizes.controlIcon,
			padding: theme.indent.medium,
			borderRadius: 0,
		},

		':after': {
			content: `""`,
			display: 'block',
			position: 'absolute',
			width: theme.indent.scrollbar,
			height: '50%',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: theme.colors.smallContrast,
			borderRadius: theme.borderRadius.round,
			outline: theme.borders.small,
			outlineColor: theme.colors.background,

			[`@media ${theme.media.portrait}`]: {
				width: '50%',
				height: theme.indent.scrollbar,
			},

			...(!$isLoggedIn && {
				width: '50%',
				height: theme.indent.scrollbar,
			}),
		},

		[`@media ${theme.media.portrait}`]: {
			flexDirection: 'column',
		},

		...(!$isLoggedIn && {
			flexDirection: 'column',
		}),
	})
);
