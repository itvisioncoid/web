<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$src/lib/components/Footer.svelte';
	import Navbar from '$src/lib/components/Navbar.svelte';
</script>

<Navbar />
<section class="flex items-center justify-center min-h-screen">
	<p>{$page.error?.message}</p>
</section>
<Footer />
