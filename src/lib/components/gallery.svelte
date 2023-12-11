<script>
	import Post from '$lib/components/post.svelte';

	export let tag;
	export let groupedPosts;
	let selectedPost;

	function selectPost(post) {
		selectedPost = post;
	}

	$: gridLayout = selectedPost ? '1px auto' : '1fr 6fr';
	$: isNavVisible = selectedPost == null;
</script>

<details>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<summary role="button" class="contrast" on:click={() => (selectedPost = null)}>{tag} ({groupedPosts[tag].length})</summary>
	<div class="container" style="grid-template-columns: {gridLayout};">
		<aside class="sidebar">
			<nav class={isNavVisible ? '' : 'hide-nav'}>
				{#each groupedPosts[tag] as post}
					<button role="button" class="contrast" on:click={() => selectPost(post)}>
						
                                                <article>
	<figure>
		<figcaption class="contrast">{post.title}</figcaption>
		<img src={post.image_url} alt="pic" />
	</figure>
</article>
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
		/* grid-template-columns is set dynamically in the script */
	}
	.hide-nav {
		display: none;
	}
</style>
