<script lang="ts">
	import Title from '$lib/components/title.svelte';

	import { orientation } from '$lib/orientation';
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv,
		enhancePunctuation
	} from '$lib/utility-functions';
	export let image_name = '';
	export let blogContent = '';

	const { title, date, remainingContent } = extractTitleAndDate(blogContent);

	let newBlogContent = replaceBqWithDiv(remainingContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = enhancePunctuation(newBlogContent);
</script>

<!-- <div>Window width: {innerWidth}, height: {innerHeight}</div> -->

<div>
	{#if $orientation === 'landscape'}
		<!-- Landscape-specific content -->
		<p>This is a landscape view.</p>
	{:else}
		<!-- Portrait-specific content -->
		<p>This is a portrait view.</p>
	{/if}
</div>
<Title stringA="Blog" stringB={title} When={date} />

<div class="grid">
	<article>
		<img src="/{image_name}" alt="pic" />
	</article>

	<div>{@html newBlogContent}</div>
</div>
<article>
	<article class="float-left">
		<img src="/{image_name}" alt="pic" />
	</article>

	<p>{@html newBlogContent}</p>
</article>

<style>
	.float-left {
		float: left;
		margin: 0px;
		width: 60%;
	}
</style>
