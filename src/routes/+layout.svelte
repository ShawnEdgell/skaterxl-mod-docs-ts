<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { headers, clearHeaders } from '$lib/stores';
	import { captureHeaders } from '$lib/actions';
	import { writable } from 'svelte/store';
	import '../app.css';

	// Define variables and stores
	let contentNode: HTMLElement;
	let activeCategory: string | null = null;
	const menuOpen = writable(false);
	let currentPath = $page.url.pathname;

	// Example links data
	const links = [
		{ text: 'Home', url: '/' },
		{ text: 'Getting Started', url: '/Getting_Started' },
		{ text: 'Maps & Gear', url: '/Maps&Gear' },
		{ text: 'XL Hub', url: '/XL_Hub' },
		{ text: 'Stats & Settings', url: '/Stats&Settings' }
	];

	const alphaLinks = [
		{ text: 'XXL 3 Mod', url: '/Alpha/XXL_3_Mod' },
		{ text: 'XL Graphics', url: '/Alpha/XL_Graphics' },
		{ text: 'Sound Mod', url: '/Alpha/Sound_Mod' },
		{ text: 'Deck FX', url: '/Alpha/Deck_FX' },
		{ text: 'XL Gear Modifier', url: '/Alpha/XL_Gear_Modifier' },
		{ text: "Fro's Experimental Mod", url: "/Alpha/Fro's_Experimental_Mod" },
		{ text: 'Boned Ollie Mod', url: '/Alpha/Boned_Ollie_Mod' },
		{ text: 'Walking Mod', url: '/Alpha/Walking_Mod' },
		{ text: 'XL Menu Mod', url: '/Alpha/XL_Menu_Mod' },
		{ text: 'Multiplayer++', url: '/Alpha/Multiplayer++' },
		{ text: 'Decal Fix', url: '/Alpha/Decal_Fix' },
		{ text: 'Better Replay Mod', url: '/Alpha/Better_Replay_Mod' },
		{ text: 'Grind Tools', url: '/Alpha/Grind_Tools' },
		{ text: 'Grab Customizer', url: '/Alpha/Grab_Customizer' },
		{ text: 'Lateflip Mod', url: '/Alpha/Lateflip_Mod' },
		{ text: 'XL Object Dropper', url: '/Alpha/XL_Object_Dropper' },
		{ text: 'Better Object Dropper', url: '/Alpha/Better_Object_Dropper' },
		{ text: 'XL Random Map', url: '/Alpha/XL_Random_Map' },
		{ text: 'Break FX', url: '/Alpha/Break_FX' },
		{ text: 'Gear Utilities', url: '/Alpha/Gear_Utilities' },
		{ text: 'Controls Editor', url: '/Alpha/Controls_Editor' },
		{ text: 'Not My Feet', url: '/Alpha/Not_My_Feet' },
		{ text: 'Controller Rumble', url: '/Alpha/Controller_Rumble' }
	];

	const publicLinks = [
		{ text: 'XL Mod', url: '/Public/XL_Mod' },
		{ text: 'XL Graphics', url: '/Public/XL_Graphics' },
		{ text: 'Sound Mod', url: '/Public/Sound_Mod' },
		{ text: 'Deck Tools', url: '/Public/Deck_Tools' },
		{ text: "Fro's Experimental Mod", url: "/Public/Fro's_Experimental_Mod" },
		{ text: 'Boned Ollie Mod', url: '/Public/Boned_Ollie_Mod' },
		{ text: 'Grind Tools', url: '/Public/Grind_Tools' },
		{ text: 'Shape FX', url: '/Public/Shape_FX' },
		{ text: 'Better Replay Mod', url: '/Public/Better_Replay_Mod' },
		{ text: 'XL Menu Mod', url: '/Public/XL_Menu_Mod' },
		{ text: 'Multiplayer+', url: '/Public/Multiplayer+' }
	];

	// Function to set the active link based on the current page URL
	function setActiveLinkFromUrl() {
		const currentUrl = window.location.pathname;
		activeLink.set(currentUrl);
	}
	// Call the setActiveLinkFromUrl function when the component mounts
	onMount(() => {
		setActiveLinkFromUrl();
		captureHeaders(contentNode);
		window.addEventListener('resize', () => closeMenu());
	});

	// Call the setActiveLinkFromUrl function after every update
	afterUpdate(() => contentNode && captureHeaders(contentNode));

	$: clearHeaders();
	$: afterUpdate(() => contentNode && captureHeaders(contentNode));

	function toggleMenu() {
		menuOpen.update((n) => !n);
	}

	function closeMenu() {
		menuOpen.set(false);
	}

	function preventPropagation(event: MouseEvent) {
		event.stopPropagation();
	}

	// Reactive store to track active link
	let activeLink = writable('');

	async function setActiveLink(event: MouseEvent, url: string) {
		event.preventDefault();
		activeLink.set(url);
		closeMenu();
		await goto(url);
	}

	function toggleCategory(category: string) {
		if (activeCategory === category) {
			activeCategory = null;
		} else {
			activeCategory = category;
		}
	}
</script>

<!-- Main Section -->
<div class="max-w-custom-8xl">
	<!-- Header Section -->
	<header
		class="w-100 sticky top-0 z-100 p-4 pl-6 backdrop-blur-md flex flex-col md:flex-row text-sm"
	>
		<div class="flex justify-between items-center w-full md:w-auto md:mb-0">
			<a href="/" title="Go to homepage">
				<img src="favicon.png" alt="Svelte favicon" class="w-10 h-10" />
			</a>
			<button id="menu-button" class="text-white md:hidden" on:click={toggleMenu}>
				<svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
				? 'flex justify-center'
				: 'hidden'} md:flex flex-col md:flex-row justify-end flex-grow"
		>
			{#each links as { text, url }}
				<a
					href={url}
					on:click={(event) => {
						setActiveLink(event, url);
						closeMenu();
					}}
					class="text-center text-lg md:text-sm hover:underline px-4 py-2"
					class:text-custom-blue={$activeLink === url}
					class:text-white={$activeLink !== url}>{text}</a
				>
			{/each}
		</nav>
	</header>

	<!-- Body Containers -->
	<div class="flex flex-row items-start w-100 overflow-x-">
		<!-- LEFT Sidebar -->
		<div
			class="sticky top-custom-18 items-start hidden lg:block bg-gray-700 h-100 overflow-y-auto min-w-56 w-56 py-12 px-6"
		>
			<details open={activeCategory === 'alpha'}>
				<summary on:click={() => toggleCategory('alpha')}>Alpha Mods</summary>
				{#each alphaLinks as { text, url }}
					<a
						href={url}
						on:click={(event) => {
							setActiveLink(event, url);
							closeMenu();
						}}>{text}</a
					>
				{/each}
			</details>
			<details open={activeCategory === 'public'}>
				<summary on:click={() => toggleCategory('public')}>Public Mods</summary>
				{#each publicLinks as { text, url }}
					<a
						href={url}
						on:click={(event) => {
							setActiveLink(event, url);
							closeMenu();
						}}>{text}</a
					>
				{/each}
			</details>
		</div>

		<!-- Content-->
		<div class="flex-grow overflow-y-auto p-6">
			<div bind:this={contentNode}>
				<slot />
			</div>
		</div>

		<!-- RIGHT Sidebar -->
		<div
			class="sticky top-custom-18 hidden xl:block bg-gray-700 h-100 overflow-y-auto min-w-56 w-56 py-12 px-6"
		>
			<aside>
				<ul>
					{#each $headers as { text, id }}
						<li>
							<a href={`#${id}`} on:click={preventPropagation}>{text}</a>
						</li>
					{/each}
				</ul>
			</aside>
		</div>
	</div>
</div>
