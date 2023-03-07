<script lang="ts">
import type { PageData } from './$types';

import Image from '$lib/assets/team-hands.jpg?aspect=16:9&width=600&position=center&fit=cover&format=webp&quality=40;50;60;72;80;&picture';

export let data: PageData;

export let Teams: App.Team[] = data.teams;
</script>

<div class="container">
	<section class="content-header">
		<hgroup>
			<h3>about us<h3>
			<h2>We are Built for Business! Explore Us Today</h2>
		</hgroup>
	</section>

	<section class="content-aside">
		<div class="flex gap-4 flex-col-reverse sm:flex-row">
			<div class="basis-full sm:basis-4/6">
				<p>
					IT VISION is an information technology company focused on developing innovative solutions
					to help our client achieve their goals. With the support of a team of experienced and
					dedicated professionals, IT VISION is determined to provide high quality services and
					effective support for companies and clients.
				</p>

				<a href="/contact" role="button">Get in touch</a>
			</div>
			<div class="mt-4 sm:m-0">
				<picture>
					{#each Object.entries(Image.sources) as [format, images]}
					<source srcset="{images.map((i) => `${i.src}`).join(', ')}" type="image/{format}" />
					{/each}
					<img src="{Image.fallback.src}" alt="IT VISION TEAMWORKS" class="max-w-full" draggable="false" />
				</picture>
			</div>
		</div>
	</section>

	<section class="visi-misi">
		<h2>Our Vission, Mission & Values</h2>
		<div class="grids flex flex-col sm:flex-row gap-2 sm:gap-4">
			<article class="vision-mission sm:basis-full">
				<div>
					<h3>Our Vision</h3>
					<p>
							Our vision is to be a technology company superior information in innovation and
							provide an effective solution for increase productivity and business efficiency our
							clients, as well as being a technology partner reliable for the company in achieving
							success.
					</p>
				</div>
				<div>
					<h3>Our Missions</h3>
					<ul>
						<li>Providing innovative and technological solutions high quality for our clients.</li>
						<li>
							Develop and provide technology that increase efficiency and productivity for our
							client's business
						</li>
						<li>Maintaining high standards in service customer and technical support.</li>
						<li>Provides challenging job opportunities and profitable for our employees.</li>
						<li>Develop and maintain a relationship strong with our partners and vendors</li>
					</ul>
				</div>
			</article>
			<article class="values">
				<h3>Our Values</h3>
				<p>
					As an IT company, value and the commitments we offer to our clients include our
					capabilities in provide technology solutions innovative and effective for help their
					company improve business efficiency, increase productivity, and improve the
					performance.
				</p>

				<p>
					We also offer services good after-sales and support responsive technical ensure that
					our clients can always count on us when they need it help. In addition, we are also
					dedicated to provide a solution comply with industry standards and compliance with
					applicable regulations.
				</p>
			</article>
		</div>
	</section>

	<section class="teams">
		<hgroup>
			<h5>
				Work Teams
			</h5>
			<h3>Meet Our Creative Teams.</h3>
		</hgroup>

		<div class="team-lists gap-4 flex-col w-full sm:flex-row sm:justify-center sm:flex-wrap sm:content-start">
				{#each Teams as team}
				<div class="team sm:w-1/4">
					<article>
						<img class="avatar" alt="{team.nickname}" src="{team.picture ? team.picture : `https://i.pravatar.cc/150?u=${team.email}` }" />
						<footer>
							<h3>{team.name}</h3>
							<div class="social">
								<a href="about">
									<span class="fa-brands fa-square-github" />
								</a>
	
								<a href="about">
									<span class="fa-solid fa-globe" />
								</a>
	
								<a href="about">
									<span class="fab fa-instagram" />
								</a>
							</div>
						</footer>
					</article>
				</div>
				{/each}
		</div>
	</section>
</div>

<style lang="postcss">
	.content-header {
		margin-top: 3rem;
	}
	.content-header h2 {
		font-size: bold;
		font-size: 2.5rem;
	}

	.content-aside {
		/* min-height: 80vh; */
		box-sizing: border-box;
	}

	.visi-misi .grids {
		--grid-spacing-vertical: 1rem;
		/* display: flex;
		gap: 1rem;
		align-items: flex-start;
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: row; */
	}

	.visi-misi h3,
	.visi-misi h2 {
		text-align: center;
	}

	.visi-misi article {
		/* width: calc(50% - 1rem); */
		margin: 0;
		/* flex: 1 1 calc(50% - 1rem); */
	}

	.visi-misi .values {
		width: 100%;
	}

	.teams {
		--block-spacing-horizontal: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.teams hgroup {
		text-align: center;
	}

	.teams .team-lists {
		display: flex;
	}

	.teams .team-lists .team article {
		--block-spacing-vertical: 0;
		--block-spacing-horizontal: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.teams .team-lists .team article footer {
		width: 100%;
		padding: 1rem;
		text-align: center;
	}

	.teams .team-lists .team .avatar {
		border-radius: 100%;
		border: 1px solid var(--primary);
		background-color: var(--ins-color);
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	span {
		padding: 1rem;
		color: salmon;
	}
</style>
