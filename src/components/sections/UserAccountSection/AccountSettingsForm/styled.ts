import styled from 'styled-components';

export const UserAccountForm = styled.form(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
	marginBottom: theme.indent.large,
	color: theme.colors.fullContrast,
}));

export const WatchModeLabels = styled.div<{ $isEditMode: boolean }>(
	({ theme, $isEditMode }) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: theme.indent.small,
		...($isEditMode && { width: 0, visibility: 'hidden' }),
	})
);

export const NicknameLabel = styled.p(({ theme }) => ({
	fontSize: theme.fontSizes.text,
	fontWeight: 'bolder',
}));

export const SmallLabel = styled.p(({ theme }) => ({
	fontSize: theme.fontSizes.label,
	fontWeight: 'normal',
}));

export const TextFields = styled.div(({ theme }) => ({
	display: 'flex',
	gap: theme.indent.large,

	[`@media ${theme.media.tablet}`]: {
		flexDirection: 'column',
	},
}));

export const PasswordFields = styled.div(({ theme }) => ({
	display: 'flex',
	width: '100%',
	gap: theme.indent.large,

	[`@media ${theme.media.laptop}`]: {
		flexDirection: 'column',
	},
}));

export const AvatarWithControlsWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.indent.medium,

	button: {
		height: '100%',
	},

	[`@media ${theme.media.tablet}`]: {
		flexWrap: 'wrap',
	},

	[`@media ${theme.media.phone}`]: {
		gap: theme.indent.medium,

		button: {
			padding: 0,
		},
	},
}));
