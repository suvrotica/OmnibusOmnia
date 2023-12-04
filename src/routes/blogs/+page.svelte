<script>
    import Post from '$lib/components/post.svelte';

    export let data;
    let selectedPost = null;

    function selectPost(post) {
        selectedPost = post;
    }
</script>

<style>
    .item1 { grid-area: header; }
    .item2 { grid-area: menu; }
    .item3 { grid-area: main; }

    .grid-container {
        display: grid;
        grid-template-areas:
        'header header header header header header'
        'menu main main main main main';
        gap: 10px;
        background-color: #2196F3;
        padding: 10px;
    }

    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
</style>

<h1>Blog Layout</h1>

<div class="grid-container">
    <div class="item1">Header</div>
    <div class="item2">
        {#if data.blogPosts && data.blogPosts.length > 0}
            <ul>
                {#each data.blogPosts as post}
                    <li><a href="javascript:void(0)" on:click={() => selectPost(post)}>{post.title}</a></li>
                {/each}
            </ul>
        {:else}
            <h2>No blog posts available</h2>
        {/if}
    </div>
    <div class="item3">
        {#if selectedPost}
            <Post {selectedPost} />
        {:else}
            <p>Select a post to view its details</p>
        {/if}
    </div>
</div>
