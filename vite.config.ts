import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vitest/config';
import { imagetools } from "vite-imagetools";

const config: UserConfig = {
	logLevel: 'info',
	
	build: {
		minify: true,
	},
	
	plugins: [
		imagetools(),
		sveltekit()
	],
	
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;