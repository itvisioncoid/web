<script lang="ts">
import { onDestroy, onMount } from 'svelte';
import Typed from 'typed.js';

let typeitEl: HTMLElement;
let typed: Typed;

const startTypit = () => {
	typed = new Typed(typeitEl, {
		strings: ["Better Vision, Better Solution"],
		typeSpeed: 70,
		loop: false,
		showCursor: false,
		autoInsertCss: false
	});
	// typed.start();
	return typed.destroy;
}

onMount(() => {
	startTypit();
});

onDestroy(() => {
	typed.destroy();
})
</script>

<section class="hero" data-theme="dark">
	<header class="container">
		<hgroup>
			<h1>CV. IT VISION</h1>
			<h2>
				<em bind:this={typeitEl}></em>
			</h2>
		</hgroup>
		<p>
			<a href="/" role="button" on:click={(event) => event.preventDefault()}>Contact Us</a>
		</p>
	</header>
</section>