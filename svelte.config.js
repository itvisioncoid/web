import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import preprocess from 'svelte-preprocess';
// import autoprefixer from 'autoprefixer';
// import * as path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		// preprocess({
		// 	postcss: true
		// }),
		vitePreprocess()
	],

	kit: {
		adapter: adapter(),
		alias: {
			'$src/*': 'src/*'
		}
	}
};

export default config;
