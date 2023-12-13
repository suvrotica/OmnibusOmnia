<script>
  import Post from '$lib/components/post.svelte';
  export let data;
  const post = data.post;
</script>

{#if !post}
   <h1>No post with that title</h1>
{:else}
   <p>{post.title}</p>
   <Post {post}/>
{/if}
