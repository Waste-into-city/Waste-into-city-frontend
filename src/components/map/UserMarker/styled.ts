import styled from 'styled-components';

export const UserMarkerPin = styled.div(({ theme }) => ({
	width: theme.sizes.userMarker,
	height: theme.sizes.userMarker,
	background: theme.colors.primary,
	borderRadius: theme.borderRadius.circle,
	border: theme.borders.large,
	borderColor: theme.colors.primaryContrast,
	boxShadow: theme.boxShadows.small,
}));
