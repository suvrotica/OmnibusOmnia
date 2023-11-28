<script>
	export let data;
	console.log(data);
</script>

<h1>Blog Posts</h1>
{#if data?.blogPosts && data?.blogPosts.length > 0}
	<div class="blog-posts">
		{#each data?.blogPosts as post}
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
