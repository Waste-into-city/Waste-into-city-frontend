import { ChangeEvent, useCallback, useMemo } from 'react';

import LoaderWrapper from '@/components/common/LoaderWrapper';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useForm } from '@/hooks/useForm';
import { useGetScoreSettings } from '@/queries/adminPanel/useGetScoreSettings';
import { useUpdateScoreSettings } from '@/queries/adminPanel/useUpdateScoreSettings';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import { adminPanelFieldsKeys, SCORE_SETTINGS_SHORT_NAMES } from '../constants';

import {
	ADMIN_PANEL_HEADING,
	EMPTY_SCORE_SETTINGS,
	NUMBER_REG_EXP,
	RESET_BUTTON_LABEL,
	SAVE_BUTTON_LABEL,
	SCORE_SETTINGS_HEADER,
	SETTINGS_NOT_SAVED_MESSAGE,
	SETTINGS_SAVED_MESSAGE,
} from './constants';
import {
	getFormValuesFromScoreSettings,
	getScoreSettingsFromFormValues,
} from './helpers';
import { validationSchema } from './schema';
import * as S from './styled';
import { AdminPanelForm } from './types';

export const AdminPanelFields = () => {
	const { appendNotification } = useNotifications();
	const { data, isLoading, refetch } = useGetScoreSettings();
	const { mutateAsync, isPending } = useUpdateScoreSettings({
		onSuccess: () => {
			appendNotification(
				NotificationTypes.Success,
				SETTINGS_SAVED_MESSAGE
			);
			refetch();
		},
		onError: () => {
			appendNotification(
				NotificationTypes.Error,
				SETTINGS_NOT_SAVED_MESSAGE
			);
		},
	});

	const defaultValues = useMemo(
		() =>
			data ? getFormValuesFromScoreSettings(data) : EMPTY_SCORE_SETTINGS,
		[data]
	);

	const {
		handleFieldChange,
		handleFormSubmit,
		errors,
		fields,
		resetFields,
		areFieldsChanged,
	} = useForm<AdminPanelForm>({
		defaultValues,
		submitHandler: (values) =>
			mutateAsync(getScoreSettingsFromFormValues(values)),
		validationSchema,
	});

	const handleNumericFieldChange = useCallback(
		(fieldName: keyof AdminPanelForm) =>
			(event: ChangeEvent<HTMLInputElement>) => {
				const parsedValue =
					event.target.value.match(NUMBER_REG_EXP)?.[0];
				event.target.value = parsedValue ?? '';
				handleFieldChange(fieldName)(event);
			},
		[handleFieldChange]
	);

	return (
		<LoaderWrapper isLoaderVisible={isLoading || isPending}>
			<S.AdminPanelFieldsForm onSubmit={handleFormSubmit}>
				<h2>{ADMIN_PANEL_HEADING}</h2>
				<Accordion header={SCORE_SETTINGS_HEADER} isDefaultDropped>
					<S.ScoreSettingsFieldsGrid>
						{adminPanelFieldsKeys.map((fieldKey) => (
							<Input
								value={fields[fieldKey]}
								onChange={handleNumericFieldChange(fieldKey)}
								key={fieldKey}
								label={SCORE_SETTINGS_SHORT_NAMES[fieldKey]}
								errorText={errors[fieldKey]}
							/>
						))}
					</S.ScoreSettingsFieldsGrid>
				</Accordion>
				<S.ScoreSettingsButtonsWrapper>
					<Button variant='primary' disabled={!areFieldsChanged}>
						{SAVE_BUTTON_LABEL}
					</Button>
					<Button disabled={!areFieldsChanged} onClick={resetFields}>
						{RESET_BUTTON_LABEL}
					</Button>
				</S.ScoreSettingsButtonsWrapper>
			</S.AdminPanelFieldsForm>
		</LoaderWrapper>
	);
};
