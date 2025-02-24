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
		justify-content: center;

		@media ${theme.media.smallHeight} {
			align-items: flex-start;
		}
	`}
`;

export const BackgroundImage = styled.img`
	${({ theme }) => css`
		width: ${theme.widths.full};
		height: ${theme.heights.logInBackgroundImage};
		box-shadow: ${theme.boxShadows.medium};
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;

		@media ${theme.media.phone} {
			height: ${theme.heights.fullScreen};
		}
	`}
`;

export const Form = styled.form`
	${({ theme }) => css`
		width: ${theme.widths.logsForm};
		background-color: ${theme.colors.background};
		border-radius: ${theme.borderRadius.round};
		padding: ${theme.indent.large};
		z-index: ${theme.zIndexes.middle};
		box-shadow: ${theme.boxShadows.medium};
		position: relative;

		@media ${theme.media.tablet} {
			width: ${theme.widths.full};
		}

		h1 {
			color: ${theme.colors.fullContrast};
			font-size: ${theme.fontSizes.h1};
			margin-bottom: ${theme.indent.large};
			text-align: center;

			@media ${theme.media.phone} {
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

const inputCSS = css`
	${({ theme }) => css`
		width: ${theme.widths.full};
		margin: ${theme.indent.medium} 0;
	`}
`;

export const EmailField = styled(Input)`
	${inputCSS}
`;

export const PasswordField = styled(PasswordInput)`
	${inputCSS}
`;

export const LogInButton = styled(Button)`
	${inputCSS}
`;

export const ErrorMessage = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.negative};
		font-size: ${theme.fontSizes.label};
		transition: ${theme.transitions.fast};
	`}
`;

export const RegisterLink = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.fullContrast};
		font-size: ${theme.fontSizes.text};
		a {
			color: ${theme.colors.primary};
			text-decoration: none;
			cursor: pointer;

			&:hover,
			&:focus-visible {
				text-decoration: underline;
				outline: none;
			}
		}
	`}
`;

export const ButtonLoader = styled.div`
	${({ theme }) => css`
		display: inline-block;
		width: ${theme.sizes.buttonLoader};
		height: ${theme.sizes.buttonLoader};
		${loaderCSS(theme.colors.primaryContrast)}
	`}
`;
