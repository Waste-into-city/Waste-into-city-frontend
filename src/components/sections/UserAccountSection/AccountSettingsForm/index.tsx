import { MouseEventHandler, useEffect, useMemo, useState } from 'react';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { AvatarInput } from '@/components/ui/AvatarInput';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { useForm } from '@/hooks/useForm';
import { useGetSelfUserInfo } from '@/queries/users/useGetSelfUserInfo';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';
import { UserRoles } from '@/types/userRoles';

import {
	CANCEL_BUTTON_LABEL,
	defaultEmptyValues,
	EDIT_BUTTON_LABEL,
	SAVE_BUTTON_LABEL,
	USER_SETTINGS_FORM_VALUES,
} from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { UserAccountSettingsForm } from './types';

export const AccountSettingsForm = () => {
	const { data, isLoading, error } = useGetSelfUserInfo();
	const [isEditMode, setIsEditMode] = useState(false);
	const { appendNotification } = useNotifications();

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
		submitHandler: () => {
			setIsEditMode(false);
			setAvatarFile(null);
			appendNotification(
				NotificationTypes.Success,
				'Successfully changed'
			);
			return Promise.resolve();
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
				: (data?.avatarImageName ?? '')
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
	};

	const handleAvatarDelete = () => {
		console.log('Delete avatar');
	};

	return (
		<LoaderWrapper isLoaderVisible={isLoading || Boolean(error)}>
			<S.UserAccountForm onSubmit={handleFormSubmit}>
				<S.AvatarWithControlsWrapper>
					<AvatarInput
						avatarLink={displayAvatarLink}
						isAvatarFileSet={avatarFile !== null}
						isAvatarSaved={Boolean(data?.avatarImageName)}
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
						disabled={!areFieldsChanged && isEditMode}
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
