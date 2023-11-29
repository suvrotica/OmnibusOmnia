<script lang="ts">
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv,
		enhancePunctuation,
		replace4bWithBreak,
		replace42tableWithHTMLTable,
		replace42picWithFigure,
		replace42ytWithIframe,
		replace42picWithFigureR
	} from '$lib/utility-functions';

	export let title = '';
	export let date = '';
	export let image_name = '';
	export let blogContent = '';
	export let id = '';
	export let tagSet = ''; // Comma-separated tags

	let topics = tagSet.split(',').map((tag) => tag.trim());

	let newBlogContent = replaceBqWithDiv(blogContent);
	newBlogContent = replace42ytWithIframe(newBlogContent);
	newBlogContent = replace42picWithFigureR(newBlogContent);
	newBlogContent = replace42picWithFigure(newBlogContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = replace4bWithBreak(newBlogContent);
	newBlogContent = replace42tableWithHTMLTable(newBlogContent);
</script>

{#each topics as topic}
	<details>
		<!-- svelte-ignore a11y-no-redundant-roles -->
		<summary role="button" class="contrast"
			>{'Post:' + id + ' ' + date + ' : ' + title + ' - ' + topic}
		</summary>
		<article>
			<article class="float-left svg">
				<figure>
					<img src={image_name} alt="pic" />
					<img src="/sign.svg" alt="sign" width="50%" style="display: block; margin: 0 auto;" />
					<figcaption class="yellow-banner">
						{title}
					</figcaption>
				</figure>
			</article>
			<p>{@html newBlogContent}</p>
		</article>
	</details>
{/each}
