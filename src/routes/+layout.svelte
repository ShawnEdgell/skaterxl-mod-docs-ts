<script lang="ts">
    import { afterUpdate } from 'svelte';
    import { page } from '$app/stores';
    import { headers, clearHeaders } from '$lib/stores';
    import { captureHeaders } from '$lib/actions';
    import { writable } from 'svelte/store';
    import '../app.css';

    const menuOpen = writable(false);

    // Reactive statement for currentPath, using $page store
    $: currentPath = $page.url.pathname;

    // Clear headers on page navigation
    $: {
        clearHeaders();
        // Ensure capturing headers after the page/store update
        afterUpdate(() => {
            captureHeaders(contentNode);
        });
    }

    // Define the click handler function here
    function toggleMenu() {
        menuOpen.update((n) => !n);
    }

    // Function to close the menu when a navigation link is clicked
    function closeMenu() {
        menuOpen.set(false);
    }

    // Function to prevent click propagation inside the dropdown area
    function preventPropagation(event) {
        event.stopPropagation();
    }
</script>

<div class="w-full flex justify-center">
    <div class="max-w-custom-8xl">
        <header class="flex flex-col backdrop-blur-md text-sm justify-between md:justify-end sticky p-6 top-0">
            <!-- Hamburger Icon Container -->
            <div class="md:hidden flex items-center">
                <!-- Hamburger Icon -->
                <button class="text-white" on:click={toggleMenu}>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            <!-- Navigation Links -->
            <nav class="{$menuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row gap-6 text-center justify-end" on:click={closeMenu}>
                {#each [
                    { text: 'Home', url: '/' },
                    { text: 'Getting Started', url: '/gettingstarted' },
                    { text: 'Maps & Gear', url: '/maps&gear' },
                    { text: 'XL Hub', url: '/xlhub' },
                    { text: 'Stats & Settings', url: '/stats&settings' }
                ] as { text, url }}
                    <a href={url} class={`block text-lg md:text-sm ${currentPath === url ? 'text-custom-blue' : 'text-white'} hover:underline`} on:click={closeMenu}>{text}</a>
                {/each}
            </nav>
        </header>

        <div class="flex flex-row">
            <!-- Left Sidebar -->
            <div class="hidden lg:block">
                <div style="height: calc(100vh - 4.5rem);" class="h-screen-minus-custom-18 w-56 sticky top-custom-18 p-6">
                    <!-- Inner Left Sidebar Content -->
                    <p class="px-2">Essentials</p>
                    {#each [
                        { text: 'Home', url: '/' },
                        { text: 'Getting Started', url: '/gettingstarted' },
                        { text: 'Maps & Gear', url: '/maps&gear' },
                        { text: 'XL Hub', url: '/xlhub' },
                        { text: 'Stats & Settings', url: '/stats&settings' }
                    ] as { text, url }}
                        <a href={url} class={`flex flex-col p-2 rounded-lg ${currentPath === url ? 'border-custom-blue border bg-custom-dark-blue font-bold' : 'text-custom-blue'} hover:bg-custom-dark-blue`} on:click={closeMenu}>{text}</a>
                    {/each}
                </div>
            </div>
        
            <!-- Main Content -->
            <div use:captureHeaders class="md:p-12 p-6 flex flex-col">
                <slot />
            </div>
        
            <!-- Right Sidebar -->
            <div class="hidden xl:block">
                <div style="height: calc(100vh - 4.5rem);" class="w-56 sticky top-custom-18 p-6" on:click={closeMenu}>
                    <!-- Inner Right Sidebar Content, dynamically generated links -->
                    <p class="px-2">On this page</p>
                    <aside>
                        <ul>
                            {#each $headers as { text, id }}
                                <li class="my-2"><a href={`#${id}`} class="p-2 flex text-custom-blue hover:bg-custom-dark-blue" on:click={preventPropagation}>{text}</a></li>
                            {/each}
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
        
    </div>
</div>
