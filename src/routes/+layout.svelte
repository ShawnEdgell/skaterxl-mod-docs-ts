<script>
	import { page } from '$app/stores';
	import '../app.css';

	// Reactive statement to get the current path
	$: currentPath = $page.url.pathname;
</script>

<div class="min-h-screen bg-custom-black">
	<header class="flex justify-center p-4 sticky w-full top-0 z-10">
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

	<div class="p-6 flex-grow flex flex-col items-center justify-center">
		<slot />
	</div>
</div>
