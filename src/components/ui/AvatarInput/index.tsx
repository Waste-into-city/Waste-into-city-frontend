import { ChangeEvent, useCallback, useMemo, useRef } from 'react';

import { NO_AVATAR_ICON } from '@/constants/icons';

import { PopoverOptionsWrapper } from '../PopoverOptions';

import { AvatarOption } from './AvatarOptionsPopover/types';
import { avatarOptionNames } from './constants';
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
	const avatarInputRef = useRef<HTMLInputElement>(null);

	const handleAvatarInputChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		const avatarFile = target.files?.length ? target.files[0] : null;
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
				onChange={handleAvatarInputChange}
				hidden
				disabled={disabled}
			/>
		</PopoverOptionsWrapper>
	);
};
