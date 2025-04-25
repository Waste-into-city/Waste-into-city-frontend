import {
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
} from 'ymap3-components';

import { useColoredTheme } from '@/store/theme/useColoredTheme';

import { config } from './config';
import * as S from './styled';

const { defaultLocation, mapCustomization } = config;

export const MainMap = () => {
	const { theme } = useColoredTheme();

	return (
		<S.MapContainer>
			<YMap location={defaultLocation}>
				<YMapDefaultSchemeLayer
					customization={mapCustomization}
					theme={theme}
				/>
				<YMapDefaultFeaturesLayer />
			</YMap>
		</S.MapContainer>
	);
};
