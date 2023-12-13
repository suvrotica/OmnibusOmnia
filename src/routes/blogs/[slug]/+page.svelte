<script>
	import { createSlug } from '$lib/utility-functions';
	import Post from '$lib/components/post.svelte';
	import { invalidate, goto } from '$app/navigation';

	export let data;
	const post = data.post;

	const metaDataRows = data.metaDataRows;

	async function navigateAndInvalidate(event, title) {
		event.preventDefault(); // Prevent default action
		const slug = createSlug(title);
		await goto(`/blogs/${slug}`);
		await invalidate(`/blogs/${slug}`);
	}
</script>

<main class="grid">
	<Post {post} />
	<aside>
		<ul>
			{#each metaDataRows as metaDataRow}
				<li>
					<button on:click={(event) => navigateAndInvalidate(event, metaDataRow.title)}>
						{metaDataRow.title}</button
					>
				</li>
			{/each}
		</ul>
	</aside>
</main>
