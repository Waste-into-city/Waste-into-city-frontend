import { MouseEventHandler, useEffect, useMemo, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { AvatarInput } from '@/components/ui/AvatarInput';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { getImageUriByName } from '@/constants/apiEndpoints';
import { NO_AVATAR_ICON } from '@/constants/icons';
import { UserQueries } from '@/constants/queryKeys';
import { useForm } from '@/hooks/useForm';
import { useGetSelfUserInfo } from '@/queries/users/useGetSelfUserInfo';
import { useUpdateUserInfo } from '@/queries/users/useUpdateUserInfo';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';
import { UserRoles } from '@/types/userRoles';

import {
	ACCOUNT_INFORMATION_UPDATED_MESSAGE,
	CANCEL_BUTTON_LABEL,
	defaultEmptyValues,
	EDIT_BUTTON_LABEL,
	SAVE_BUTTON_LABEL,
	USER_INFO_CHANGE_ERROR_MESSAGE,
	USER_SETTINGS_FORM_VALUES,
} from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { UserAccountSettingsForm } from './types';

export const AccountSettingsForm = () => {
	const queryClient = useQueryClient();
	const { data, isLoading, error, refetch } = useGetSelfUserInfo();

	const [isEditMode, setIsEditMode] = useState(false);
	const [isAvatarDeleted, setIsAvatarDeleted] = useState(false);

	const { appendNotification } = useNotifications();

	const { mutateAsync, isPending } = useUpdateUserInfo({
		onError: () => {
			appendNotification(
				NotificationTypes.Error,
				USER_INFO_CHANGE_ERROR_MESSAGE
			);
		},
		onSuccess: () => {
			refetch();
		},
	});

	const defaultValues = useMemo<UserAccountSettingsForm>(
		() => ({
			...defaultEmptyValues,
			...(data && {
				name: data.nickname,
				email: data.email,
				avatarLink: data?.avatarImageName ?? '',
			}),
		}),
		[data]
	);

	const {
		handleFormSubmit,
		handleFieldChange,
		fields,
		errors,
		resetFields,
		areFieldsChanged,
	} = useForm<UserAccountSettingsForm>({
		defaultValues: defaultValues,
		submitHandler: async (values) => {
			await mutateAsync({
				userInfo: values,
				avatarFile,
				isAvatarDeleted,
				avatarLink: data?.avatarImageName ?? null,
			});

			queryClient.invalidateQueries({
				queryKey: [UserQueries.UserInfo],
			});

			setIsEditMode(false);
			setAvatarFile(null);

			appendNotification(
				NotificationTypes.Success,
				ACCOUNT_INFORMATION_UPDATED_MESSAGE
			);
		},
		validationSchema,
	});

	const {
		name,
		email,
		previousPassword,
		newPassword,
		newPasswordConfirmation,
	} = fields;

	const [displayAvatarLink, setDisplayAvatarLink] = useState(
		data?.avatarImageName ?? ''
	);

	const [avatarFile, setAvatarFile] = useState<File | null>(null);

	useEffect(() => {
		setDisplayAvatarLink(
			avatarFile
				? URL.createObjectURL(avatarFile)
				: data?.avatarImageName
					? getImageUriByName(data.avatarImageName)
					: ''
		);
	}, [avatarFile, data?.avatarImageName]);

	const handleEditModeStart: MouseEventHandler = (mouseEvent) => {
		if (!isEditMode) {
			mouseEvent.preventDefault();
			setIsEditMode(true);
		}
	};

	const handleEditModeCancel: MouseEventHandler = (mouseEvent) => {
		mouseEvent.preventDefault();
		setIsEditMode(false);
		resetFields();
		setAvatarFile(null);
		setIsAvatarDeleted(false);
		setDisplayAvatarLink(
			data?.avatarImageName ? getImageUriByName(data.avatarImageName) : ''
		);
	};

	const handleAvatarDelete = () => {
		setIsAvatarDeleted(true);
		setDisplayAvatarLink(NO_AVATAR_ICON);
	};

	const isInfoChanged =
		!isEditMode ||
		(isEditMode && (areFieldsChanged || avatarFile || isAvatarDeleted));

	return (
		<LoaderWrapper
			isLoaderVisible={isLoading || Boolean(error) || isPending}
		>
			<S.UserAccountForm onSubmit={handleFormSubmit}>
				<S.AvatarWithControlsWrapper>
					<AvatarInput
						avatarLink={displayAvatarLink}
						isAvatarFileSet={avatarFile !== null}
						isAvatarSaved={
							Boolean(data?.avatarImageName) && !isAvatarDeleted
						}
						setAvatarFile={setAvatarFile}
						handleAvatarDelete={handleAvatarDelete}
						disabled={!isEditMode}
					/>
					<S.WatchModeLabels $isEditMode={isEditMode}>
						<S.NicknameLabel>{data?.nickname}</S.NicknameLabel>
						<S.SmallLabel>{data?.email}</S.SmallLabel>
						<S.SmallLabel>
							{(data?.highRoleName === UserRoles.Moderator ||
								data?.highRoleName === UserRoles.Admin) &&
								data?.highRoleName}
						</S.SmallLabel>
					</S.WatchModeLabels>
					<Button
						variant='positive'
						onClick={handleEditModeStart}
						disabled={!isInfoChanged}
					>
						{isEditMode ? SAVE_BUTTON_LABEL : EDIT_BUTTON_LABEL}
					</Button>
					{isEditMode && (
						<Button
							variant='negative'
							onClick={handleEditModeCancel}
						>
							{CANCEL_BUTTON_LABEL}
						</Button>
					)}
				</S.AvatarWithControlsWrapper>
				{isEditMode && (
					<>
						<S.TextFields>
							<Input
								value={name}
								onChange={handleFieldChange('name')}
								errorText={errors.name}
								label={USER_SETTINGS_FORM_VALUES.name}
							/>
							<Input
								value={email}
								onChange={handleFieldChange('email')}
								errorText={errors.email}
								label={USER_SETTINGS_FORM_VALUES.email}
							/>
						</S.TextFields>
						<S.PasswordFields>
							<PasswordInput
								value={previousPassword}
								onChange={handleFieldChange('previousPassword')}
								errorText={errors.previousPassword}
								label={
									USER_SETTINGS_FORM_VALUES.previousPassword
								}
							/>
							<PasswordInput
								value={newPassword}
								onChange={handleFieldChange('newPassword')}
								errorText={errors.newPassword}
								label={USER_SETTINGS_FORM_VALUES.newPassword}
							/>
							<PasswordInput
								value={newPasswordConfirmation}
								onChange={handleFieldChange(
									'newPasswordConfirmation'
								)}
								errorText={errors.newPasswordConfirmation}
								label={
									USER_SETTINGS_FORM_VALUES.newPasswordConfirmation
								}
							/>
						</S.PasswordFields>
					</>
				)}
			</S.UserAccountForm>
		</LoaderWrapper>
	);
};
