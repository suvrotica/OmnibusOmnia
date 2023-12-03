<script>
	import {
		replace42brWithBreak,
		replaceBqWithDiv,
		replace42ytWithIframe,
		replace42picWithFigure,
		replace42picWithFigureR,
		replace4bWithBreak,
		replace42tableWithHTMLTable,
		replace42cWithHighlight
	} from '$lib/utility-functions';

	export let post;

	let topics = post.tag_set.split(',').map((tag) => tag.trim());

	let newBlogContent = replace42cWithHighlight(post.content);
	newBlogContent = replaceBqWithDiv(newBlogContent);
	newBlogContent = replace42ytWithIframe(newBlogContent);
	newBlogContent = replace42picWithFigureR(newBlogContent);
	newBlogContent = replace42picWithFigure(newBlogContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = replace4bWithBreak(newBlogContent);
	newBlogContent = replace42tableWithHTMLTable(newBlogContent);
</script>

<details>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<summary role="button" class="secondary"
		><span role="button" class="contrast">{post.id} </span>{'   ' +
			post.created_at.toLocaleDateString('en-GB', {
				year: '2-digit',
				month: 'short',
				day: '2-digit'
			}) +
			'-' +
			post.title}</summary
	>

	<article class="content">
		<figure>
			<img src={post.image_url} alt="pic" />

			<figcaption class="yellow-banner">
				{post.title}
			</figcaption>
		</figure>
	</article>
	<article class="content">
		{@html newBlogContent}
	</article>
</details>
