<script lang="ts">
	import Footer from '$src/lib/components/Footer.svelte';
	import Navbar from '$src/lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Home - IT Vision</title>
</svelte:head>

<Navbar />
<slot />
<Footer />
