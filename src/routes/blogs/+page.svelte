<script>
	export let data;
	import Post from '$lib/components/post.svelte';
</script>


<details open>
  
{#if data.blogPosts && data.blogPosts.length > 0}
	{#each data.blogPosts as post}
           <details>
               <summary>Music</summary>
               {#if post.tag_set[0]==="Technical"}
                  <Post {post} />
               {/if}
           </details>
           <details>
               <summary>all</summary>
               <Post {post} />
           </details>
	{/each}
{:else}
	<h2>No blog posts available</h2>
{/if}
