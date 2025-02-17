import {
	VectorCustomizationItem,
	YMapLocationRequest,
} from '@yandex/ymaps3-types';
import {
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
} from 'ymap3-components';

import profile from '@/assets/icons/svg/plus_icon.svg';
import { Button } from '@/components/ui/Button';
import { Dropdown } from '@/components/ui/Dropdown';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { Test } from '@/styles/common/loader';

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
			<Dropdown
				items={['Hello', 'World', 'Some', 'Text', 'Another', 'TesT']}
				label='Dropdown'
				placeholder='Dropdown'
			/>
			<Button variant='primary'>
				<img src={profile} />
			</Button>
			<Test />
			<Input label='Test label' placeholder='Test placeholder' />
			<PasswordInput placeholder='Password' label='Password' />
		</div>
	);
};
