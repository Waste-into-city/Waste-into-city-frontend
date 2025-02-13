import { YMapLocationRequest } from '@yandex/ymaps3-types';
import {
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
} from 'ymap3-components';

const defaultLocation: YMapLocationRequest = {
	center: [27.5947648, 53.9108842],
	zoom: 18,
};

export const App = () => {
	return (
		<div style={{ width: '100%', height: '100vh' }}>
			<YMap location={defaultLocation} theme="dark">
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />
			</YMap>
		</div>
	);
};
