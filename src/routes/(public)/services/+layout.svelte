<svelte:head>
	<title>Services - IT Vision</title>
</svelte:head>

<slot />

<section class="service-page-cta">
	<div class="container">
		<div>
			<p><b>Work with our best Business Team</b></p>
		</div>
		<div>
			<a href="/contact" role="button" class="contrast">Work with us</a>
		</div>
	</div>
</section>

<style lang="scss">
	/* TODO: how to import variabel `$breakpoints` from '$src/app.scss' */
	$breakpoints: (
		xs: 0,
		sm: 576px,
		md: 768px,
		lg: 992px,
		xl: 1200px
	);

	.service-page-cta {
		background-color: var(--primary);
		padding: 2.5rem;
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (max-width: map-get($breakpoints, 'md')) {
			flex-direction: column;
			align-items: start;
			gap: 2rem;
		}
		p {
			margin: 0;
			color: #fff;
			font-size: 28px;
		}
		a {
			font-size: 17px;
		}
	}
</style>
