<script>
	import '../app.css';
</script>

<div class="min-h-screen">
	<header class="bg-blue-300 flex justify-center p-4 fixed w-full top-0 z-10">
		<nav class="flex gap-8">
			<a href="/">Home</a>
			<a href="/gettingstarted">Getting Started</a>
			<a href="/maps&gear">Maps & Gear</a>
			<a href="/xlhub">XL Hub</a>
			<a href="/stats&settings">Stats & Settings</a>
		</nav>
	</header>

	<div class="pt-24 px-6 flex-grow flex flex-col items-center justify-center">
		<slot />
	</div>
</div>
