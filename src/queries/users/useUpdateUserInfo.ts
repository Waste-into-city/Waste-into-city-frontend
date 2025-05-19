import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { UserAccountSettingsForm } from '@/components/sections/UserAccountSection/AccountSettingsForm/types';
import { UPDATE_USER_INFO_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

import { uploadImage } from '../uploadImage';

type UpdateUserMutation = {
	userInfo: UserAccountSettingsForm;
	avatarFile: File | null;
	avatarLink: string | null;
	isAvatarDeleted: boolean;
};

export const useUpdateUserInfo = (
	options?: UseMutationOptions<void, Error, UpdateUserMutation>
) =>
	useMutation<void, Error, UpdateUserMutation>({
		...options,
		mutationFn: async ({
			userInfo: { name, email, previousPassword, newPassword },
			avatarFile,
			isAvatarDeleted,
			avatarLink,
		}: UpdateUserMutation) => {
			let finalAvatarName = isAvatarDeleted ? null : avatarLink;

			if (avatarFile && !isAvatarDeleted) {
				finalAvatarName = await uploadImage(avatarFile);
			}

			const response = await fetchWithAuth(UPDATE_USER_INFO_URI, {
				method: 'PUT',
				body: JSON.stringify({
					nickname: name,
					email,
					password: previousPassword ? previousPassword : null,
					newPassword: newPassword ? newPassword : null,
					avatarImageName: finalAvatarName ? finalAvatarName : null,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error();
			}
		},
	});
