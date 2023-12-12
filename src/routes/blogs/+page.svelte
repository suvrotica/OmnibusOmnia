<script>
	export let data;
	import Gallery from '$lib/components/gallery.svelte';

	function groupPostsByTag(posts) {
		const grouped = {};
		posts.forEach((post) => {
			// Split the tag_set string into an array of tags
			const tags = post.tag_set ? post.tag_set.split(',') : ['Other'];

			tags.forEach((tag) => {
				tag = tag.trim();
				if (!grouped[tag]) {
					grouped[tag] = [];
				}
				// Push only the post ID instead of the entire post
				grouped[tag].push(post.id);
			});
		});
		return grouped;
	}

	const groupedPosts = groupPostsByTag(data.blogPosts);
</script>

{#if Object.keys(groupedPosts).length > 0}
	{#each Object.keys(groupedPosts) as tag}
		<!-- Pass only the post IDs to the Gallery component -->
		<Gallery {tag} posts={groupedPosts[tag]} />
	{/each}
{:else}
	<h2>No blog posts available</h2>
{/if}
