import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useUserLogs } from '@/store/user/useUserLogs';
import { UserRoles } from '@/types/userRoles';

export const ProtectedRoute = ({
	children,
	allowedRoles,
}: {
	children: ReactNode;
	allowedRoles: Array<UserRoles>;
}) => {
	const {
		logs: { highRoleName },
	} = useUserLogs();

	return allowedRoles?.includes(highRoleName) ? (
		children
	) : (
		<Navigate to={ROUTES.MAIN} />
	);
};
