import { MouseEventHandler, useCallback, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { useForm } from '@/hooks/useForm';
import { useMapItemLocation } from '@/store/location/useMapItemLocation';
import { TrashTypes } from '@/types/trashTypes';

import LoaderWrapper from '../LoaderWrapper';
import { WorkImageAttachments } from '../WorkImageAttachments';
import { WorkImageAttachment } from '../WorkImageAttachments/types';

import {
	CREATE_WORK_BUTTON_LABEL,
	EDIT_WORK_BUTTON_LABEL,
	LABELS,
	NO_LOCATION_ERROR,
	NO_TRASH_TYPES_ERROR,
	SET_LOCATION_BUTTON_LABEL,
	UPDATE_LOCATION_BUTTON_LABEL,
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
	const { selectItem, location } = useMapItemLocation();

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

			if (!location) {
				throw new Error(NO_LOCATION_ERROR);
			}

			await onSubmit({
				title,
				description,
				attachments,
				trashTypes: [...trashTypes],
				complexity,
				location: {
					lat: location[1],
					lng: location[0],
				},
			});
		},
		[onSubmit, attachments, trashTypes, complexity, location]
	);

	const { fields, handleFieldChange, handleFormSubmit, errors, isLoading } =
		useForm<WorkInfoFormType>({
			defaultValues: initialValues,
			submitHandler,
			validationSchema,
		});

	const handleLocationButtonClick: MouseEventHandler = (mouseEvent) => {
		mouseEvent.preventDefault();
		selectItem();
	};

	return (
		<LoaderWrapper isLoaderVisible={isLoading}>
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
				<S.BottomButtons>
					<Button variant={isEditForm ? 'positive' : 'primary'}>
						{isEditForm
							? EDIT_WORK_BUTTON_LABEL
							: CREATE_WORK_BUTTON_LABEL}
					</Button>
					<Button onClick={handleLocationButtonClick}>
						{location
							? UPDATE_LOCATION_BUTTON_LABEL
							: SET_LOCATION_BUTTON_LABEL}
					</Button>
				</S.BottomButtons>
			</S.NewWorkForm>
		</LoaderWrapper>
	);
};
