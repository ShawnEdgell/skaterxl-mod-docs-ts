<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { writable, derived } from 'svelte/store';
	import { page } from '$app/stores';
	import { headers, clearHeaders } from '$lib/stores';
	import { captureHeaders } from '$lib/actions';
	import '../app.css';

	let contentNode: HTMLElement;
	const menuOpen = writable(false);
	const currentPath = derived(page, ($page) => $page.url.pathname);
	const activeLink = derived([currentPath], ([$currentPath]) => $currentPath);
	const activeCategory = writable<string | null>(null);

	//Links data
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
		{ text: 'Multiplayer++', url: '/Public/Multiplayer++' }
	];

	onMount(() => {
		captureHeaders(contentNode);
		window.addEventListener('resize', () => menuOpen.set(false));
	});

	$: currentPath.subscribe(($currentPath) => {
		if ($currentPath.startsWith('/Alpha')) {
			activeCategory.set('alpha');
		} else if ($currentPath.startsWith('/Public')) {
			activeCategory.set('public');
		} else {
			activeCategory.set(null);
		}
	});

	afterUpdate(() => {
		captureHeaders(contentNode);
	});

	$: clearHeaders();

	function toggleMenu() {
		menuOpen.update((n) => !n);
	}

	function closeMenu() {
		menuOpen.set(false);
	}

	async function navigate(event: MouseEvent, url: string) {
		event.preventDefault();
		await goto(url);
	}

	function toggleCategory(category: string) {
		activeCategory.update((current) => (current === category ? null : category));
	}
</script>

<!-- Main Section -->
<div class="max-w-custom-8xl">
	<!-- Header Section -->
	<header
		class="w-full sticky top-0 z-50 py-4 px-6 backdrop-blur-md flex flex-col md:flex-row text-sm"
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
			class="md:flex flex-col md:flex-row justify-end flex-grow
            {($menuOpen ? 'flex justify-center ' : 'hidden') + ' md:flex'}"
			in:slide={{ duration: 400 }}
			out:slide={{ duration: 400 }}
		>
			{#each links as { text, url }}
				<a
					href={url}
					on:click|preventDefault={(event) => navigate(event, url)}
					class="text-center text-lg md:text-sm md:hover:underline md:pl-8 py-2 {$activeLink === url
						? 'text-custom-blue'
						: 'text-white'}"
				>
					{text}
				</a>
			{/each}
		</nav>
	</header>

	<!-- Body Containers -->
	<div class="flex flex-row items-start">
		<!-- LEFT Sidebar -->
		<div
			class="sticky top-custom-18 hidden md:block overflow-y-auto min-w-64 w-64 py-16 px-6 border-r-2 border-custom-gray"
			style="height: calc(100vh - 4.5rem);"
		>
			<div class="md:flex-col">
				<!-- Added container for stacking -->
				<button
					class="text-custom-blue hover:text-white pb-2 {$activeCategory === 'alpha'
						? 'font-bold'
						: ''}"
					on:click={() => toggleCategory('alpha')}
				>
					Alpha Mods
				</button>
				<div class={$activeCategory === 'alpha' ? 'block' : 'hidden'}>
					{#each alphaLinks as { text, url }}
						<a
							href={url}
							on:click|preventDefault={(event) => navigate(event, url)}
							class="block p-2 hover:bg-custom-gray {$activeLink === url
								? 'font-bold bg-custom-soft-gray hover:bg-custom-soft-gray'
								: ''}"
						>
							{text}
						</a>
					{/each}
				</div>
			</div>

			<div class="md:flex-col">
				<!-- Added container for stacking -->
				<button
					class="text-custom-blue hover:text-white py-2 {$activeCategory === 'public'
						? 'font-bold'
						: ''}"
					on:click={() => toggleCategory('public')}
				>
					Public Mods
				</button>
				<div class={$activeCategory === 'public' ? 'block' : 'hidden'}>
					{#each publicLinks as { text, url }}
						<a
							href={url}
							on:click|preventDefault={(event) => navigate(event, url)}
							class="block p-2 hover:bg-custom-gray {$activeLink === url
								? 'font-bold bg-custom-soft-gray hover:bg-custom-soft-gray'
								: ''}"
						>
							{text}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Content-->
		<div class="flex-grow overflow-y-auto w-full p-6 md:px-12">
			<div bind:this={contentNode}>
				<slot />
			</div>
		</div>

		<!-- RIGHT Sidebar -->
		<div
			class="sticky scroll-mt-custom-18 top-custom-18 hidden lg:block overflow-y-auto min-w-64 w-64 py-16 px-6"
			style="height: calc(100vh - 4.5rem);"
		>
			<aside>
				<p class="font-bold">On this page</p>
				<ul>
					{#each $headers as { text, id }}
						<li class="p-0 m-0">
							<a
								href={`#${id}`}
								class="flex text-custom-blue hover:text-white hover:bg-custom-gray py-2 px-4"
							>
								{text}
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		</div>
	</div>
</div>
