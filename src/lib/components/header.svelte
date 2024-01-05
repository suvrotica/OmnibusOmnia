<script lang="ts">
    import { page } from '$app/stores';

    const const_string_titleImageURL =
        'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/197aa241-9135-48bd-93e3-14ccf1d9b320-eMEGWgdP54vhlFMMEuNHWwQCvKcbNA.png';
</script>

<nav>
    <ul>
        <li><img class="logo" src={const_string_titleImageURL} alt="Suvro Ghosh" /></li>
    </ul>
    <ul>
        <li>
            <a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <i class="fas fa-home" />
            </a>
        </li>
        <!-- Other links can be added similarly -->
        <li>
            <a href="/blogs/legalese" aria-current={$page.url.pathname === '/blogs/legalese' ? 'page' : undefined}>
                <i class="fas fa-gavel" />
            </a>
        </li>
        <li>
            <a href="/blogs" aria-current={$page.url.pathname === '/blogs' ? 'page' : undefined}>
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
</style>
