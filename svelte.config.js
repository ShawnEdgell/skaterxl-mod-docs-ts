import adapter from '@sveltejs/adapter-node'; // Change the adapter import
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // Use the adapter-node adapter for SSR support
        adapter: adapter(),

        // Add any additional kit configuration options here
    },
};

export default config;
