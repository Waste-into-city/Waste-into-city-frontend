import { Dispatch, SetStateAction } from 'react';

export type AvatarInputProps = {
	avatarLink?: string;
	setAvatarFile: Dispatch<SetStateAction<File | null>>;
	isAvatarFileSet: boolean;
	isAvatarSaved: boolean;
	handleAvatarDelete: VoidFunction;
	disabled?: boolean;
};
