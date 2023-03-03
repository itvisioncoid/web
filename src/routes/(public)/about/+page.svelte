<script lang="ts">
	import { base } from "$app/paths";
</script>
<svelte:head>
	<title>About Us - IT Vision</title>
	<style type="text/css">
		--backgrond-image: url("{base}/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg");
	</style>
</svelte:head>

<div class="backround">
	<div class="container">
		<div class="title-container">
			<h4>about us</h4>
			<h3>Explore Us Today</h3>
		</div>
		
		<div class="content-about">
			<p>
				IT VISION adalah perusahaan teknologi informasi yang berfokus pada pengembangan solusi
				inovatif untuk membantu klien kami mencapai tujuannya. Dengan dukungan tim yang terdiri dari
				profesional berpengalaman dan berdedikasi, IT VISION bertekad untuk memberikan layanan yang
				berkualitas tinggi dan dukungan efektif untuk perusahaan dan klien kami.
			</p>
			<div class="btn-read">
				<button>Read More</button>
			</div>
		</div>
	</div>
	
	<article>
		<b>Vision & Mission IT vision Company</b>
		<br /><br />
		<div class="article">
			<div class="vision">
				<ul>
					<li>
						Visi kami adalah menjadi perusahaan teknologi informasi yang unggul dalam inovasi dan
						memberikan solusi yang efektif untuk meningkatkan produktivitas dan efisiensi bisnis
						klien kami, serta menjadi mitra teknologi terpercaya bagi perusahaan dalam mencapai
						kesuksesan.
					</li>
				</ul>

				<ul>
					<li>
						Misi Menyediakan solusi teknologi yang inovatif dan berkualitas tinggi untuk klien kami.
					</li>

					<li>
						Mengembangkan dan menyediakan teknologi yang meningkatkan efisiensi dan produktivitas
						bagi bisnis klien kami.
					</li>

					<li>Mempertahankan standard tinggi dalam layanan pelanggan dan dukungan teknis.</li>

					<li>Menyediakan kesempatan kerja yang menantang dan menguntungkan bagi karyawan kami.</li>
					<li>Mengembangkan dan menjaga hubungan yang kuat dengan mitra dan vendor kam</li>
				</ul>
			</div>
		</div>


		<div class="value-content">
			<b>Our Values</b>
			<div class="grid">
				<div />
				<div>
					<p>
						Sebagai perusahaan IT, nilai dan komitmen yang kami tawarkan kepada klien kami meliputi
						kemampuan kami dalam menyediakan solusi teknologi yang inovatif dan efektif untuk
						membantu perusahaan mereka meningkatkan efisiensi bisnis, meningkatkan produktivitas,
						dan meningkatkan kinerja.
					</p>

					<p>
						Kami juga menawarkan layanan purna jual yang baik dan dukungan teknis yang responsif
						untuk memastikan bahawa klien kami selalu dapat mengandalkan pada kami saat mereka
						membutuhkan bantuan. Selain itu, kami juga berdedikasi untuk menyediakan solusi yang
						sesuai dengan standar industri dan konformitas regulasi yang berlaku.
					</p>
				</div>
			</div>
		</div>

		<div class="container-card">
			<p>MEET OUR TEAM</p>
			<h1>Our Expert People</h1>
			<div class="card">
				<div>
					<img src="{base}/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg" alt="" />
					<p>Bani Taufik</p>
				</div>
				<div>
					<img src="{base}/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg" alt="" />
					<p>Hulaimi Haekal</p>
				</div>
				<div>
					<img src="{base}/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg" alt="" />
					<p>Bani Taufik</p>
				</div>
				<div>
					<img src="{base}/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg" alt="" />
					<p>Hulaimi Haekal</p>
				</div>
			</div>
		</div>
	</article>
</div>

<style>
	.backround {
		background-image: var(--backgrond-image);
		height: fit-content;
	}
	.container {
		align-items: flext-start;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		min-height: 100vh;
		padding-top: 4rem;
		/* min-height: 100vh; */
	}
	button {
		width: fit-content;
	}

	.title-container {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	/* .title-container h4,  */
	.title-container h3{
		color: black;
		font-weight: bold;
		font-size: 3rem;
	}

	.title-container h4 {
		color: var(--primary);
		margin-bottom: 0;
	}

	.btn-read {
		display: flex;
		justify-content: end;
	}

	.content-about {
		width: 80vw;
		margin-top: 3rem;
		/* min-height: 100vh; */
	}

	.content-about p {
		background-color: #fff;
		padding: 1rem;
		border-radius: 5px;
		box-shadow: 1px 1px 10px 0 #a19d9d;
		font-size: 1rem;
	}

	.article {
		min-height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		/* margin: 0;
		padding: 0; */
	}

	.value-content {
		min-height: 100vh;
		line-height: 20px;
	}

	.container-card {
		min-height: 100vh;
	}
	
	.container-card p {
		color: var(--primary);
		text-align: center;
	}
	
	.container-card h1 {
		text-align: center;
	}
	
	.card {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-self: center;
		gap: 4rem;
	}

	.card p {
		margin-top: 1rem;
		padding: 1rem;
		background-color: var(--primary);
		color: whitesmoke;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
	}

	.card img {
		border-radius: 100%;
		width: 200px;
		height: 200px;
		cursor: pointer;
	}

	@media screen and (max-width: 992px) {
		.title-container,
		.title-container {
			width: fit-content;
		}
		.container {
			display: flex;
			flex-direction: column;
		}
	}
</style>
