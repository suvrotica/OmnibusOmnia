<script>
	export let blogPosts;
	console.log(data);
	import Post from '$lib/components/post.svelte';
</script>

{#if blogPosts && blogPosts.length > 0}
	{#each blogPosts as post}
		<Post
			id={post.id}
			title={post.title}
			date={post.created_at
				.toLocaleDateString('en-GB', {
					year: 'numeric',
					month: 'short',
					day: '2-digit'
				})
				.replace(/\s/g, '-')}
			tagSet={post.tag_set}
			blogContent={post.content}
			image_name={post.image_url}
		/>
	{/each}
{:else}
	<h2>No blog posts available</h2>
{/if}
