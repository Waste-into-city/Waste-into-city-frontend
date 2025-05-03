const commonTheme: ICommonTheme = {
	primary: '#3bcc66',
	positive: '#3bcc66',
	negative: '#fa5252',
	warning: '#f0ca35',
	work: '#a37150',
	primaryContrast: '#eee',
	primaryHover: '#299148',
	backgroundBlur: '#00000050',
	white: '#fff',
	hexLabelOpacity: '50',

	iconPrimary:
		'invert(67%) sepia(74%) saturate(450%) hue-rotate(81deg) brightness(89%) contrast(85%)',
	iconPositive:
		'invert(67%) sepia(74%) saturate(450%) hue-rotate(81deg) brightness(89%) contrast(85%)',
	iconWarning:
		'invert(83%) sepia(84%) saturate(1462%) hue-rotate(327deg) brightness(98%) contrast(92%)',
	iconNegative:
		'invert(43%) sepia(49%) saturate(5532%) hue-rotate(336deg) brightness(120%) contrast(95%)',
	iconWork:
		'invert(48%) sepia(46%) saturate(418%) hue-rotate(341deg) brightness(89%) contrast(90%)',
	iconPrimaryContrast:
		'invert(99%) sepia(5%) saturate(358%) hue-rotate(349deg) brightness(115%) contrast(87%)',
	iconWhite: 'invert(1)',
};

export const lightTheme: IColoredTheme = {
	colors: {
		background: '#fff',
		smallContrast: '#eee',
		fullContrast: '#000',
		iconContrast: 'invert(0)',
		iconSmallContrast:
			' invert(98%) sepia(43%) saturate(5412%) hue-rotate(184deg) brightness(126%) contrast(87%)',

		...commonTheme,
	},
};

export const darkTheme: IColoredTheme = {
	colors: {
		background: '#333',
		smallContrast: '#444',
		fullContrast: '#eee',
		iconContrast: 'invert(1)',
		iconSmallContrast:
			'invert(22%) sepia(0%) saturate(9%) hue-rotate(172deg) brightness(98%) contrast(82%)',

		...commonTheme,
	},
};

interface ICommonTheme {
	primary: string;
	positive: string;
	negative: string;
	warning: string;
	work: string;
	primaryContrast: string;
	primaryHover: string;
	backgroundBlur: string;
	white: string;
	hexLabelOpacity: string;

	iconPrimary: string;
	iconPositive: string;
	iconWarning: string;
	iconNegative: string;
	iconWork: string;
	iconPrimaryContrast: string;
	iconWhite: string;
}

interface ISeparateTheme {
	background: string;
	smallContrast: string;
	fullContrast: string;

	iconContrast: string;
	iconSmallContrast: string;
}

export interface IColoredTheme {
	colors: ICommonTheme & ISeparateTheme;
}
