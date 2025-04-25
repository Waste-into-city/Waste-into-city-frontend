import { MouseEventHandler, useEffect, useMemo, useState } from 'react';

import { AvatarInput } from '@/components/ui/AvatarInput';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { useForm } from '@/hooks/useForm';
import { useUserLogs } from '@/store/user/useUserLogs';

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
	const { logs: userLogs } = useUserLogs();
	const [isEditMode, setIsEditMode] = useState(false);

	const defaultValues = useMemo<UserAccountSettingsForm>(
		() => ({
			...defaultEmptyValues,
			...{
				name: userLogs.nickname,
				email: userLogs.email,
				avatarLink: userLogs.avatarLink,
			},
		}),
		[userLogs]
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
		userLogs.avatarLink ?? ''
	);

	const [avatarFile, setAvatarFile] = useState<File | null>(null);

	useEffect(() => {
		setDisplayAvatarLink(
			avatarFile
				? URL.createObjectURL(avatarFile)
				: (userLogs.avatarLink ?? '')
		);
	}, [avatarFile]);

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
		<S.UserAccountForm onSubmit={handleFormSubmit}>
			<S.AvatarWithControlsWrapper>
				<AvatarInput
					avatarLink={displayAvatarLink}
					isAvatarFileSet={avatarFile !== null}
					isAvatarSaved={Boolean(userLogs.avatarLink)}
					setAvatarFile={setAvatarFile}
					handleAvatarDelete={handleAvatarDelete}
					disabled={!isEditMode}
				/>
				<S.WatchModeLabels $isEditMode={isEditMode}>
					<S.NicknameLabel>{userLogs.nickname}</S.NicknameLabel>
					<S.SmallLabel>{userLogs.email}</S.SmallLabel>
					<S.SmallLabel>Moderator</S.SmallLabel>
				</S.WatchModeLabels>
				<Button
					variant='positive'
					onClick={handleEditModeStart}
					disabled={!areFieldsChanged && isEditMode}
				>
					{isEditMode ? SAVE_BUTTON_LABEL : EDIT_BUTTON_LABEL}
				</Button>
				{isEditMode && (
					<Button variant='negative' onClick={handleEditModeCancel}>
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
							label={USER_SETTINGS_FORM_VALUES.previousPassword}
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
	);
};
