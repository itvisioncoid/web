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

		interface Team {
			name: string;
			nickname: string;
			department?: string;
			picture?: string;
			quotes?: string;
			email: string;
			urls?: Array<Record<{
				icon: string,
				url: string
			}>>
		}

		interface Themes {
			preference: string;
			current: string;
		}

		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
