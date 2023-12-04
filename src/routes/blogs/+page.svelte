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



<h1>Grid Layout</h1>

<p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning:</p>

<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>  
</div>




