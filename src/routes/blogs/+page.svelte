<script>
	export let data;
	import Post from '$lib/components/post.svelte';
</script>



  
{#if data.blogPosts && data.blogPosts.length > 0}
    {#each data.blogPosts as post}
        <details>
            <summary>{post.tag_set === "Music" ? "Music" : "Blogs"}</summary>
            <Post {post} />
        </details>
        
    {/each}
{:else}
    <h2>No blog posts available</h2>
{/if}
