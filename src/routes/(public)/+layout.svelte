<script lang="ts">
	// import '@picocss/pico';

	const date = new Date();
</script>
<svelte:head>
	<title>Home - IT Vision</title>
</svelte:head>

<nav class="container">
	<ul>
		<li>
			<a href="/" class="contrast" aria-label="brand">
				<strong>IT Vision</strong>
			</a>
	  	</li>
	</ul>
	<ul role="navigation">
		<li>
			<a href="/product">Product</a>
		</li>
		<li>
			<a href="/services">Services</a>
		</li>
		<li>
			<a href="/contact">Contact Us</a>
		</li>
		<li>
			<a href="/about">About Us</a>
		</li>
	</ul>
</nav>
  
<slot />

<footer class="section">
	<section class="container">
		<p>&copy; <strong>CV. IT VISION</strong> { date.getFullYear() } All rights reserved</p>
	</section>
</footer>

<style>
footer .container p {
	text-align: center;
}


</style>

