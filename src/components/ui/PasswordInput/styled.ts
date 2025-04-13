import styled, { css } from 'styled-components';

import { Input } from '../Input';

export const PasswordInputContainer = styled.div`
	${({ theme }) => css`
		position: relative;

		input {
			padding-right: ${theme.indent.inputIconPadding};
		}
	`}
`;

export const SwitchTypeButton = styled.button<{ $isShowingPassword: boolean }>`
	${({ theme, $isShowingPassword }) => css`
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: ${theme.indent.medium};
		border: none;
		background: none;
		cursor: pointer;

		img {
			filter: ${$isShowingPassword
				? theme.colors.iconContrast
				: theme.colors.iconSmallContrast};
		}

		&:focus-visible {
			filter: ${theme.colors.iconPositive};
			outline: none;
		}
	`}
`;

export const InputField = styled(Input)`
	${({ theme }) => css`
		width: ${theme.widths.full};
	`}
`;
