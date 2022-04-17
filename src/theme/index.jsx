import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

export const colors = {
	bg: {
		light: '',
		dark: '#E5E5E5',
	},
};

export default extendTheme({
	config,
	colors,
});
