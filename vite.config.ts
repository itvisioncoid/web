import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
// import { defineConfig } from 'vitest/config';

const config: UserConfig = {
	logLevel: 'info',

	build: {
		minify: true
	},

	plugins: [imagetools(), sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
