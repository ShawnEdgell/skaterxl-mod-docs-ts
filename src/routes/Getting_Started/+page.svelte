<script lang="ts">
	import Image from '$lib/Image.svelte';
</script>

<article>
	<div class="section-container">
		<h1 id="gettingstarted">Getting Started with Skater XL Modding</h1>
		<p>
			Welcome to the definitive guide for Skater XL modding. This guide will walk you through the
			initial steps to enhance your game with mods.
		</p>
	</div>
	<div class="section-container">
		<h2 id="confirmversion">Step 1: Confirm Your Game Version</h2>
		<p>
			Understanding your Skater XL version is essential for mod compatibility. While mods work with
			both Alpha and Public branches, version v1.2.2.8 (Alpha) is preferred for its broader mod
			support.
		</p>
		<ul>
			<li><strong>v1.2.2.8 (Alpha):</strong> Optimal mod support.</li>
			<li><strong>v1.2.7.8 (Public):</strong> Default Steam version, supports mods.</li>
		</ul>
		<p>
			Check your game version in the lower left corner at launch. For version changes, follow
			Steam's Beta tab instructions in the game's Properties.
		</p>
	</div>
	<div class="section-container">
		<h2 id="changingversions">Step 2: Switching Game Versions</h2>
		<p>Changing versions is straightforward in Steam:</p>
		<ol>
			<li>Right-click Skater XL in your library, select Properties > Betas.</li>
			<li>Choose your preferred version from the dropdown menu.</li>
		</ol>
	</div>
	<div class="section-container">
		<h2 id="downloadsetupumm">Step 3: UnityModManager Setup</h2>
		<p>
			UnityModManager (UMM) is vital for mod management. Ensure compatibility by downloading the UMM
			version corresponding to your Skater XL version:
		</p>
		<ul>
			<li>For v1.2.2.8: Use UMM v0.27.4.</li>
			<li>For v1.2.7.8: Use UMM v0.27.7.</li>
		</ul>
		<p>
			After downloading, extract UnityModManager, run the executable, and follow the on-screen
			instructions to install or update UMM. Mods can be added via the "Mods" tab by dragging and
			dropping .zip files.
		</p>
		<p>
			Troubleshooting tip: Mismatched UMM versions may cause errors. Ensure you're using the correct
			version for your game.
		</p>
	</div>
	<div class="section-container">
		<h2 id="launchgame">Step 4: Launching Skater XL</h2>
		<p>
			With mods installed, launch Skater XL. UnityModManager will display mod statuses. Green
			indicates functioning mods, while red suggests issues.
		</p>
		<p>
			For additional support or inquiries, consider joining the Skater XL Modding Discord community.
		</p>
	</div>
</article>
