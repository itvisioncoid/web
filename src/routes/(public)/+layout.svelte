<script lang="ts">
	import { base } from "$app/paths";
	const date = new Date();

	const menuLists = [
		{ text: 'Product', url: `${base}/product` },
		{ text: 'Services', url: `${base}/services` },
		{ text: 'Contact Us', url: `${base}/contact` },
		{ text: 'About Us', url: `${base}/about` }
	];

	// FIXME: update base url!
	const otherLinks = [
		{ text: 'Blog', url: '/' },
		{ text: 'FAQ', url: '/' },
		{ text: 'Karier', url: '/' },
		{ text: 'Kontak', url: '/' },
		{ text: 'Partner', url: '/' }
	];

	const serviceLinks = [
		{ text: 'Kelola Email', url: '/' },
		{ text: 'Kelola LAN', url: '/' },
		{ text: 'Kelola Pusat Data', url: '/' },
		{ text: 'Kelola Router', url: '/' },
		{ text: 'Pengembangan Aplikasi', url: '/' },
		{ text: 'Pengembangan Perangkat Lunak', url: '/' },
		{ text: 'Perangkat keras komputer', url: '/' },
		{ text: 'Solusi TI Individu', url: '/' }
	];
</script>

<svelte:head>
	<title>Home - IT Vision</title>
</svelte:head>

<nav class="container">
	<ul>
		<li>
			<a href="{base}">
				<img src="{base}/logo.png" alt="Company logo" aria-label="Company logo" />
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

<footer class="as-footer">
	<div class="grid">
		<div>
			<a href="{base}">
				<img class="as-footer__logo" src="{base}/logo.png" alt="Company logo" aria-label="Company logo" />
			</a>
			<div>
				<p>
					Dengan dukungan tim yang terdiri dari profesional berpengalaman dan berdedikasi.
					<span><b>IT VISION</b></span> bertekad untuk memberikan layanan yang berkualitas tinggi dan
					dukungan efektif untuk perusahaan dan klien kami.
				</p>
				<p>Garden View Residence, jalan Transmigrasi No.A8 Monjok Timur, Mataram.</p>
				<p>Telepon: +62 82 340 709 041</p>
			</div>
		</div>
		<div class="grid as-footer__con-link">
			<div>
				<p><b>Tautan lainnya</b></p>
				{#each otherLinks as otherLink}
					<div>
						<a href={otherLink.url}>{otherLink.text}</a>
					</div>
				{/each}
			</div>
			<div>
				<p><b>Layanan yang kami tawarkan</b></p>
				{#each serviceLinks as serviceLink}
					<div>
						<a href={serviceLink.url}>{serviceLink.text}</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</footer>

<div class="as-footer">
	<hr />
	<div class="as-footer__boxed container">
		<small>&copy; <span><b>CV. IT VISION</b></span> {date.getFullYear()} All rights reserved</small>
		<!-- FIXME: update base url! -->
		<small><a href="#terms">Syarat dan Ketentuan</a> &bull; <a href="#privacy">Kebijakan Privasi</a></small>
	</div>
</div>

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

	.as-footer {
		span {
			color: var(--primary);
		}
		.as-footer__con-link {
			justify-self: end;
			width: 80%;
			div > p {
				margin: 1rem 0;
			}
			a {
				line-height: 32px;
			}
			@media (max-width: map-get($breakpoints, 'lg')) {
				width: 100%;
			}
		}
		.as-footer__logo {
			width: 250px;
			margin-bottom: 2.5rem;
		}
		.as-footer__boxed {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem 0;
			@media (max-width: map-get($breakpoints, 'sm')) {
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	}
</style>
