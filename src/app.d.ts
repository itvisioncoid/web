// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code: string;
		}

		interface ServiceHighlights {
			icon: string;
			image: string;
			title: string;
		}

		interface Services {
			description: string;
			icon: string;
			title: string;
		}

		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
