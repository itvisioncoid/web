<script lang="ts">
	// import '$src/app.scss';

	const date = new Date();
	const menuLists = [
		{ text: 'Product', url: '/product' },
		{ text: 'Services', url: '/services' },
		{ text: 'Contact Us', url: '/contact' },
		{ text: 'About Us', url: '/about' },
	];
	let hideNav = true;
</script>

<svelte:head>
	<title>Home - IT Vision</title>
</svelte:head>

<div id="mobile-nav" class="mobile-nav" aria-hidden="{hideNav}" aria-label="mobile-nav" on:click|self={() => (hideNav = true)}>
	<aside>
		<nav>
			<ul>
				{#each menuLists as menu}
				<li>
					<a href="{ menu.url }">{ menu.text }</a>
				</li>
				{/each}
			</ul>
		</nav>
	</aside>
</div>

<nav class="container" aria-label="main-nav">
	<ul class="brand">
		<li>
			<a href="/" class="contrast" aria-label="brand">
				<strong>IT Vision</strong>
			</a>
	  	</li>
		<li class="show-sm-only">
			<a href="#mobile-nav" aria-label="Close menu" aria-controls="mobile-nav" on:click|preventDefault={() => (hideNav = !hideNav)}>
			  <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			  </svg>
			</a>
		</li>
	</ul>
	<ul class="hidden-sm" role="navigation" aria-label="menu">
		{#each menuLists as menu}
			<li><a href="{ menu.url }">{ menu.text }</a></li>
		{/each}
		<!-- <li>
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
		</li> -->
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