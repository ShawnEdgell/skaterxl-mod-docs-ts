<script>
	import { page } from '$app/stores';
	import '../app.css';

	// Reactive statement to get the current path
	$: currentPath = $page.url.pathname;
</script>

<div class="flex flex-col min-h-screen bg-custom-black">
	<header class="backdrop-blur-md text-sm flex justify-end sticky p-6 w-full top-0 z-10">
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

	<!-- Flex Container for Sidebars and Main Content -->
	<div class="flex justify-center w-full mx-auto">
		<!-- Left Sidebar -->
		<div class="hidden md:block">
			<div class="w-64 h-full bg-blue-200 text-center p-6 mx-auto">
				<!-- Inner Left Sidebar Content -->
				Left Sidebar
			</div>
		</div>

		<!-- Main Content -->
		<div class="max-w-4xl p-6 flex flex-col items-center justify-center">
			<slot />
		</div>

		<!-- Right Sidebar -->
		<div class="hidden xl:block">
			<div class="w-64 h-full bg-blue-200 text-center p-6 mx-auto">
				<!-- Inner Right Sidebar Content -->
				Right Sidebar
			</div>
		</div>
	</div>
</div>
