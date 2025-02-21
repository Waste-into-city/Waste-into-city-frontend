import { ChangeEvent, FormEvent, useState } from 'react';

import { ZodError, ZodSchema } from 'zod';

import { Form, helpers } from './helpers';

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
	const [errors, setErrors] = useState<Partial<T>>({});
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
		} catch (e: unknown) {
			const errorsObject = getErrorsObject(e as ZodError);
			setErrors(errorsObject);
		} finally {
			formEvent.preventDefault();
		}
	};

	return { errors, fields, handleFieldChange, handleFormSubmit, isLoading };
};
