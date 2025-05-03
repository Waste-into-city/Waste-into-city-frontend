import emptyAvatarIcon from '@/assets/icons/svg/profile_icon.svg';
import batteriesIcon from '@/assets/icons/svg/trashcan/batteries.svg';
import electronicIcon from '@/assets/icons/svg/trashcan/electronic.svg';
import glassIcon from '@/assets/icons/svg/trashcan/glass.svg';
import mixedIcon from '@/assets/icons/svg/trashcan/mixed.svg';
import plasticIcon from '@/assets/icons/svg/trashcan/plastic.svg';
import { TrashTypes } from '@/types/trashTypes';

export const TRASH_ICONS: Record<TrashTypes, string> = {
	[TrashTypes.Batteries]: batteriesIcon,
	[TrashTypes.Electronic]: electronicIcon,
	[TrashTypes.Glass]: glassIcon,
	[TrashTypes.Mixed]: mixedIcon,
	[TrashTypes.Plastic]: plasticIcon,
};

export const NO_AVATAR_ICON = emptyAvatarIcon;
