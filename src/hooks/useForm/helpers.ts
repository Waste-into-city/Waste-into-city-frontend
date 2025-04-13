import { ZodError } from 'zod';

export type Form = {
	[field: string]: string;
};

export type FormError<T extends Form> = Partial<T> & {
	global?: string;
};

const getErrorsObject = <T extends Form>(
	zodError: ZodError<T>
): FormError<T> => {
	const errorsObject: Form = {};
	for (const { path, message } of zodError.errors) {
		errorsObject[path[0]] = message;
	}
	return errorsObject as FormError<T>;
};

export const helpers = {
	getErrorsObject,
};
