<script>
    import { onMount } from 'svelte';
    import Post from '$lib/components/post.svelte';

    export let data;
    let selectedPost = null;
    let dialog;

    onMount(() => {
        if (typeof window !== 'undefined') {
            dialog = document.querySelector('#postDialog');
            // Uncomment the line below if using a dialog polyfill
            dialogPolyfill.registerDialog(dialog);
        }
    });

    function openDialog(post) {
        console.log("Opening dialog for post", post);
        selectedPost = post;
        dialog.showModal();
    }

    function closeDialog() {
        console.log("Closing dialog");
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

    .modal-dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-width: 90%;
        max-height: 90%;
        overflow: auto;
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

    <dialog id="postDialog" class="modal-dialog" bind:this={dialog}>
        {#if selectedPost}
            <Post {selectedPost} />
            <button on:click={closeDialog}>Close</button>
        {/if}
    </dialog>
{:else}
    <h2 class="no-posts">No blog posts available</h2>
{/if}
