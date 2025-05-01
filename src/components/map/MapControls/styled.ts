import styled from 'styled-components';

export const MapControlsWrapper = styled.div<{ $isLoggedIn: boolean }>(
	({ theme, $isLoggedIn }) => ({
		display: 'flex',
		position: 'absolute',
		zIndex: theme.zIndexes.middle,
		bottom: theme.indent.large,
		right: theme.indent.large,
		gap: theme.indent.medium,

		...(!$isLoggedIn && {
			flexDirection: 'column-reverse',
			top: '50%',
			transform: 'translateY(-50%)',
		}),

		[`@media ${theme.media.portrait}`]: {
			flexDirection: 'column-reverse',
			top: '50%',
			transform: 'translateY(-50%)',
		},

		[`@media ${theme.media.phone}`]: {
			right: theme.indent.medium,
		},
	})
);
