import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useUserLogs } from '@/store/user/useUserLogs';
import { UserRoles } from '@/types/userRoles';

import { OPTION_LABELS } from './constants';
import * as S from './styled';
import { ThemeSwitch } from './ThemeSwitch';

export const AccountSettingsOptions = () => {
	const {
		logOut,
		logs: { highRoleName },
	} = useUserLogs();
	const navigate = useNavigate();

	const handleAboutUsButtonClick = () => {
		window.open(ROUTES.ABOUT_US);
	};

	const handleAdminPanelOptionClick = () => {
		navigate(ROUTES.ADMIN_PANEL);
	};

	return (
		<S.OptionsList>
			<S.OptionItem>
				<ThemeSwitch />
			</S.OptionItem>
			<S.OptionItem onClick={handleAboutUsButtonClick}>
				<S.OptionButton>{OPTION_LABELS.aboutUs}</S.OptionButton>
			</S.OptionItem>
			{highRoleName === UserRoles.Admin && (
				<S.OptionItem onClick={handleAdminPanelOptionClick}>
					<S.OptionButton>{OPTION_LABELS.adminPanel}</S.OptionButton>
				</S.OptionItem>
			)}
			<S.OptionItem>
				<S.OptionButton onClick={logOut} variant='negative'>
					{OPTION_LABELS.logOut}
				</S.OptionButton>
			</S.OptionItem>
		</S.OptionsList>
	);
};
