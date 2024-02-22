<script>
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import '../app.css';

	// Reactive statement to get the current path
	$: currentPath = $page.url.pathname;
	const menuOpen = writable(false);
</script>

<div class="w-full flex justify-center">
	<div class="max-w-custom-8xl">
		<header
			class="flex flex-col backdrop-blur-md text-sm justify-between md:justify-end sticky p-6 top-0 z-10"
		>
			<!-- Hamburger Icon for small screens -->
			<button class="md:hidden text-white" on:click={() => menuOpen.update((n) => !n)}>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>

			<!-- Navigation Links -->
			<nav
				class="{$menuOpen
					? 'flex'
					: 'hidden'} flex-col md:flex md:flex-row gap-8 text-center justify-end"
			>
				<a
					href="/"
					class={`block text-lg md:text-sm ${currentPath === '/' ? 'text-custom-blue' : 'text-white'}`}
					>Home</a
				>
				<a
					href="/gettingstarted"
					class={`block text-lg md:text-sm ${currentPath === '/gettingstarted' ? 'text-custom-blue' : 'text-white'}`}
					>Getting Started</a
				>
				<a
					href="/maps&gear"
					class={`block text-lg md:text-sm ${currentPath === '/maps&gear' ? 'text-custom-blue' : 'text-white'}`}
					>Maps & Gear</a
				>
				<a
					href="/xlhub"
					class={`block text-lg md:text-sm ${currentPath === '/xlhub' ? 'text-custom-blue' : 'text-white'}`}
					>XL Hub</a
				>
				<a
					href="/stats&settings"
					class={`block text-lg md:text-sm ${currentPath === '/stats&settings' ? 'text-custom-blue' : 'text-white'}`}
					>Stats & Settings</a
				>
			</nav>
		</header>

		<div class="flex flex-row">
			<!-- Left Sidebar -->
			<div class="hidden md:block">
				<div
					style="height: calc(100vh - 4.5rem);"
					class="h-screen-minus-custom-18 w-64 bg-blue-200 sticky top-custom-18 text-center p-6"
				>
					<!-- Inner Left Sidebar Content -->
					Main Sidebar
				</div>
			</div>

			<!-- Main Content -->
			<div class="md:p-12 p-6 flex flex-col">
				<slot />
			</div>

			<!-- Right Sidebar -->
			<div class="hidden lg:block">
				<div
					style="height: calc(100vh - 4.5rem);"
					class="w-64 bg-blue-200 sticky top-custom-18 text-center p-6"
				>
					<!-- Inner Right Sidebar Content -->
					On this page
				</div>
			</div>
		</div>
	</div>
</div>
