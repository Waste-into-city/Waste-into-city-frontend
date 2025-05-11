import { ChangeEvent, useCallback } from 'react';

import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useForm } from '@/hooks/useForm';

import { adminPanelFieldsKeys, SCORE_SETTINGS_SHORT_NAMES } from '../constants';

import {
	ADMIN_PANEL_HEADING,
	EMPTY_SCORE_SETTINGS,
	NUMBER_REG_EXP,
	RESET_BUTTON_LABEL,
	SAVE_BUTTON_LABEL,
	SCORE_SETTINGS_HEADER,
} from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { AdminPanelForm } from './types';

export const AdminPanelFields = () => {
	const {
		handleFieldChange,
		handleFormSubmit,
		errors,
		fields,
		resetFields,
		areFieldsChanged,
	} = useForm<AdminPanelForm>({
		defaultValues: EMPTY_SCORE_SETTINGS,
		submitHandler: () => Promise.resolve(),
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
	);
};
