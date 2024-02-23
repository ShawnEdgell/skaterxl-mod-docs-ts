<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { page } from '$app/stores';
	import { headers, clearHeaders } from '$lib/stores';
	import { captureHeaders } from '$lib/actions';
	import { writable } from 'svelte/store';
	import '../app.css';

	let contentNode: HTMLElement;
	const menuOpen = writable(false);
	let currentPath = $page.url.pathname;

	$: {
		clearHeaders();
		afterUpdate(() => contentNode && captureHeaders(contentNode));
	}

	onMount(() => captureHeaders(contentNode));

	function toggleMenu() {
		menuOpen.update((n) => !n);
	}

	function closeMenu() {
		menuOpen.set(false);
	}

	function preventPropagation(event: MouseEvent) {
		event.stopPropagation();
	}
</script>

<div class="w-full flex justify-center">
	<div class="max-w-custom-8xl">
		<header
			class="flex flex-col backdrop-blur-md text-sm justify-between md:justify-end sticky p-6 top-0"
		>
			<div class="md:hidden flex items-center">
				<button class="text-white" on:click={toggleMenu}>
					<svg class="h-6 w-6 z-1000" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>

			<nav
				class="{$menuOpen
					? 'flex'
					: 'hidden'} flex-col md:flex md:flex-row gap-6 text-center justify-end"
			>
				{#each [{ text: 'Home', url: '/' }, { text: 'Getting Started', url: '/gettingstarted' }, { text: 'Maps & Gear', url: '/maps&gear' }, { text: 'XL Hub', url: '/xlhub' }, { text: 'Stats & Settings', url: '/stats&settings' }] as { text, url }}
					<a
						href={url}
						class={`block text-lg md:text-sm ${currentPath === url ? 'text-custom-blue' : 'text-white'} hover:underline`}
						on:click={closeMenu}>{text}</a
					>
				{/each}
			</nav>
		</header>

		<div class="flex flex-row">
			<div class="hidden lg:block">
				<div
					style="height: calc(100vh - 4.5rem);"
					class="h-screen-minus-custom-18 w-56 sticky top-custom-18 p-6"
				>
					<p class="px-2">Essentials</p>
					{#each [{ text: 'Home', url: '/' }, { text: 'Getting Started', url: '/gettingstarted' }, { text: 'Maps & Gear', url: '/maps&gear' }, { text: 'XL Hub', url: '/xlhub' }, { text: 'Stats & Settings', url: '/stats&settings' }] as { text, url }}
						<a
							href={url}
							class={`flex flex-col p-2 rounded-lg ${currentPath === url ? 'border-custom-blue border bg-custom-dark-blue font-bold' : 'text-custom-blue'} hover:bg-custom-dark-blue`}
							on:click={closeMenu}>{text}</a
						>
					{/each}
				</div>
			</div>

			<div bind:this={contentNode} class="md:p-12 p-6 flex flex-col">
				<slot />
			</div>

			<div class="hidden xl:block">
				<div style="height: calc(100vh - 4.5rem);" class="w-56 sticky top-custom-18 p-6">
					<p class="px-2">On this page</p>
					<aside>
						<ul>
							{#each $headers as { text, id }}
								<li class="my-2">
									<a
										href={`#${id}`}
										class="p-2 flex text-custom-blue hover:bg-custom-dark-blue"
										on:click={preventPropagation}>{text}</a
									>
								</li>
							{/each}
						</ul>
					</aside>
				</div>
			</div>
		</div>
	</div>
</div>
