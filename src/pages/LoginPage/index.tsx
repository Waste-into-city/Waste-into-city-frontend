import logoIcon from '@/assets/icons/svg/recycle_logo.svg';
import woodsImage from '@/assets/images/jpg/city.jpeg';
import { ROUTES } from '@/constants/routes';
import { useForm } from '@/hooks/useForm';
import { useUserLogs } from '@/store/user/useUserLogs';

import { config, LoginForm } from './config';
import { helpers } from './helpers';
import * as S from './styled';

const { LoginFormSchema } = helpers;

const {
	ALTERNATIVE_TEXT,
	BACKGROUND_ALT,
	LOGO_ALT,
	LOG_IN_BUTTON_LABEL,
	LOG_IN_HEADING,
	PLACEHOLDERS,
	REGISTER_LINK,
	REGISTER_QUESTION,
	START_EXPLORING_LINK,
	defaultFields,
} = config;

export const LoginPage = () => {
	const { logIn } = useUserLogs();

	const {
		fields: { email, password },
		errors,
		handleFieldChange,
		handleFormSubmit,
		isLoading,
	} = useForm<LoginForm>({
		defaultValues: defaultFields,
		submitHandler: logIn,
		validationSchema: LoginFormSchema,
	});

	return (
		<S.Main>
			<S.BackgroundImage src={woodsImage} alt={BACKGROUND_ALT} />
			<S.Form onSubmit={handleFormSubmit}>
				<S.LogoIcon src={logoIcon} alt={LOGO_ALT} />
				<h1>{LOG_IN_HEADING}</h1>
				<S.EmailField
					placeholder={PLACEHOLDERS.email}
					value={email}
					errorText={errors.email}
					onChange={handleFieldChange('email')}
				/>
				<S.PasswordField
					placeholder={PLACEHOLDERS.password}
					value={password}
					errorText={errors.password}
					onChange={handleFieldChange('password')}
				/>

				<S.LogInButton variant='primary' disabled={isLoading}>
					{isLoading ? <S.ButtonLoader /> : LOG_IN_BUTTON_LABEL}
				</S.LogInButton>

				<S.RegisterLink>
					{REGISTER_QUESTION}{' '}
					<a href={ROUTES.REGISTRATION}>{REGISTER_LINK}</a>
					{ALTERNATIVE_TEXT}
					<a href={ROUTES.MAIN}>{START_EXPLORING_LINK}</a>
				</S.RegisterLink>
			</S.Form>
		</S.Main>
	);
};
