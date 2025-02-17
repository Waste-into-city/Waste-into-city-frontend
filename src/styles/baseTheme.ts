export const baseTheme: IBaseTheme = {
	borderRadius: {
		circle: '50%',
		large: '15px',
		round: '5px',
	},
	borders: {
		small: '2px solid',
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
		fullScreen: '100vh',
	},
	indent: {
		inputIconPadding: '50px',
		large: '25px',
		medium: '15px',
		scrollbar: '4px',
		small: '10px',
	},
	media: {
		laptop: '(max-width: 1024px)',
		phone: '(max-width: 425px)',
		smallPhone: '(max-width: 350px)',
		tablet: '(max-width: 768px)',
	},
	sizes: {
		loader: '48px',
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
	},
	widths: {
		full: '100%',
		scrollbar: '13px',
	},
	zIndexes: {
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
		fullScreen: string;
	};
	indent: {
		inputIconPadding: string;
		large: string;
		medium: string;
		scrollbar: string;
		small: string;
	};
	media: {
		laptop: string;
		phone: string;
		smallPhone: string;
		tablet: string;
	};
	sizes: {
		loader: string;
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
	};
	widths: {
		full: string;
		scrollbar: string;
	};
	zIndexes: {
		front: string;
		middle: string;
	};
}
