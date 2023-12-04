<script>
    export let data;
    import Post from '$lib/components/post.svelte';
</script>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 16px;
        padding: 16px;
    }

    .no-posts {
        text-align: center;
        font-size: 1.2em;
        margin-top: 20px;
    }
</style>

{#if data.blogPosts && data.blogPosts.length > 0}
    <div class="gallery">
        {#each data.blogPosts as post}
            <Post {post} />
        {/each}
    </div>
{:else}
    <h2 class="no-posts">No blog posts available</h2>
{/if}
