import styled from 'styled-components';

import { Button } from '@/components/ui/Button';
import { IColoredTheme } from '@/styles/coloredTheme';
import { NotificationTypes } from '@/types/notificationTypes';

const getNotificationColor = (
	notificationType: NotificationTypes
): keyof IColoredTheme['colors'] => {
	switch (notificationType) {
		case NotificationTypes.Success:
			return 'positive';
		case NotificationTypes.Error:
			return 'negative';
		case NotificationTypes.Info:
		default:
			return 'smallContrast';
	}
};

export const NotificationPopup = styled.section<{
	$type: NotificationTypes;
	$isDisplayed: boolean;
}>(({ theme, $type, $isDisplayed }) => ({
	position: 'fixed',
	top: theme.indent.large,
	left: '50%',
	transform: 'translateX(-50%)',
	display: 'flex',
	alignItems: 'center',
	gap: theme.indent.medium,
	backgroundColor: theme.colors.background,
	border: theme.borders.small,
	borderColor: theme.colors[getNotificationColor($type)],
	borderRadius: theme.borderRadius.large,
	padding: theme.indent.scrollbar,
	paddingLeft: theme.indent.medium,
	zIndex: theme.zIndexes.front,
	boxShadow: `${theme.boxShadows.small} ${theme.colors.backgroundBlur}`,
	fontSize: theme.fontSizes.text,
	transition: theme.transitions.fast,
	color: theme.colors.fullContrast,

	width: 'max-content',
	maxWidth: theme.widths.notificationPopup,
	opacity: 0,

	...($isDisplayed && {
		opacity: 1,
	}),

	[`@media ${theme.media.tablet}`]: {
		maxWidth: `calc(${theme.widths.full} - ${theme.indent.large})`,
	},

	[`@media ${theme.media.phone}`]: {
		top: theme.indent.medium,
	},
}));

export const CloseNotificationButton = styled(Button)(({ theme }) => ({
	padding: theme.indent.scrollbar,
	width: theme.sizes.notificationCloseButton,
	height: theme.sizes.notificationCloseButton,
	flexShrink: 0,
}));
