<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import '@picocss/pico';
	let fontLoaded = false;
	let fontLink;
	onMount(() => {
		fontLink = document.createElement('link');
		fontLink.href =
			'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&family=Montserrat+Alternates:wght@100;400&family=Abel&family=Gaegu:wght@300;400;700&family=Poppins:ital,wght@0,100;1,100&family=Montserrat:wght@300&family=Amatic+SC:wght@400;700&family=Kablammo&family=Great+Vibes&family=Indie+Flower&display=swap';
		fontLink.rel = 'stylesheet';
		fontLoaded = true;
		document.head.appendChild(fontLink);
	});
</script>

<main class="container">
	<article>
		<header><Header /></header>
		<slot />
		<footer>Footer</footer>
	</article>
</main>

<style>
	header {
		transform: rotate(2deg);
	}
	footer {
		transform: rotate(2deg);
	}

	:global(body) {
		font-family: 'Gaegu', cursive;
		font-weight: 300;
	}
	:global(pre) {
		font-family: 'Gaegu', cursive;
		font-weight: 100;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Amatic SC', cursive;
	}
	:global(.svg) {
		background-color: white;
		display: inline-block; /* Ensuring container wraps the image */
	}
	:global(img) {
		width: 100%;

		height: auto;

		object-fit: cover;
	}
	:global(p, article) {
		text-align: justify;
		line-height: 0.75;
		font-weight: 100;
	}
	:global(.big-punctuation) {
		font-family: 'Poppins', sans-serif;
	}
	:global(.poem) {
		background-color: #ece3cc;
		/* background-image: url('/Back.jpg'); */
		background-size: cover;
		line-height: 0.9;
		color: black;
		font-weight: 700;
	}

	:global(.grid-container) {
		display: grid;

		grid-template-columns: auto auto;

		grid-gap: 1px; /* Optional: Set the gap between columns */
	}

	:global(.column) {
		padding: 30px;
	}
</style>
