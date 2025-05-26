import { AdminPanelFieldDescriptions } from './AdminPanelFieldDescriptions';
import { AdminPanelFields } from './AdminPanelFields';
import * as S from './styled';

const AdminPanelSection = () => {
	return (
		<S.AdminPanelWrapper>
			<AdminPanelFields />
			<AdminPanelFieldDescriptions />
		</S.AdminPanelWrapper>
	);
};

export default AdminPanelSection;
