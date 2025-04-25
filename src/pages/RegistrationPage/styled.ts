import styled, { css } from 'styled-components';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { loaderCSS } from '@/styles/common/loader';

export const Main = styled.main`
	${({ theme }) => css`
		width: ${theme.widths.full};
		height: ${theme.heights.fullScreen};
		background-color: ${theme.colors.background};
		display: flex;
		align-items: center;

		@media ${theme.media.laptopHeight} {
			height: auto;
			align-items: flex-start;
			min-height: ${theme.heights.fullScreen};
		}

		@media ${theme.media.tablet} or ${theme.media.portrait} {
			height: auto;
			flex-direction: column;
		}
	`}
`;

export const BackgroundImage = styled.img`
	${({ theme }) => css`
		width: ${theme.widths.registrationBackgroundImage};
		box-shadow: ${theme.boxShadows.medium};
		align-self: stretch;
		object-fit: cover;

		@media ${theme.media.tablet} or ${theme.media.portrait} {
			width: ${theme.widths.full};
			height: 30vh;
		}

		@media ${theme.media.landscape} and ${theme.media.smallHeight} {
			display: none;
		}
	`}
`;

export const FormContainer = styled.section`
	${({ theme }) => css`
		padding: ${theme.indent.medium};
		flex-grow: 1;

		@media ${theme.media.laptop} {
			padding: ${theme.indent.small};
		}

		@media ${theme.media.tablet} or ${theme.media.portrait} {
			width: ${theme.widths.full};
			padding: ${theme.indent.small} ${theme.indent.medium};
		}
	`}
`;

export const Form = styled.form`
	${({ theme }) => css`
		width: ${theme.widths.full};
		padding: ${theme.indent.large};

		@media ${theme.media.laptop} {
			padding: ${theme.indent.large} ${theme.indent.small};
		}

		@media ${theme.media.tablet} {
			padding: ${theme.indent.large};
		}

		h1 {
			font-size: ${theme.fontSizes.h1};
			color: ${theme.colors.fullContrast};
			margin: 0 0 ${theme.indent.large} 0;
			text-align: center;
		}

		@media ${theme.media.phone} {
			padding: ${theme.indent.large} ${theme.indent.small};
			h1 {
				font-size: ${theme.fontSizes.h2};
			}
		}
	`}
`;

export const LogoIcon = styled.img`
	${({ theme }) => css`
		width: ${theme.sizes.logsFormLogo};
		height: ${theme.sizes.logsFormLogo};
		display: block;
		margin: 0 auto;
	`}
`;

const controlCSS = css`
	${({ theme }) => css`
		width: ${theme.widths.full};
		margin: ${theme.indent.large} 0;
	`}
`;

export const TextField = styled(Input)`
	${controlCSS}
`;

export const PasswordField = styled(PasswordInput)`
	${controlCSS}
`;

export const RegisterButton = styled(Button)`
	${controlCSS}
`;

export const LoginLink = styled.p`
	${({ theme }) => css`
		margin-top: ${theme.indent.medium};
		font-size: ${theme.fontSizes.text};
		color: ${theme.colors.fullContrast};
		text-align: center;

		a {
			color: ${theme.colors.primary};
			text-decoration: none;
			cursor: pointer;

			&:hover,
			&:focus-visible {
				text-decoration: underline;
			}
		}
	`}
`;

export const ErrorMessage = styled.p`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.label};
		color: ${theme.colors.negative};
		min-height: ${theme.fontSizes.text};
	`}
`;

export const Loader = styled.div`
	${({ theme }) => css`
		display: inline-block;
		width: ${theme.sizes.buttonLoader};
		height: ${theme.sizes.buttonLoader};
		${loaderCSS(theme.colors.primaryContrast)}
	`}
`;
