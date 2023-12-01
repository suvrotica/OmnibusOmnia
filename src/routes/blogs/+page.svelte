<script>
	export let data;
	import Post from '$lib/components/post.svelte';
</script>

{#if data.blogPosts && data.blogPosts.length > 0}
	{#each data.blogPosts as post}
		<Post
			{post.id}
			{post.title}
			{post.created_at
				.toLocaleDateString('en-GB', {
					year: 'numeric',
					month: 'short',
					day: '2-digit'
				})
				.replace(/\s/g, '-')}
			{post.tag_set}
			{post.content}
			{post.image_url}
		/>
	{/each}
{:else}
	<h2>No blog posts available</h2>
{/if}
