import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vitest/config';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	logLevel: 'info',
	
	build: {
		minify: true,
	},
	
	plugins: [sveltekit()],
	
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;