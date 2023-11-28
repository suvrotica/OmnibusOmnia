<script>
	export let blogPosts;
</script>

<h1>Blog Posts</h1>

{#if blogPosts && blogPosts.length > 0}
	<div class="blog-posts">
		{#each blogPosts as post}
			<div class="blog-post">
				<h2>{post.title}</h2>
				<img src={post.image_url} alt={post.title} />
				<p>{post.content}</p>
			</div>
		{/each}
	</div>
{:else}
	<h2>No blog posts available</h2>
{/if}
