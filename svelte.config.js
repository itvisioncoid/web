import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// import autoprefixer from 'autoprefixer';
// import * as path from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/web'
		},
		alias: {
			'$src/*': 'src/*'
		}
	}
};

export default config;
