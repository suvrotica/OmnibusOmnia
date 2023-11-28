<script>
	export let data;
	console.log(data);
	import Post from '$lib/components/post.svelte';
</script>

<h1>Blog Posts</h1>
{#if data?.blogPosts && data?.blogPosts.length > 0}
	<div class="blog-posts">
		{#each data?.blogPosts as post}
			<div class="blog-post">
				<!-- <img src={post.image_url} alt={post.title} /> -->
				<!-- <p>{post.content}</p> -->
				<Post
					title={post.title}
					date={post.created_at
						.toLocaleDateString('en-GB', {
							year: 'numeric',
							month: 'short',
							day: '2-digit'
						})
						.replace(/\s/g, '-')}
					blogContent={post.content}
					image_name={post.image_url}
				/>
			</div>
		{/each}
	</div>
{:else}
	<h2>No blog posts available</h2>
{/if}
