import styled, { css } from 'styled-components';

export const PasswordInputContainer = styled.div`
	${({ theme }) => css`
		position: relative;
		width: fit-content;

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
	`}
`;
