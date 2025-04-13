export type RegistrationForm = Record<
	'name' | 'email' | 'password' | 'confirmPassword',
	string
>;

const PLACEHOLDERS: RegistrationForm = {
	name: 'Name',
	email: 'E-Mail',
	password: 'Password',
	confirmPassword: 'Confirm password',
};

const defaultValues: RegistrationForm = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const config = {
	defaultValues,
	LOG_IN_LINK: 'Log in now!',
	LOG_IN_QUESTION: 'Already have an account?',
	NOT_MATCHING_PASSWORDS_MESSAGE: 'Password must match!',
	PLACEHOLDERS,
	REGISTER_BUTTON_LABEL: 'Register',
	REGISTRATION_FORM_HEADING: 'Start your journey',
};
