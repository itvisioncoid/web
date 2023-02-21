<svelte:head>
	<title>About | IT VISION</title>
</svelte:head>

<main class="container">
	<div class="grid">
		<section>
			<hgroup>
				<h2>About Our Company</h2>
				<h3>IT VISION</h3>
			</hgroup>
			<p class="p-company">
				IT VISION adalah perusahaan teknologi informasi yang berfokus pada pengembangan solusi
				inovatif untuk membantu klien kami mencapai tujuannya. Dengan dukungan tim yang terdiri dari
				profesional berpengalaman dan berdedikasi, IT VISION bertekad untuk memberikan layanan yang
				berkualitas tinggi dan dukungan efektif untuk perusahaan dan klien kami.
			</p>
			<a href="/" class="learn-more">learn more</a>

			<h3 class="v-m">Vision & Mission</h3>
			<h4 class="visi-4">Visi</h4>
			<p>
				Visi kami adalah menjadi perusahaan teknologi informasi yang unggul dalam inovasi dan
				memberikan solusi yang efektif untuk meningkatkan produktivitas dan efisiensi bisnis klien
				kami, serta menjadi mitra teknologi terpercaya bagi perusahaan dalam mencapai kesuksesan.
			</p>
			<h4 class="misi-4">Misi</h4>
			<ul>
				<li>Menyediakan solusi teknologi yang inovatif dan berkualitas tinggi untuk klien kami.</li>

				<li>
					Mengembangkan dan menyediakan teknologi yang meningkatkan efisiensi dan produktivitas bagi
					bisnis klien kami.
				</li>

				<li>Mempertahankan standard tinggi dalam layanan pelanggan dan dukungan teknis.</li>

				<li>Menyediakan kesempatan kerja yang menantang dan menguntungkan bagi karyawan kami.</li>
				<li>Mengembangkan dan menjaga hubungan yang kuat dengan mitra dan vendor kami</li>
			</ul>
		</section>

		<aside>
			<figure>
				<h3 class="figure-heading">Our Values</h3>
				<img
					src="/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg"
					alt="Architecture"
					class="img-vision"
				/>
				<figcaption>
					Image from <a
						href="https://unsplash.com/photos/3Ijt7UkSBYE"
						target="_blank"
						rel="external, noreferrer">unsplash.com</a
					>
				</figcaption>
			</figure>
			<a href="/" aria-label="Example" on:click|preventDefault>
				<img
					src="/images/maarten-deckers-T5nXYXCf50I-unsplash-1500x750.jpg"
					alt="Architecture"
					class="img-aside"
				/>
			</a>
			<p>
				<a href="/" on:click|preventDefault>Donec sit amet</a>
				<br />
				<small>Class aptent taciti sociosqu ad litora torquent per conubia nostra</small>
			</p>
			<a href="/" aria-label="Example" on:click|preventDefault>
				<img src="/images/daniel-von-appen-tb4heMa-ZRo-unsplash-1500-750.jpg" alt="Architecture" />
			</a>
			<p>
				<a href="/" on:click|preventDefault>Suspendisse potenti</a><br />
				<small>Proin non condimentum tortor. Donec in feugiat sapien.</small>
			</p>
			<a href="/" aria-label="Example" on:click|preventDefault>
				<img src="/images/matthew-hamilton-Ru3Ap8TNcsk-unsplash-1500-750.jpg" alt="Architecture" />
			</a>
			<p>
				<a href="/" on:click|preventDefault>Nullam lobortis placerat aliquam</a><br />
				<small
					>Maecenas vitae nibh blandit dolor commodo egestas vel eget neque. Praesent semper justo
					orci, vel imperdiet mi auctor in.</small
				>
			</p>
		</aside>
	</div>
</main>

<style>
	.container{
		font-family: 'Bebas Neue', cursive;
	}

	h2 {
		font-size: 40px;
		font-weight: bold;
		background-color: rgb(255, 41, 17);
		max-width: 70%;
		padding: 3px;
		border-radius: 10px 0 10px 0;
	}
	
	
	.p-company {
		font-size: 40;
		border-radius: 5px;
	}

	
	.learn-more {
		background-color: #fff;
		padding: 10px;
		color: black;
		border-radius: 5px;
		text-decoration: none;
	}
	figure {
		margin-top: 70px;
	}

	.figure-heading {
		font-size: 40px;
		font-weight: bold;
	}

	.img-vision {
		margin-top: 10px;
		border-radius: 5px;
		float: right;
	}
	.v-m {
		margin-top: 100px;
		font-size: 40px;
		font-weight: bold;
	}

	.visi-4 {
		margin: 0;
	}

	.misi-4 {
		margin: 0;
	}

</style>
