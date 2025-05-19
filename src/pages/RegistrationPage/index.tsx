import { useNavigate } from 'react-router-dom';

import logoIcon from '@/assets/icons/svg/recycle_logo.svg';
import backgroundImage from '@/assets/images/jpg/city.jpeg';
import { ROUTES } from '@/constants/routes';
import { useForm } from '@/hooks/useForm';
import { registerUser } from '@/queries/registerUser';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';

import { config, RegistrationForm } from './config';
import { helpers } from './helpers';
import * as S from './styled';

const { RegistrationSchema } = helpers;

const {
	defaultValues,
	ALTERNATIVE_TEXT,
	LOG_IN_LINK,
	LOG_IN_QUESTION,
	PLACEHOLDERS,
	REGISTER_BUTTON_LABEL,
	REGISTRATION_FORM_HEADING,
	START_EXPLORING_LINK,
	SUCCESSFUL_REGISTRATION_MESSAGE,
} = config;

export const RegistrationPage = () => {
	const { appendNotification } = useNotifications();
	const navigate = useNavigate();

	const {
		errors,
		handleFieldChange,
		handleFormSubmit,
		fields: { name, email, password, confirmPassword },
		isLoading,
	} = useForm<RegistrationForm>({
		defaultValues,
		submitHandler: async (credentials) => {
			await registerUser(credentials);
			appendNotification(
				NotificationTypes.Success,
				SUCCESSFUL_REGISTRATION_MESSAGE
			);
			navigate(ROUTES.LOGIN);
		},
		validationSchema: RegistrationSchema,
	});

	return (
		<S.Main>
			<S.BackgroundImage src={backgroundImage} />
			<S.FormContainer>
				<S.Form onSubmit={handleFormSubmit}>
					<S.LogoIcon src={logoIcon} />
					<h1>{REGISTRATION_FORM_HEADING}</h1>

					<S.TextField
						placeholder={PLACEHOLDERS.name}
						onChange={handleFieldChange('name')}
						value={name}
						errorText={errors.name}
					/>

					<S.TextField
						placeholder={PLACEHOLDERS.email}
						onChange={handleFieldChange('email')}
						value={email}
						errorText={errors.email}
					/>

					<S.PasswordField
						placeholder={PLACEHOLDERS.password}
						onChange={handleFieldChange('password')}
						value={password}
						errorText={errors.password}
					/>

					<S.PasswordField
						placeholder={PLACEHOLDERS.confirmPassword}
						onChange={handleFieldChange('confirmPassword')}
						value={confirmPassword}
						errorText={errors.confirmPassword}
					/>

					<S.RegisterButton variant='primary' disabled={isLoading}>
						{isLoading ? <S.Loader /> : REGISTER_BUTTON_LABEL}
					</S.RegisterButton>

					<S.LoginLink>
						{LOG_IN_QUESTION}{' '}
						<a href={ROUTES.LOGIN}>{LOG_IN_LINK}</a>
						{ALTERNATIVE_TEXT}
						<a href={ROUTES.MAIN}>{START_EXPLORING_LINK}</a>
					</S.LoginLink>
				</S.Form>
			</S.FormContainer>
		</S.Main>
	);
};
