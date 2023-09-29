<script lang="ts">
	const date = new Date();

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

<footer>
	<div class="container flex flex-col mb-20 lg:flex-row">
		<div class="mb-10 lg:w-1/2">
			<a href="/">
				<img
					src={'/logo.png' || './logo.png'}
					alt="Company logo"
					aria-label="Company logo"
					class="mb-10 w-60" />
			</a>
			<div class="space-y-4 leading-relaxed">
				<p>
					Dengan dukungan tim yang terdiri dari profesional berpengalaman dan berdedikasi.
					<span class="font-medium text-primary-500">IT VISION</span> bertekad untuk memberikan layanan
					yang berkualitas tinggi dan dukungan efektif untuk perusahaan dan klien kami.
				</p>
				<p>Garden View Residence, jalan Transmigrasi No.A8 Monjok Timur, Mataram.</p>
				<p>Telepon: +62 82 340 709 041</p>
			</div>
		</div>
		<div class="flex flex-col gap-5 leading-loose lg:flex-row lg:justify-end lg:gap-32 lg:w-1/2">
			<div>
				<p class="mb-2 font-medium">READ MORE</p>
				{#each otherLinks as otherLink}
					<div>
						<a href={otherLink.url} class="text-primary-500 hover:underline">
							{otherLink.text}
						</a>
					</div>
				{/each}
			</div>
			<div>
				<p class="mb-2 font-medium">SOLUTIONS</p>
				{#each serviceLinks as serviceLink}
					<div>
						<a href={serviceLink.url} class="text-primary-500 hover:underline">
							{serviceLink.text}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<hr />
	<div
		class="container flex flex-col items-center justify-center py-4 text-[16px] md:flex-row md:justify-between">
		<p>
			&copy; <a href="/" class="font-medium text-primary-500">CV. IT VISION</a>
			{date.getFullYear()} All rights reserved.
		</p>
		<p class="space-x-1 text-primary-500">
			<a href="/">Terms & Conditions</a>
			<span class="text-text-800">&bull;</span>
			<a href="/">Privacy Policy</a>
		</p>
	</div>
</footer>
