export type LoginForm = Record<'email' | 'password', string>;

const PLACEHOLDERS: Record<keyof LoginForm, string> = {
	email: 'E-Mail',
	password: 'Password',
};

const defaultFields: Record<keyof LoginForm, string> = {
	email: '',
	password: '',
};

export const config = {
	BACKGROUND_ALT: 'Forest Image',
	LOGO_ALT: 'Recycle Logo',
	LOG_IN_BUTTON_LABEL: 'Log In',
	LOG_IN_HEADING: 'Log in to your account',
	PLACEHOLDERS,
	REGISTER_LINK: 'Register now!',
	REGISTER_QUESTION: "Don't have an account?",
	defaultFields,
};
