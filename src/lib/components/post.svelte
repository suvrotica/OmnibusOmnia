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
        export let id = '';
	export let title = '';
	export let created_at = '';
	export let image_url = '';
	export let content = '';
	export let tag_set = ''; 

	let topics = tag_set.split(',').map((tag) => tag.trim());

	let newBlogContent = replaceBqWithDiv(content);
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
		<summary>{topic} </summary>
		<details>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<summary role="button" class="contrast">{'Post:' + id + ' ' + created_at + ' : ' + title}</summary>
			<article>
				<article class="float-left svg">
					<figure>
						<img src={image_url} alt="pic" />
						<img src="/sign.svg" alt="sign" width="50%" style="display: block; margin: 0 auto;" />
						<figcaption class="yellow-banner">
							{title}
						</figcaption>
					</figure>
				</article>
				<p>{@html newBlogContent}</p>
			</article>
		</details>
	</details>
{/each}
