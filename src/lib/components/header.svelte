<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let isLoading = false;

    function handleLinkClick() {
        isLoading = true;
        // Remove the setTimeout as we're now directly controlling the loading state
    }

    onMount(() => {
        page.subscribe(() => {
            // This will still set isLoading to true on page load
            isLoading = true;
        });
    });

    const const_string_titleImageURL =
        'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/197aa241-9135-48bd-93e3-14ccf1d9b320-eMEGWgdP54vhlFMMEuNHWwQCvKcbNA.png';
</script>

<nav>
    {#if isLoading}
        <div class="spinner"></div>
    {/if}
    <ul>
        <li><img class="logo" src={const_string_titleImageURL} alt="Suvro Ghosh" /></li>
    </ul>
    <ul>
        <li>
            <a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined} on:click={handleLinkClick}>
                <i class="fas fa-home" />
            </a>
        </li>
        <!-- Repeat for other links -->
        <li>
            <a href="/blogs/legalese" aria-current={$page.url.pathname === '/blogs/legalese' ? 'page' : undefined} on:click={handleLinkClick}>
                <i class="fas fa-gavel" />
            </a>
        </li>
        <li>
            <a href="/blogs" aria-current={$page.url.pathname === '/blogs' ? 'page' : undefined} on:click={handleLinkClick}>
                <i class="fas fa-blog" />
            </a>
        </li>
    </ul>
</nav>

<style>
    /* Your existing styles */
    /* Spinner CSS */
    .spinner {
        /* Spinner styles */
    }
    /* Other styles */
</style>
