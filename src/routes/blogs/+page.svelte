<script>
	export let data;
	import Post from '$lib/components/post.svelte';
</script>

{#if data.blogPosts && data.blogPosts.length > 0}
	{#each data.blogPosts as post}
		<Post {post} />
	{/each}
{:else}
	<h2>No blog posts available</h2>
{/if}

<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">
    <!-- Svelte component to list blog posts -->
    

    {#if data.blogPosts && data.blogPosts.length > 0}
      <ul>
        {#each data.blogPosts as post}
          <li><a href="#{post.id}">{post.title}</a></li>
        {/each}
      </ul>
    {:else}
      <h2>No blog posts available</h2>
    {/if}
  </div>
  <div class="item3">
    <!-- Main content area for displaying a selected post -->
  </div>
</div>
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








