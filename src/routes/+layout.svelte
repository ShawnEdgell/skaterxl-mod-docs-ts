<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import '../app.css';

	// Reactive statement for page URL
	$: currentPath = $page.url.pathname;

	// Function to prevent overscrolling effect
	function preventOverscroll(event: TouchEvent): void {
		// Prevents window scroll when reaching the top or bottom
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		if (scrollTop + clientHeight >= scrollHeight - 1 || scrollTop <= 0) {
			event.preventDefault();
		}
	}

	// Add event listener on mount
	onMount(() => {
		window.addEventListener('touchmove', preventOverscroll, { passive: false });
	});

	// Remove event listener on destroy
	onDestroy(() => {
		window.removeEventListener('touchmove', preventOverscroll);
	});
</script>

<!-- Header Section -->
<div class="flex flex-col items-center min-h-screen bg-custom-black">
	<header class="backdrop-blur-md text-sm flex justify-center sticky p-6 w-full top-0 z-10">
		<nav class="flex gap-8">
			<a href="/" class={currentPath === '/' ? 'text-custom-blue' : 'text-white'}>Home</a>
			<a
				href="/gettingstarted"
				class={currentPath === '/gettingstarted' ? 'text-custom-blue' : 'text-white'}
				>Getting Started</a
			>
			<a href="/maps&gear" class={currentPath === '/maps&gear' ? 'text-custom-blue' : 'text-white'}
				>Maps & Gear</a
			>
			<a href="/xlhub" class={currentPath === '/xlhub' ? 'text-custom-blue' : 'text-white'}
				>XL Hub</a
			>
			<a
				href="/stats&settings"
				class={currentPath === '/stats&settings' ? 'text-custom-blue' : 'text-white'}
				>Stats & Settings</a
			>
		</nav>
	</header>

	<div>
		<div class="flex max-w-4xl">
			<!-- Main Content -->
			<div class="p-6 flex flex-col items-center">
				<slot />
			</div>
		</div>
	</div>
</div>
