export const baseTheme: IBaseTheme = {
	borderRadius: {
		circle: '50%',
		large: '15px',
		round: '5px',
	},
	borders: {
		small: '2px solid',
	},
	boxShadows: {
		medium: '0 0 10px 1px',
		small: '0 0 5px',
	},
	fontSizes: {
		control: '24px',
		h1: '48px',
		h2: '36px',
		h3: '28px',
		label: '16px',
		text: '18px',
	},
	heights: {
		dropdownList: '125px',
		full: '100%',
		fullScreen: '100vh',
		interactionSectionPortrait: '74%',
		logInBackgroundImage: '60%',
	},
	indent: {
		inputIconPadding: '50px',
		interactionSection: '45px',
		large: '35px',
		medium: '15px',
		scrollbar: '4px',
		small: '10px',
	},
	media: {
		landscape: '(orientation: landscape)',
		laptop: '(max-width: 1024px)',
		laptopHeight: '(max-height: 850px)',
		phone: '(max-width: 425px)',
		portrait: '(orientation: portrait)',
		smallHeight: '(max-height: 550px)',
		smallPhone: '(max-width: 350px)',
		tablet: '(max-width: 768px)',
	},
	sizes: {
		buttonLoader: '36px',
		interactionSectionMin: '70%',
		loader: '48px',
		logsFormLogo: '72px',
		nearFull: '90%',
		sectionLoader: '64px',
	},
	tops: {
		dropdownDropButton: '6px',
		dropdownList: '70px',
	},
	transforms: {
		rotateOpposite: 'rotate(180deg)',
	},
	transitions: {
		fast: '.15s linear',
		medium: '.4s',
	},
	widths: {
		full: '100%',
		interactionSection: '80%',
		logsForm: '760px',
		registrationBackgroundImage: '55%',
		scrollbar: '13px',
	},
	zIndexes: {
		blur: '4',
		front: '10',
		middle: '5',
	},
};

export interface IBaseTheme {
	borderRadius: {
		circle: string;
		large: string;
		round: string;
	};
	borders: {
		small: string;
	};
	boxShadows: {
		medium: string;
		small: string;
	};
	fontSizes: {
		control: string;
		h1: string;
		h2: string;
		h3: string;
		label: string;
		text: string;
	};
	heights: {
		dropdownList: string;
		full: string;
		fullScreen: string;
		interactionSectionPortrait: string;
		logInBackgroundImage: string;
	};
	indent: {
		inputIconPadding: string;
		interactionSection: string;
		large: string;
		medium: string;
		scrollbar: string;
		small: string;
	};
	media: {
		landscape: string;
		laptop: string;
		laptopHeight: string;
		phone: string;
		portrait: string;
		smallHeight: string;
		smallPhone: string;
		tablet: string;
	};
	sizes: {
		buttonLoader: string;
		interactionSectionMin: string;
		loader: string;
		logsFormLogo: string;
		nearFull: string;
		sectionLoader: string;
	};
	tops: {
		dropdownDropButton: string;
		dropdownList: string;
	};
	transforms: {
		rotateOpposite: string;
	};
	transitions: {
		fast: string;
		medium: string;
	};
	widths: {
		full: string;
		interactionSection: string;
		logsForm: string;
		registrationBackgroundImage: string;
		scrollbar: string;
	};
	zIndexes: {
		blur: string;
		front: string;
		middle: string;
	};
}
