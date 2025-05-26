import styled from 'styled-components';

export const UserListWrapper = styled.ul(({ theme }) => ({
	width: theme.widths.full,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
}));

export const UsersListItem = styled.li(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: theme.indent.medium,

	'& > p': {
		fontSize: theme.fontSizes.text,
		color: theme.colors.fullContrast,
		fontWeight: 'bolder',

		[`@media ${theme.media.phone}`]: {
			fontSize: theme.fontSizes.label,
		},
	},
}));

export const UserInfoItem = styled.div<{ $isCurrentUser: boolean }>(
	({ theme, $isCurrentUser }) => ({
		display: 'flex',
		alignItems: 'center',
		gap: theme.indent.medium,

		'& > img': {
			width: theme.sizes.listedTrashType,
			height: theme.sizes.listedTrashType,
			borderRadius: theme.borderRadius.circle,
			outline: theme.borders.small,
			outlineColor: $isCurrentUser ? theme.colors.primary : 'transparent',
		},

		'& > h3': {
			wordBreak: 'break-word',
			fontWeight: 'normal',
			fontSize: theme.fontSizes.control,
			color: $isCurrentUser
				? theme.colors.primary
				: theme.colors.fullContrast,

			[`@media ${theme.media.phone}`]: {
				fontSize: theme.fontSizes.text,
			},
		},
	})
);
