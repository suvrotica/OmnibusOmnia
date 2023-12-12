<script>

export let data;
const post=data.blogPosts;
</script>

{#if !post}
 <h1>No post with title {data.title}</h1>
{:else}
 {@html post.content}
{/if}
