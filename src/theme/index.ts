
declare module 'styled-components' {
	export interface DefaultTheme extends HarnsTheme { }
}

export type HarnsTheme = {
	colors: {
		primary: string;
		secondary: string;
		success: string;
		warning: string;
		danger: string;
		sidebar: string;
		background: string;
		text: string;
		textSecondary: string;
	};
};

export const theme: HarnsTheme = {
	colors: {
		primary: 'black',
		secondary: '#7B61FF',
		success: '#00B42A',
		warning: '#FF7D00',
		danger: '#F53F3F',
		sidebar: '#fafafa',
		background: '#F2F3F5',
		text: 'black',
		textSecondary: '#4E5969',
	},
};  