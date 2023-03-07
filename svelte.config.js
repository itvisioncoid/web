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
		preprocess({
			postcss: true
		}),
		vitePreprocess(),
	],

	kit: {
		
		adapter: adapter({
			fallback: 'index.html',
			strict: false
		}),

		alias: {
			'$src/*': 'src/*'
		}
	}
};

export default config;
