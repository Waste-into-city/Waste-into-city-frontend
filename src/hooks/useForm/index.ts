import { ChangeEvent, FormEvent, useState } from 'react';

import { ZodError, ZodSchema } from 'zod';

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

	const handleFieldChange =
		(field: keyof T) => (changeEvent: ChangeEvent<HTMLInputElement>) => {
			setFields((prevFields) => ({
				...prevFields,
				[field]: changeEvent.target.value,
			}));
			setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
		};

	const handleFormSubmit = (formEvent: FormEvent) => {
		try {
			const parsedFields: T = validationSchema.parse(fields);
			setIsLoading(true);
			submitHandler(parsedFields).finally(() => setIsLoading(false));
			setErrors({});
		} catch (e: unknown) {
			const errorsObject: FormError<T> = getErrorsObject(e as ZodError);
			setErrors(errorsObject);
		} finally {
			formEvent.preventDefault();
		}
	};

	return { errors, fields, handleFieldChange, handleFormSubmit, isLoading };
};
