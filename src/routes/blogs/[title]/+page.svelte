<script>
   import Post from '$lib/components/post.svelte';
   const post=data.post;
</script>

{#if !post}
   <h1>No post with that title</h1>
{:else}
   <Post {post}/>
{/if}
