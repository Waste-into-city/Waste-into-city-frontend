import {
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
} from 'ymap3-components';

import { config } from './config';
import * as S from './styled';

const { defaultLocation, mapCustomization } = config;

export const MainMap = () => {
	return (
		<S.MapContainer>
			<YMap location={defaultLocation}>
				<YMapDefaultSchemeLayer
					customization={mapCustomization}
					theme='light'
				/>
				<YMapDefaultFeaturesLayer />
			</YMap>
		</S.MapContainer>
	);
};
