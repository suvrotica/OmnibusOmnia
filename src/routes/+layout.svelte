<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import '@picocss/pico';
	let fontLoaded = false;

	let fontLink;

	onMount(() => {
		fontLink = document.createElement('link');
		fontLink.href =
			'https://fonts.googleapis.com/css2?family=Abel&family=Gaegu:wght@300;400;700&family=Poppins:ital,wght@0,100;1,100&family=Montserrat:wght@300&family=Amatic+SC:wght@400;700&family=Kablammo&family=Great+Vibes&family=Indie+Flower&display=swap';
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
    background-image: url("Back.jpg");
    background-size: cover;
line-height:0.72;
  
		color: black;
font-weight: 100;
font-size:smaller;
		
		
		font-family: 'Montserrat', sans-serif;
	}
</style>
