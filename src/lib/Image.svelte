<!-- src/lib/Image.svelte -->
<script>
	export let src = '';
	export let alt = '';
	export let classes = ''; // Allow custom classes to be passed
</script>

<div class={`py-4 ${classes}`}>
	<img {src} {alt} class="rounded-lg" loading="lazy" />
</div>
