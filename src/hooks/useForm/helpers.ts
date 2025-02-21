import { ZodError } from 'zod';

export type Form = {
	[field: string]: string;
};

const getErrorsObject = <T extends Form>(zodError: ZodError<T>): Partial<T> => {
	const errorsObject: Form = {};
	for (const { path, message } of zodError.errors) {
		errorsObject[path[0]] = message;
	}
	return errorsObject as Partial<T>;
};

export const helpers = {
	getErrorsObject,
};
