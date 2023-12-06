<!-- Gallery.svelte -->
<script>
	export let posts = [];
  
	// Function to extract image URLs from posts
	const getImageUrls = (posts) => posts.map(post => post.image_url); 
  
	// Derived array of image URLs
	$: imageUrls = getImageUrls(posts);
  </script>
  
  <style>
	/* Your existing gallery styles */
  </style>
  
  <div class="gallery">
	{#each imageUrls as imageUrl}
	  <!-- svelte-ignore a11y-missing-attribute -->
	  <img src={imageUrl}>
	{/each}
  </div>
  