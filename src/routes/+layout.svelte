<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import '@picocss/pico';
	let fontLoaded = false;
	import { inject } from '@vercel/analytics';

	inject();
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

<svelte:head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="container">
	<article>
		<header><Header /></header>
		<slot />
		<footer>Suvro the Ghosh who Shits</footer>
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
	:global(summary) {
		font-family: 'Gaegu', cursive;
		font-weight: 300;
		font-size: 24px;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Amatic SC', cursive;
	}
	:global(.float-left) {
		float: left;
		margin-right: 2px; /* Adjust as needed for spacing between the image and text */
	}
	:global(.float-right) {
		float: right;
		margin-left: 2px; /* Adjust as needed for spacing between the image and text */
	}

	:global(.yellow-banner) {
		font-family: 'Gaegu', cursive;
		text-align: center;
		font-weight: 700;
		color: black;
		background-color: rgb(236, 236, 182);
		border: 2px solid black;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		margin-top: 10px;
	}
	:global(.svg) {
		background-color: white;
	}
	:global(.content) {
		background-color: rgb(46, 44, 44);
		margin-top: 10px;
	}
	:global(img, figure) {
		display: block;
		margin: auto;
	}
	:global(p, article) {
		margin: 5px;
		padding: 5px;
		text-align: justify;
		line-height: 0.9;
		font-weight: 100;
		font-size: 20px;
		color: whitesmoke;
	}

	:global(.big-punctuation) {
		font-family: 'Poppins', sans-serif;
	}
	:global(.bgPaper) {
		background-color: #ece3cc;
	}
	:global(.poem) {
		font-family: 'Gaegu', cursive;

		background-color: #ece3cc;
		box-shadow: none;
		/*background-image: url('/back.webp');

  
  background-color: rgba(255, 255, 255, 0.25); 
  filter: brightness(120%); */

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

	:global(textarea) {
		width: 100%;
		height: 200px;
		resize: vertical;
	}
</style>
