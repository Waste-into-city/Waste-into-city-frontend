import { AccountSettingsForm } from './AccountSettingsForm';
import { AccountSettingsOptions } from './AccountSettingsOptions';
import { Leaderboard } from './Leaderboard';

const UserAccountSection = () => {
	return (
		<div>
			<AccountSettingsForm />
			<AccountSettingsOptions />
			<Leaderboard />
		</div>
	);
};

export default UserAccountSection;
