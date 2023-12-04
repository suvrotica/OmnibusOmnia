<script>
    export let data;
    import Post from '$lib/components/post.svelte';

    let selectedPost = null;
    let dialog;

    function openDialog(post) {
        selectedPost = post;
        dialog.showModal();
    }

    function closeDialog() {
        dialog.close();
    }
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

    dialog {
        border: none;
        border-radius: 10px;
        padding: 20px;
    }
</style>

{#if data.blogPosts && data.blogPosts.length > 0}
    <div class="gallery">
        {#each data.blogPosts as post}
            <div on:click={() => openDialog(post)}>
                <Post {post} />
            </div>
        {/each}
    </div>

    <dialog bind:this={dialog}>
        {#if selectedPost}
            <Post {selectedPost} />
            <button on:click={closeDialog}>Close</button>
        {/if}
    </dialog>
{:else}
    <h2 class="no-posts">No blog posts available</h2>
{/if}
