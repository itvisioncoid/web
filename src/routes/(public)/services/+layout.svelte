<script lang="ts">
	import { base } from "$app/paths";
</script>

<svelte:head>
	<title>Services - IT Vision</title>
</svelte:head>

<slot />

<section class="service-page-cta">
	<div class="container">
		<div>
			<p><b>Work with our best Business Team</b></p>
		</div>
		<div>
			<a href="{base}/contact" role="button" class="contrast">Work with us</a>
		</div>
	</div>
</section>
