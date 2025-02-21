export type LoginForm = Record<'email' | 'password', string>;
type FieldErrors = {
	[field in keyof LoginForm]: {
		min: {
			value: number;
			message: string;
		};
		max: {
			value: number;
			message: string;
		};
		required?: {
			value: number;
			message: string;
		};
		invalid?: string;
	};
};

const PLACEHOLDERS: Record<keyof LoginForm, string> = {
	email: 'E-Mail',
	password: 'Password',
};

const defaultFields: Record<keyof LoginForm, string> = {
	email: '',
	password: '',
};

const FIELD_ERRORS: FieldErrors = {
	email: {
		min: {
			value: 6,
			message: 'Minimal e-mail length is 6 symbols!',
		},
		max: {
			value: 128,
			message: 'Maximum e-mail length is 128 symbols!',
		},
		invalid: 'Provided e-mail is invalid!',
	},
	password: {
		min: {
			value: 8,
			message: 'Minimal password length is 8 symbols!',
		},
		max: {
			value: 128,
			message: 'Maximum password length is 128 symbols!',
		},
	},
};

export const config = {
	BACKGROUND_ALT: 'Forest Image',
	FIELD_ERRORS,
	LOGO_ALT: 'Recycle Logo',
	LOG_IN_BUTTON_LABEL: 'Log In',
	LOG_IN_HEADING: 'Log in to your account',
	PLACEHOLDERS,
	REGISTER_LINK: 'Register now!',
	REGISTER_QUESTION: "Don't have an account?",
	defaultFields,
};
