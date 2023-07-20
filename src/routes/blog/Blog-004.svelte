<script lang="ts">
	import Title from '$lib/components/title.svelte';

	import { orientation } from '$lib/orientation';
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv,
		enhancePunctuation,
		replace4bWithBreak,
		replace42tableWithHTMLTable
	} from '$lib/utility-functions';
	export let image_name = '';
	export let blogContent = '';

	const { title, date, remainingContent } = extractTitleAndDate(blogContent);

	let newBlogContent = replaceBqWithDiv(remainingContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = replace4bWithBreak(newBlogContent);
	newBlogContent = replace42tableWithHTMLTable(newBlogContent);
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

<div role="button" class="secondary">{date} </div>
<div role="button" class="contrast">{@html <h1>title</h1>} </div>
<article>
	<article class="float-left">
		<img src="/{image_name}" alt="pic" />
	</article>

	<p>{@html newBlogContent}</p>
</article>

<style>
	.float-left {
		background-color: white;

		float: left;
		margin: 10px;
		width: 100%;
	}
</style>
