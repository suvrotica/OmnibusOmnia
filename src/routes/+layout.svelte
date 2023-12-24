<script>
	import Header from '$lib/components/header.svelte';
	import '@picocss/pico';
	const title = 'Suvro Ghosh Blog';
	const description =
		"Dive into the world of technology and opinion with a blog from Suvro Ghosh, where personal insights meet professional expertise. Explore in-depth tutorials, latest tech trends, and personal stories from a seasoned leader's perspective. Join Suvro and the community of tech enthusiasts and start enhancing your skills today!";
</script>

<svelte:head>
	<link rel="icon" href="https://fav.farm/💩" />
	<link
		href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Amatic+SC:wght@400;700&family=Poppins:ital,wght@0,100;1,100&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
		rel="stylesheet"
	/>

	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
<header><Header /></header>
<main>
	<slot />
</main>
<footer>Suvro the Ghosh who Shits</footer>

<style>
	header,
	footer,
	main {
		margin: 1em;
	}

	:global(body) {
		font-family: 'Gaegu', cursive;
		font-weight: 300;
	}
	:global(summary) {
		font-family: 'Gaegu', cursive;
		font-weight: 300;
		text-align: left;
		font-size: 20px;
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

	:global(.grid-music) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1px;
		padding: 0px;
		margin: 0px;
	}

	:global(.grid-music-info) {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-gap: 1px;
		padding: 0px;
		margin: 0px;
	}

	:global(figcaption) {
		background-color: white;
		text-align: center;
	}
	:global(.yellow-banner) {
		font-family: 'Gaegu', cursive;
		font-size: 20px;

		text-align: left;
		font-weight: 300;
		color: rgb(236, 236, 236);
		background-color: rgb(25, 25, 26);
		border: 1px solid rgb(75, 74, 74);
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 0px;
		margin-top: 0px;
		margin-bottom: 2px;
		padding: 0px;
	}
	:global(.svg) {
		background-color: white;
	}
	:global(.content) {
		margin: 1px;
		padding: 1px;
	}
	:global(img, figure) {
		display: block;
		margin: auto;
		background-color: white;
	}
	:global(p) {
		margin: 5px;
		padding: 5px;
		text-align: justify;
		line-height: 0.9;
		font-weight: 100;
		font-size: 20px;
		color: whitesmoke;
	}
	:global(article) {
		padding: 0px;
		margin-top: 0px;
		text-align: justify;
		line-height: 0.9;
		font-weight: 100;
		font-size: 20px;
	}
	:global(.big-punctuation) {
		font-family: 'Poppins', sans-serif;
	}
	:global(.bgPaper) {
		background-color: #ece3cc;
	}
	:global(.poem, kbd) {
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
		padding: 10px;
	}

	:global(textarea) {
		width: 100%;
		height: 200px;
		resize: vertical;
	}
</style>
