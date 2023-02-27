<script lang="ts">
	const date = new Date();
	const menuLists = [
		{ text: 'Product', url: '/product' },
		{ text: 'Services', url: '/services' },
		{ text: 'Contact Us', url: '/contact' },
		{ text: 'About Us', url: '/about' }
	];
</script>

<svelte:head>
	<title>Home - IT Vision</title>
</svelte:head>

<nav class="container">
	<ul>
		<li>
			<a href="/">
				<img src="/logo.png" alt="Company logo" aria-label="Company logo" />
			</a>
		</li>
	</ul>
	<ul class="hidden-sm-only">
		{#each menuLists as menu}
			<li>
				<a href={menu.url}>{menu.text}</a>
			</li>
		{/each}
	</ul>
	<ul class="show-sm-only">
		<li role="list" dir="rtl">
			<button aria-haspopup="listbox">
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
					stroke-linejoin="round"
				>
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
			</ul>
		</li>
	</ul>
</nav>

<slot />

<footer>
	<p>&copy; <strong>CV. IT VISION</strong> {date.getFullYear()} All rights reserved</p>
</footer>

<style lang="scss">
	/* TODO: how to import variabel `$breakpoints` from '$src/app.scss' */
	$breakpoints: (
		xs: 0,
		sm: 576px,
		md: 768px,
		lg: 992px,
		xl: 1200px
	);

	[aria-label='Company logo'] {
		width: 150px;
	}
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

	footer {
		text-align: center;
	}
</style>
