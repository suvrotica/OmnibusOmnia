<script>
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';

	import { onMount } from 'svelte';
	onMount(() => {
		Prism.highlightAll();
	});
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


<style>
    details {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 15px;
        margin-bottom: 20px;
        transition: box-shadow 0.3s ease;
    }

    details:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    summary {
        font-weight: bold;
        cursor: pointer;
        padding: 10px 0;
        outline: none;
    }

    .secondary {
        color: #333;
    }

    .contrast {
        background-color: #f0f0f0;
        padding: 2px 5px;
        border-radius: 3px;
    }

    .content {
        padding-top: 10px;
    }

    figure {
        margin: 0;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .yellow-banner {
        background-color: #ffcc00;
        padding: 5px;
        border-radius: 0 0 5px 5px;
        text-align: center;
    }
</style>

<details>
    <summary role="button" class="secondary">
        <span role="button" class="contrast">{post.id} </span>
        {'   ' + post.created_at.toLocaleDateString('en-GB', {
            year: '2-digit',
            month: 'short',
            day: '2-digit'
        }) + '-' + post.title}
    </summary>

    <article class="content">
        <figure>
            <img src={post.image_url} alt="pic" />
            <figcaption class="yellow-banner">{post.title}</figcaption>
        </figure>
    </article>

    <article class="content">
        {@html newBlogContent}
    </article>
</details>


