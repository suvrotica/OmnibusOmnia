<script lang="ts">
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

<button class="contrast">{date + ' : ' + title} </button>

<article>
	<article class="float-left">
		<img src="/{image_name}" alt="pic" />
<img  src="/sign.svg" alt="sign" />
	</article>



	<p>{@html newBlogContent}</p>
</article>

<style>
	button {
		font-size: 32px;
	}

	.float-left {
		background-color: white;

		float: left;
		margin: 5px;
		width: 100%;
	}
</style>
