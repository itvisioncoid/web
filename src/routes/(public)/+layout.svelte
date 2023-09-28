<script lang="ts">
	import { base } from '$app/paths';
	import Footer from '$src/lib/components/Footer.svelte';

	let isDark: boolean;

	const menuLists = [
		{ text: 'Product', url: `${base}/product` },
		{ text: 'Services', url: `${base}/services` },
		{ text: 'Contact Us', url: `${base}/contact` },
		{ text: 'About Us', url: `${base}/about` }
	];

	function toggleDarkMode() {
		const html: HTMLHtmlElement | null = document.querySelector('html');
		if (html?.getAttribute('data-theme') == 'dark') {
			html.setAttribute('data-theme', 'light');
			isDark = false;
		} else {
			html && html.setAttribute('data-theme', 'dark');
			isDark = true;
		}
	}
</script>

<svelte:head>
	<title>Home - IT Vision</title>
</svelte:head>

<div class="nav-container">
	<nav class="container">
		<ul>
			<li>
				<a href={base ? `${base}/` : '/'} data-href={base ? `${base}/` : '/'}>
					<img src="./logo.png" alt="Company logo" aria-label="Company logo" class="w-36" />
				</a>
			</li>
		</ul>
		<ul class="hidden-sm-only">
			{#each menuLists as menu}
				<li>
					<a href={menu.url}>{menu.text}</a>
				</li>
			{/each}
			<li>
				<button
					on:click={toggleDarkMode}
					class="outline {isDark
						? 'contrast'
						: 'secondary'} py-1 px-2 outline-0 outline-transparent border-none active:border-none active:outline-none active:shadow-none focus:border-none focus:outline-none focus:shadow-none">
					<span class="fa-solid fa-circle-half-stroke" />
				</button>
			</li>
		</ul>
		<ul class="show-sm-only">
			<li role="list" dir="rtl">
				<button class="outline" aria-label="mobilenav-toggler" aria-haspopup="listbox">
					<svg
						aria-hidden="true"
						focusable="false"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						height="25px"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round">
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				</button>
				<ul role="listbox">
					{#each menuLists as menu}
						<li>
							<a href={menu.url}>{menu.text}</a>
						</li>
					{/each}
					<li>
						<button
							on:click={toggleDarkMode}
							class="outline secondary py-1 px-2 outline-0 outline-transparent border-none active:border-none active:outline-none active:shadow-none focus:border-none focus:outline-none">
							<span class="fa-solid fa-circle-half-stroke" />
						</button>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</div>

<slot />
<Footer />

<style lang="scss">
	$breakpoints: (
		xs: 0,
		sm: 576px,
		md: 768px,
		lg: 992px,
		xl: 1200px
	);
	.hidden-sm-only {
		@media (max-width: map-get($breakpoints, 'md')) {
			display: none;
		}
	}
	.show-sm-only {
		ul {
			width: 50vw;
			a {
				padding: 1rem;
			}
		}
		@media (min-width: map-get($breakpoints, 'sm')) {
			display: none;
		}
	}

	button[aria-label='mobilenav-toggler'] {
		--form-element-spacing-vertical: 0.2rem;
		--form-element-spacing-horizontal: 0.6rem;
		outline-style: none;

		&:focus + ul[role='listbox'],
		&:active + ul[role='listbox'],
		&:focus-within + ul[role='listbox'] {
			display: flex;
		}
	}
</style>
