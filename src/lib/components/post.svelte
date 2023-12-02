<script>
	import {
		replace42brWithBreak,
		replaceBqWithDiv,
		replace42ytWithIframe,
		replace42picWithFigure,
		replace42picWithFigureR,
		replace4bWithBreak,
		replace42tableWithHTMLTable
	} from '$lib/utility-functions';

	export let post;

	let topics = post.tag_set.split(',').map((tag) => tag.trim());

	let newBlogContent = replaceBqWithDiv(post.content);
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
				><span role ="button" class="contrast" >{
					post.id} </span>{
					post.created_at.toLocaleDateString('en-GB', {
						year: 'numeric',
						month: 'short',
						day: '2-digit'
					}) +
					'-' +
					post.title}</summary>
			<article>
				<article class="float-left svg">
					<figure>
						<img src={post.image_url} alt="pic" />
						<img src="/sign.svg" alt="sign" width="50%" style="display: block; margin: 0 auto;" />
						<figcaption class="yellow-banner">
							{post.title}
						</figcaption>
					</figure>
				</article>
				<p>{@html newBlogContent}</p>
			</article>
		</details>
