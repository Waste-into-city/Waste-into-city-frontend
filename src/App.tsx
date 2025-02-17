import {
	VectorCustomizationItem,
	YMapLocationRequest,
} from '@yandex/ymaps3-types';
import {
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
} from 'ymap3-components';

const defaultLocation: YMapLocationRequest = {
	center: [27.5947648, 53.9108842],
	zoom: 18,
};

const test: VectorCustomizationItem = {
	tags: {
		all: ['poi'],
	},
	stylers: {
		visibility: 'off',
	},
};

export const App = () => {
	return (
		<div style={{ width: '100%', height: '100vh' }}>
			<YMap location={defaultLocation}>
				<YMapDefaultSchemeLayer customization={[test]} theme='dark' />
				<YMapDefaultFeaturesLayer />
			</YMap>
		</div>
	);
};
