import { useCallback, useState } from 'react';

import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { useForm } from '@/hooks/useForm';
import { TrashTypes } from '@/types/trashTypes';

import { WorkImageAttachments } from '../WorkImageAttachments';
import { WorkImageAttachment } from '../WorkImageAttachments/types';

import {
	CREATE_WORK_BUTTON_LABEL,
	EDIT_WORK_BUTTON_LABEL,
	LABELS,
	NO_TRASH_TYPES_ERROR,
} from './constants';
import { validationSchema } from './schema';
import * as S from './styled';
import { WorkInfoForm as WorkInfoFormType, WorkInfoFormProps } from './types';
import { WorkComplexitySelector } from './WorkComplexitySelector';
import { WorkTrashTypesSelector } from './WorkTrashTypesSelector';

export const WorkInfoForm = ({
	initialValues,
	onSubmit,
	isEditForm,
}: WorkInfoFormProps) => {
	const [attachments, setAttachments] = useState<Array<WorkImageAttachment>>(
		initialValues.attachments
	);

	const [trashTypes, setTrashTypes] = useState<Array<TrashTypes>>(
		initialValues.trashTypes
	);

	const [complexity, setComplexity] = useState(initialValues.complexity);

	const submitHandler = useCallback(
		async ({ title, description }: WorkInfoFormType) => {
			if (!trashTypes.length) {
				throw new Error(NO_TRASH_TYPES_ERROR);
			}

			await onSubmit({
				title,
				description,
				attachments,
				trashTypes: [...trashTypes],
				complexity,
			});
		},
		[onSubmit, attachments, trashTypes, complexity]
	);

	const { fields, handleFieldChange, handleFormSubmit, errors } =
		useForm<WorkInfoFormType>({
			defaultValues: initialValues,
			submitHandler,
			validationSchema,
		});

	return (
		<S.NewWorkForm onSubmit={handleFormSubmit}>
			<Input
				onChange={handleFieldChange('title')}
				value={fields.title}
				errorText={errors.title}
				placeholder={LABELS.title}
				label={isEditForm ? LABELS.title : ''}
			/>
			<TextArea
				onChange={handleFieldChange('description')}
				value={fields.description}
				errorText={errors.description}
				placeholder={LABELS.description}
				label={isEditForm ? LABELS.description : ''}
			/>
			<WorkTrashTypesSelector
				trashTypes={trashTypes}
				setTrashTypes={setTrashTypes}
			/>
			<WorkComplexitySelector
				complexity={complexity}
				setComplexity={setComplexity}
			/>
			<WorkImageAttachments
				attachments={attachments}
				setAttachments={setAttachments}
			/>
			<S.SubmitButton variant={isEditForm ? 'positive' : 'primary'}>
				{isEditForm ? EDIT_WORK_BUTTON_LABEL : CREATE_WORK_BUTTON_LABEL}
			</S.SubmitButton>
		</S.NewWorkForm>
	);
};
