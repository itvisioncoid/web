<script lang="ts">
	import { IcS01, IcS02, IcS03, IcS04, IcS05, IcS06, ImS01, ImS02, ImS03 } from '$src/lib/assets';

	const serviceHighlights: Array<App.ServiceHighlights> = [
		{
			icon: IcS03,
			image: ImS01,
			title: 'Manage Data Center'
		},
		{
			icon: IcS02,
			image: ImS02,
			title: 'Individual IT Solution'
		},
		{
			icon: IcS04,
			image: ImS03,
			title: 'Software & Apps Development'
		}
	];

	// TODO: update description
	const services: Array<App.Services> = [
		{
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, harum.',
			icon: IcS01,
			title: 'Manage Mail'
		},
		{
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, harum.',
			icon: IcS06,
			title: 'Manage Router'
		},
		{
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, harum.',
			icon: IcS05,
			title: 'Manage LAN'
		},
		{
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, harum.',
			icon: IcS03,
			title: 'Manage Data Center'
		},
		{
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, harum.',
			icon: IcS04,
			title: 'Computer & Hardware'
		},
		{
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, harum.',
			icon: IcS02,
			title: 'Individual IT Solution'
		},
		{
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, harum.',
			icon: IcS04,
			title: 'Software & Apps Development'
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
					<img src={serviceHighlight.image} alt={serviceHighlight.title} />
					<div>
						<img src={serviceHighlight.icon} alt={serviceHighlight.title} />
						<p><b>{serviceHighlight.title}</b></p>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="service-container">
		<div>
			<p><b>WHAT WE DO</b></p>
			<p><b>Discover How Our Team Can Help You Achieve a Goal</b></p>
		</div>
		<div>
			{#each services as service}
				<article>
					<img src={service.icon} alt={service.title} />
					<p><b>{service.title}</b></p>
					<p>{service.description}</p>
				</article>
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
						@media (max-width: map-get($breakpoints, 'lg')) {
							font-size: 40px;
						}
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
					width: 35px;
					height: fit-content;
				}
				p {
					margin: 0;
					font-size: 1.2rem;
				}
			}
		}
	}

	.service-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		min-height: 100vh;
		margin-top: 5rem;
		div {
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
						@media (max-width: map-get($breakpoints, 'lg')) {
							font-size: 40px;
						}
					}
				}
			}
			&:nth-child(2) {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				gap: 3rem;
				margin-top: 3rem;
				article {
					width: 340px;
					height: 300px;
					margin: 0;
					padding: 2rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					@media (max-width: map-get($breakpoints, 'lg')) {
						width: 300px;
					}
					img {
						width: 60px;
						height: fit-content;
					}
					p {
						margin: 0;
						&:nth-child(2) {
							font-size: 1.2rem;
							margin: 1rem 0 0.5rem 0;
						}
						&:nth-child(3) {
							line-height: 30px;
							color: var(--secondary);
						}
					}
				}
			}
		}
	}
</style>
