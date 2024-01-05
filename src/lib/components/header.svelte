<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let isLoading = false;

    

    function handleLinkClick() {
        setTimeout(() => {
            isLoading = true;
        }, 500);
        
    }

    onMount(() => {
        page.subscribe(() => {
            isLoading = false; // Set to false when the page changes
        });
    });

    const const_string_titleImageURL =
        'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/197aa241-9135-48bd-93e3-14ccf1d9b320-eMEGWgdP54vhlFMMEuNHWwQCvKcbNA.png';
</script>
    {#if isLoading}
        <div class="spinner"></div>
    {/if}

<nav>

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
    a, ul, li {
        color: rgb(10, 10, 10);
        background-color: white;
        padding: 0px;
        margin: 0px;
    }

    i {
        padding: 10px;
        margin: 10px;
    }

    .logo {
        width: 600px;
    }

    nav {
        margin: 0px;
        padding: 0px;
        background: linear-gradient(to right, black, white 30%);
    }

    /* Style for the icon in the active link */
    a[aria-current="page"] i {
        color: #ff4500; /* Change the icon color */
        /* Additional styles can be added here */
    }

    /* Spinner CSS */
    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #09f;
        animation: spin 1s ease infinite;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

