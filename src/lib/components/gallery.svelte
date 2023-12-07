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
			<ul>
				{#each groupedPosts[tag] as post}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<button on:click={() => selectPost(post)} class="secondary contrast">
						{post.title}
					</button>
				{/each}
			</ul>
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
		grid-template-columns: 1fr 3fr; /* sidebar and main content */
	}
</style>
