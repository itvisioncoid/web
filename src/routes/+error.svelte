<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<ul>
		<li>
			<a href="/" class="contrast">
				<strong>IT Vision</strong>
			</a>
		</li>
	</ul>
	<ul>
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

<section id="error">
	<div class="container" data-theme="dark">
		<hgroup>
			<h1>Error</h1>
			<h3>
				<p>{ $page.error?.message }</p>
			</h3>
		</hgroup>
	</div>
</section>

<style>
section {
	background-color: var(--secondary);
	padding: 1em;
}
</style>