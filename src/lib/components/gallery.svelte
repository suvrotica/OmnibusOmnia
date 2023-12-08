<script>
	import Post from '$lib/components/post.svelte';

	export let tag;
	export let groupedPosts;
	let selectedPost;

	function selectPost(post) {
		selectedPost = post;
	}
</script>

<details>
	<summary>{tag} ({groupedPosts[tag].length})</summary>
	<div class="container">
		<aside class="sidebar">
			<nav>
				{#each groupedPosts[tag] as post}
					<button class="yellow-banner" on:click={() => selectPost(post)}>
						{post.title}
					</button>
				{/each}
			</nav>
		</aside>
		<div class="content">
			{#if selectedPost}
				<Post post={selectedPost} />
			{/if}
		</div>
	</div>
</details>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 6fr; /* sidebar and main content */
	}
</style>
