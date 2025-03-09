import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { config } from './config';
import * as S from './styled';

const { USER_ROUTES, LOG_IN_ROUTE } = config;

// Add storage and tests
const isLoggedIn = false;

export const ControlsBar = memo(() => {
	const { pathname } = useLocation();

	if (!isLoggedIn) {
		return (
			<S.LogInLink to={LOG_IN_ROUTE.path}>
				<img src={LOG_IN_ROUTE.icon} alt={LOG_IN_ROUTE.name} />
			</S.LogInLink>
		);
	}

	return (
		<S.Navigation>
			{USER_ROUTES.map(({ name, path, icon }) => (
				<S.SectionLink
					to={path}
					key={name}
					$isSelected={pathname === path}
				>
					<img src={icon} alt={name} />
				</S.SectionLink>
			))}
		</S.Navigation>
	);
});
