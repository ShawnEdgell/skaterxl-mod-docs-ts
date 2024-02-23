import { headers } from '$lib/stores'; // Adjust the import path as necessary

export function captureHeaders(node: HTMLElement) {
    const update = () => {
        const headerElements = node.querySelectorAll('h1, h2, h3');
        const headerData = Array.from(headerElements).map((header: Element) => ({
            text: header.textContent || '', // Safe fallback
            id: (header as HTMLElement).id // Assert as HTMLElement to access the id property
        }));

        headers.set(headerData);
    };

    update();

    // Optional: Re-run on dynamic content changes within node
    // Consider using MutationObserver if your content changes dynamically

    return {
        destroy() {
            // Cleanup if needed
        }
    };
}
