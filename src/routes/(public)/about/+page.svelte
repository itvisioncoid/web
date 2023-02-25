<main>
	<div class="container">
		<div class="container-about">
			<p>about us</p>
			<h1>A Glimpse of Us</h1>
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
		<h1>Vision & Mission IT vision Company</h1>
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
			</div>

			<div class="mission">
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
	</article>

	<article>
		<h1>Our Values</h1>

		<div class="value-img">
			<div class="value-content">
				<p>
					Sebagai perusahaan IT, nilai dan komitmen yang kami tawarkan kepada klien kami meliputi
					kemampuan kami dalam menyediakan solusi teknologi yang inovatif dan efektif untuk membantu
					perusahaan mereka meningkatkan efisiensi bisnis, meningkatkan produktivitas, dan
					meningkatkan kinerja.
				</p>

				<p>
					Kami juga menawarkan layanan purna jual yang baik dan dukungan teknis yang responsif untuk
					memastikan bahawa klien kami selalu dapat mengandalkan pada kami saat mereka membutuhkan
					bantuan. Selain itu, kami juga berdedikasi untuk menyediakan solusi yang sesuai dengan
					standar industri dan konformitas regulasi yang berlaku.
				</p>
			</div>

			<div class="img-content">
				<div class="grid">
					<img class="picture" src="/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg" alt="" />
					<img class="picture-1" src="/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg" alt="" />

				</div>
			</div>
		</div>
	</article>
</main>

<style>
	main{
		background-image: url("/images/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg");
	}
	.container {
		display: flex;
		justify-content: center;
		gap: 5rem;
	

	}
	button {
		width: fit-content;
	
	}

	.container-about {
		width: 500px;
	}

	.container-about > p {
		color: salmon;
	}

	.btn-read {
		display: flex;
		justify-content: end;
	}

	.container-about > h1 {
		margin-top: -30px;
		font-weight: bold;
	}

	.content-about {
		width: 500px;
		margin-top: 30px;
		padding: 3px;
	}


	.value-content{
		width: 500px;
	} */

	.picture{
		border-radius: 10px;
		cursor: pointer;
		box-shadow: 1px 1px 10px #000;

	}

	.picture-1{
		border-radius: 10px;
		width: fit-content;
		cursor: pointer;
		box-shadow: 1px 1px 10px #000;
		margin-top: 30px;
		

	}




	

	@media screen and (max-width: 992px) {
		.content-about,
		.container-about {
			width: fit-content;
		}
		.container {
			display: flex;
			flex-direction: column;
		}
	}
</style>
