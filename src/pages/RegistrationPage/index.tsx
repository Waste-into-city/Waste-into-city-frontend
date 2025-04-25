import logoIcon from '@/assets/icons/svg/recycle_logo.svg';
import backgroundImage from '@/assets/images/jpg/city.jpeg';
import { ROUTES } from '@/constants/routes';
import { useForm } from '@/hooks/useForm';
import { registerUser } from '@/queries/registerUser';

import { config, RegistrationForm } from './config';
import { helpers } from './helpers';
import * as S from './styled';

const { RegistrationSchema } = helpers;

const {
	defaultValues,
	LOG_IN_LINK,
	LOG_IN_QUESTION,
	PLACEHOLDERS,
	REGISTER_BUTTON_LABEL,
	REGISTRATION_FORM_HEADING,
} = config;

export const RegistrationPage = () => {
	const {
		errors,
		handleFieldChange,
		handleFormSubmit,
		fields: { name, email, password, confirmPassword },
		isLoading,
	} = useForm<RegistrationForm>({
		defaultValues,
		submitHandler: registerUser,
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
					<S.ErrorMessage>{errors.global}</S.ErrorMessage>

					<S.LoginLink>
						{LOG_IN_QUESTION}{' '}
						<a href={ROUTES.LOGIN}>{LOG_IN_LINK}</a>
					</S.LoginLink>
				</S.Form>
			</S.FormContainer>
		</S.Main>
	);
};
