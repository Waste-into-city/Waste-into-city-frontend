import { MouseEventHandler, Suspense } from 'react';
import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom';

import closeIcon from '@/assets/icons/svg/cross_icon.svg';
import { ControlsBar } from '@/components/common/ControlsBar';
import { MainMap } from '@/components/map/MainMap';
import { ROUTES } from '@/constants/routes';
import { useMapItemLocation } from '@/store/location/useMapItemLocation';
import { useSelectedWorksGroup } from '@/store/worksGroup/useSelectedWorksGroup';

import { ProtectedRoute } from '../ProtectedRoute';

import { config } from './config';
import * as S from './styled';

const { ROUTE_SECTIONS } = config;
const CLOSE_ICON_ALT = 'Close';

const Sections = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { clearWorksGroup } = useSelectedWorksGroup();
	const { location, setLocation, isSelected } = useMapItemLocation();

	const handleSectionClose = () => {
		if (pathname === ROUTES.WORKS_GROUP) {
			clearWorksGroup();
		}

		if (location) {
			setLocation(null);
		}

		navigate(ROUTES.MAIN);
	};

	const handleInSectionClick: MouseEventHandler = (event) => {
		event.stopPropagation();
	};

	return (
		<S.SectionBlur
			onClick={handleSectionClose}
			$isSectionHidden={isSelected}
		>
			<S.InteractionSection onClick={handleInSectionClick}>
				<S.SectionContentContainer>
					<Routes>
						{ROUTE_SECTIONS.map(
							({ route, section: LazySection, isAuthRoute }) => (
								<Route
									path={route}
									key={route}
									element={
										isAuthRoute ? (
											<ProtectedRoute isAuthRoute={true}>
												<Suspense
													fallback={
														<S.SectionLoader />
													}
												>
													<LazySection />
												</Suspense>
											</ProtectedRoute>
										) : (
											<Suspense
												fallback={<S.SectionLoader />}
											>
												<LazySection />
											</Suspense>
										)
									}
								/>
							)
						)}
						<Route
							path={ROUTES.ANY_SECTION}
							element={<Navigate to={ROUTES.MAIN} />}
						/>
					</Routes>
				</S.SectionContentContainer>
				<S.CloseSectionButton
					variant='common'
					onClick={handleSectionClose}
				>
					<img src={closeIcon} alt={CLOSE_ICON_ALT} />
				</S.CloseSectionButton>
			</S.InteractionSection>
		</S.SectionBlur>
	);
};

export const SectionsRoutes = () => {
	return (
		<>
			<Routes>
				<Route path={ROUTES.MAIN} element={null} />
				<Route path={ROUTES.ANY_SECTION} element={<Sections />} />
			</Routes>
			<MainMap />
			<ControlsBar />
		</>
	);
};
