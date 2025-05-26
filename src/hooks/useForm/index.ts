import {
	ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';

import { ZodError, ZodSchema } from 'zod';

import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import { Form, FormError, helpers } from './helpers';

type Params<T extends Form> = {
	defaultValues: T;
	validationSchema: ZodSchema<T>;
	submitHandler: (fields: T) => Promise<void>;
};

const { getErrorsObject } = helpers;

export const useForm = <T extends Form>({
	defaultValues,
	validationSchema,
	submitHandler,
}: Params<T>) => {
	const [fields, setFields] = useState<T>(defaultValues);
	const [errors, setErrors] = useState<FormError<T>>({});
	const [isLoading, setIsLoading] = useState(false);
	const { appendNotification } = useNotifications();

	const handleFieldChange = useCallback(
		(field: keyof T) =>
			(
				changeEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				setFields((prevFields) => ({
					...prevFields,
					[field]: changeEvent.target.value,
				}));
				setErrors((prevErrors) => ({
					...prevErrors,
					[field]: '',
					global: '',
				}));
			},
		[setFields, setErrors]
	);

	const resetFields = useCallback(() => {
		setFields(defaultValues);
		setErrors({});
	}, [setFields, defaultValues]);

	const handleFormSubmit = useCallback(
		(formEvent: FormEvent) => {
			try {
				const parsedFields: T = validationSchema.parse(fields);
				setIsLoading(true);
				submitHandler(parsedFields)
					.then(() => {
						setErrors({});
						resetFields();
					})
					.catch(({ message }: Error) =>
						setErrors((prevErrors) => ({
							...prevErrors,
							global: message,
						}))
					)
					.finally(() => setIsLoading(false));
			} catch (e: unknown) {
				const errorsObject: FormError<T> = getErrorsObject(
					e as ZodError
				);
				setErrors(errorsObject);
			} finally {
				formEvent.preventDefault();
			}
		},
		[
			setIsLoading,
			setErrors,
			fields,
			resetFields,
			submitHandler,
			validationSchema,
		]
	);

	const areFieldsChanged = useMemo(() => {
		for (const field in fields) {
			if (fields[field] !== defaultValues[field]) {
				return true;
			}
		}
		return false;
	}, [fields, defaultValues]);

	useEffect(() => {
		if (errors.global) {
			appendNotification(NotificationTypes.Error, errors.global);
		}
	}, [errors, appendNotification]);

	useEffect(() => {
		setFields(defaultValues);
	}, [defaultValues]);

	return {
		errors,
		fields,
		handleFieldChange,
		handleFormSubmit,
		isLoading,
		resetFields,
		areFieldsChanged,
	};
};
