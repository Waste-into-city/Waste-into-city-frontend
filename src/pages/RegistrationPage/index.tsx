import { registerUser } from '@/api/registerUser';
import logoIcon from '@/assets/icons/svg/recycle_logo.svg';
import backgroundImage from '@/assets/images/jpg/city.jpeg';
import { ROUTES } from '@/constants/routes';
import { useForm } from '@/hooks/useForm';

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
						isError={Boolean(errors.name)}
					/>
					<S.ErrorMessage>{errors.name}</S.ErrorMessage>

					<S.TextField
						placeholder={PLACEHOLDERS.email}
						onChange={handleFieldChange('email')}
						value={email}
						isError={Boolean(errors.email)}
					/>
					<S.ErrorMessage>{errors.email}</S.ErrorMessage>

					<S.PasswordField
						placeholder={PLACEHOLDERS.password}
						onChange={handleFieldChange('password')}
						value={password}
						isError={Boolean(errors.password)}
					/>
					<S.ErrorMessage>{errors.password}</S.ErrorMessage>

					<S.PasswordField
						placeholder={PLACEHOLDERS.confirmPassword}
						onChange={handleFieldChange('confirmPassword')}
						value={confirmPassword}
						isError={Boolean(errors.confirmPassword)}
					/>
					<S.ErrorMessage>{errors.confirmPassword}</S.ErrorMessage>

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
