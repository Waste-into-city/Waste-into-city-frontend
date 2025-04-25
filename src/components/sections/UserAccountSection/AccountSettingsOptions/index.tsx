import { useUserLogs } from '@/store/user/useUserLogs';

import { OPTION_LABELS } from './constants';
import * as S from './styled';
import { ThemeSwitch } from './ThemeSwitch';

export const AccountSettingsOptions = () => {
	const { logOut } = useUserLogs();

	return (
		<S.OptionsList>
			<S.OptionItem>
				<ThemeSwitch />
			</S.OptionItem>
			<S.OptionItem>
				<S.OptionButton>{OPTION_LABELS.aboutUs}</S.OptionButton>
			</S.OptionItem>
			<S.OptionItem>
				<S.OptionButton onClick={logOut} variant='negative'>
					{OPTION_LABELS.logOut}
				</S.OptionButton>
			</S.OptionItem>
		</S.OptionsList>
	);
};
