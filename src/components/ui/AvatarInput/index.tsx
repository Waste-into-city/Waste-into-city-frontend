import { ChangeEvent, useCallback, useMemo, useRef } from 'react';

import { ALLOWED_IMAGE_TYPES } from '@/constants/allowedImageTypes';
import { NO_AVATAR_ICON } from '@/constants/icons';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';
import { validateUserAvatarImage } from '@/utils/validators/userAvatarImage';

import { PopoverOptionsWrapper } from '../PopoverOptionsWrapper';

import { AvatarOption } from './AvatarOptionsPopover/types';
import { avatarOptionNames, FILE_SIZE_EXCEEDED_MESSAGE } from './constants';
import { AvatarImage } from './styled';
import { AvatarInputProps } from './types';

export const AvatarInput = ({
	avatarLink,
	handleAvatarDelete,
	isAvatarFileSet,
	isAvatarSaved,
	setAvatarFile,
	disabled = false,
}: AvatarInputProps) => {
	const { appendNotification } = useNotifications();
	const avatarInputRef = useRef<HTMLInputElement>(null);

	const handleAvatarInputChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		const avatarFile = target.files?.length ? target.files[0] : null;

		if (avatarFile && !validateUserAvatarImage(avatarFile)) {
			appendNotification(
				NotificationTypes.Error,
				FILE_SIZE_EXCEEDED_MESSAGE
			);
			return;
		}

		if (avatarFile) {
			setAvatarFile(avatarFile);
		}
	};

	const handleAvatarSetClick = useCallback(() => {
		avatarInputRef.current?.click();
	}, [avatarInputRef]);

	const handleAvatarClearClick = useCallback(() => {
		setAvatarFile(null);
	}, [setAvatarFile]);

	const avatarPopoverOptions: Array<AvatarOption> = useMemo(
		() => [
			{
				name: avatarOptionNames.setAvatarImage,
				optionHandler: handleAvatarSetClick,
			},
			...(isAvatarFileSet
				? [
						{
							name: avatarOptionNames.clearSelectedImage,
							optionHandler: handleAvatarClearClick,
						},
					]
				: []),
			...(isAvatarSaved
				? [
						{
							name: avatarOptionNames.deleteAvatarImage,
							optionHandler: handleAvatarDelete,
						},
					]
				: []),
		],
		[
			isAvatarFileSet,
			isAvatarSaved,
			handleAvatarClearClick,
			handleAvatarSetClick,
			handleAvatarDelete,
		]
	);

	return (
		<PopoverOptionsWrapper
			options={avatarPopoverOptions}
			disabled={disabled}
		>
			<AvatarImage
				src={avatarLink || NO_AVATAR_ICON}
				$isDisabled={Boolean(disabled)}
			/>
			<input
				ref={avatarInputRef}
				type='file'
				accept={ALLOWED_IMAGE_TYPES}
				onChange={handleAvatarInputChange}
				hidden
				disabled={disabled}
			/>
		</PopoverOptionsWrapper>
	);
};
