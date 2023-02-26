<script lang="ts">
	const serviceHighlights = [
		{
			icon: '/icons/icons-05.svg',
			image: '/images/images-10.jpg',
			name: 'Manage Data Center'
		},
		{
			icon: '/icons/icons-02.svg',
			image: '/images/images-13.jpg',
			name: 'Individual IT Solution'
		},
		{
			icon: '/icons/icons-06.svg',
			image: '/images/images-11.jpg',
			name: 'Software & Apps Development'
		}
	];
</script>

<main>
	<section class="service-highlight-container">
		<div class="content-wrapper">
			<div>
				<p><b>CORE VALUES</b></p>
				<p><b>Service Highlights We provide services to clients globally</b></p>
			</div>
			<div>
				<p>
					As an IT company, we cherish and hold ourselves responsible for the commitments we make to
					our clients, including our capacity to provide cutting-edge technological solutions that
					will assist their organizations in enhancing performance, productivity, and operational
					effectiveness.
				</p>
				<p>
					Because to our excellent after-sales service and quick technical assistance, our customers
					can depend on us whenever they need us. Additionally, we are dedicated to providing
					solutions that abide by all pertinent laws and industry standards.
				</p>
			</div>
		</div>
		<div class="image-wrapper">
			{#each serviceHighlights as serviceHighlight}
				<div>
					<img src={serviceHighlight.image} alt={serviceHighlight.name} />
					<div>
						<img src={serviceHighlight.icon} alt={serviceHighlight.name} />
						<p><b>{serviceHighlight.name}</b></p>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	/* TODO: how to import variabel `$breakpoints` from '$src/app.scss' */
	$breakpoints: (
		xs: 0,
		sm: 576px,
		md: 768px,
		lg: 992px,
		xl: 1200px
	);

	.service-highlight-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
	.content-wrapper {
		display: flex;
		gap: 2rem;
		@media (max-width: map-get($breakpoints, 'lg')) {
			flex-direction: column;
		}
		div {
			width: 50%;
			@media (max-width: map-get($breakpoints, 'lg')) {
				width: 100%;
			}
			&:nth-child(1) {
				p {
					margin: 0;
					&:nth-child(1) {
						font-size: 14px;
						line-height: 30px;
						letter-spacing: 1px;
						color: var(--primary);
					}
					&:nth-child(2) {
						font-size: 50px;
						line-height: 60px;
					}
				}
			}
			&:nth-child(2) {
				line-height: 28px;
				color: var(--secondary);
			}
		}
	}
	.image-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin-top: 3rem;
		div {
			img {
				width: 340px;
				height: 240px;
				border-radius: 0.25rem;
			}
			div {
				display: flex;
				gap: 1rem;
				align-items: center;
				padding: 1rem 0;
				img {
					width: 40px;
					height: fit-content;
				}
				p {
					margin: 0;
					font-size: 1.2rem;
				}
			}
		}
	}
</style>
