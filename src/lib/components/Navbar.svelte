<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	const menuLists = [
		{ text: 'Product', url: `${base}/product` },
		{ text: 'Services', url: `${base}/services` },
		{ text: 'Contact Us', url: `${base}/contact` },
		{ text: 'About Us', url: `${base}/about` }
	];

	$: path = $page.url.pathname;
	let isMobileButton: HTMLButtonElement;
	let isMobileMenu: HTMLDivElement;
	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function handleOutsideClick(event: MouseEvent) {
		if (
			isMobileButton &&
			!isMobileButton.contains(event.target as Node) &&
			isMobileMenu &&
			!isMobileMenu.contains(event.target as Node)
		) {
			isMobileMenuOpen = false;
		}
	}
</script>

<svelte:window on:click={handleOutsideClick} />

<nav class="absolute top-0 left-0 right-0 py-3 border-b-2 bg-background-50 border-primary-300">
	<div class="container flex items-center justify-between">
		<a href={base ? base : '/'} data-href={base ? base : '/'}>
			<img src="./logo.png" alt="Company logo" aria-label="Company logo" class="w-36" />
		</a>
		<div class="flex items-center gap-4 md:gap-8">
			{#each menuLists as menu}
				<div class="hidden md:block">
					<a href={menu.url} class="hover:underline {path === menu.url && 'underline'}">
						{menu.text}
					</a>
				</div>
			{/each}
			<button type="button" class="p-2 text-xl rounded bg-primary-300 text-text-50">
				<Icon icon="material-symbols:dark-mode-rounded" />
			</button>
			<div class="md:hidden">
				<button
					type="button"
					on:click={toggleMobileMenu}
					bind:this={isMobileButton}
					class="p-2 text-xl">
					<Icon icon="fa6-solid:bars" />
				</button>
				{#if isMobileMenuOpen}
					<div bind:this={isMobileMenu} class="absolute w-1/2 mt-5 right-2">
						<div class="flex flex-col gap-2 px-5 rounded py-7 bg-primary-300 text-text-50">
							{#each menuLists as menu}
								<a
									href={menu.url}
									on:click={toggleMobileMenu}
									class="py-3 {path === menu.url && 'underline'}">
									{menu.text}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</nav>
