<script>
	import { page } from '$app/stores';
	import '../app.css';

	// Reactive statement to get the current path
	$: currentPath = $page.url.pathname;
</script>

<div class="w-full flex justify-center">
	<div class="max-w-custom-8xl">
		<header
			class="border-red-500 border backdrop-blur-md text-sm justify-end flex sticky py-6 top-0 z-10"
		>
			<nav class="flex gap-8">
				<a href="/" class={currentPath === '/' ? 'text-custom-blue' : 'text-white'}>Home</a>
				<a
					href="/gettingstarted"
					class={currentPath === '/gettingstarted' ? 'text-custom-blue' : 'text-white'}
					>Getting Started</a
				>
				<a
					href="/maps&gear"
					class={currentPath === '/maps&gear' ? 'text-custom-blue' : 'text-white'}>Maps & Gear</a
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

		<div class="flex flex-row">
			<!-- Left Sidebar -->
			<div class="hidden md:block">
				<div class="h-screen-minus-custom-18 w-64 bg-blue-200 sticky top-custom-18 text-center p-6">
					Left Sidebar
				</div>
			</div>

			<!-- Main Content -->
			<div class="md:p-12 p-6 flex flex-col items-center">
				<slot />
			</div>

			<!-- Right Sidebar -->
			<div class="hidden lg:block">
				<div class="h-screen-minus-custom-18 w-64 bg-blue-200 sticky top-custom-18 text-center p-6">
					Right Sidebar
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.h-screen-minus-custom-18 {
		height: calc(100vh - 4.5rem);
	}
</style>
