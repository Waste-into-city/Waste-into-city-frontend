import styled from 'styled-components';

export const AvatarImage = styled.img<{ $isDisabled: boolean }>(
	({ theme, $isDisabled }) => ({
		width: theme.sizes.userAccountAvatar,
		height: theme.sizes.userAccountAvatar,
		background: theme.colors.smallContrast,
		borderRadius: theme.borderRadius.circle,
		border: 'none',
		objectFit: 'cover',
		...(!$isDisabled && { cursor: 'pointer' }),
	})
);
