import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useUserLogs } from '@/store/user/useUserLogs';

import { OPTION_LABELS } from './constants';
import * as S from './styled';
import { ThemeSwitch } from './ThemeSwitch';

export const AccountSettingsOptions = () => {
	const { logOut } = useUserLogs();
	const navigate = useNavigate();

	const handleAdminPanelOptionClick = () => {
		navigate(ROUTES.ADMIN_PANEL);
	};

	return (
		<S.OptionsList>
			<S.OptionItem>
				<ThemeSwitch />
			</S.OptionItem>
			<S.OptionItem>
				<S.OptionButton>{OPTION_LABELS.aboutUs}</S.OptionButton>
			</S.OptionItem>
			<S.OptionItem onClick={handleAdminPanelOptionClick}>
				<S.OptionButton>{OPTION_LABELS.adminPanel}</S.OptionButton>
			</S.OptionItem>
			<S.OptionItem>
				<S.OptionButton onClick={logOut} variant='negative'>
					{OPTION_LABELS.logOut}
				</S.OptionButton>
			</S.OptionItem>
		</S.OptionsList>
	);
};
