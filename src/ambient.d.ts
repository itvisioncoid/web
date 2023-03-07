declare module "*&picture" {

	const out: {
		fallback: {
			src: string;
			w: number;
			h: number;
		},
		sources: Record<string, Record<string, string>[]>
	}
	export = out;
}

declare module "*&url" {
	const out: string;

	export = out;
}