<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import '@picocss/pico';
	let fontLoaded = false;

	let fontLink;

	onMount(() => {
		fontLink = document.createElement('link');
		fontLink.href =
			'https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Poppins:ital,wght@0,100;1,100&family=Montserrat:wght@300&family=Amatic+SC:wght@400;700&family=Kablammo&family=Great+Vibes&family=Indie+Flower&display=swap';
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
	:global(p) {
		text-align: justify;
		line-height: 0.75;
		font-weight: 100;
		font-size: larger;
	}
	:global(.big-punctuation) {
		font-family: 'Poppins', sans-serif;
	}
:global(.poem) {
background-color: #f7f3e9;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise' x='0%25' y='0%25' width='100%25' height='100%25'%3E%3CfeTurbulence baseFrequency='0.02' numOctaves='5' seed='2' stitchTiles='stitch'%3E%3Canimate attributeName='baseFrequency' values='0.02;0.05;0.02' dur='60s' repeatCount='indefinite'/%3E%3C/feTurbulence%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9' result='color'%3E%3Canimate attributeName='values' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9;1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7;1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9' dur='60s' repeatCount='indefinite'/%3E%3C/feColorMatrix%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: cover;

  
		color: black;
font-weight: 100;
		
		
		font-family: 'Gaegu', cursive;
	}
</style>
