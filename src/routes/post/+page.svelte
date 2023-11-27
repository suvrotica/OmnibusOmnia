<script>
	let title = '';
	let content = '';
	let imageUrl = '';
</script>

<form method="post">
	<input type="text" bind:value={title} name="title" placeholder="Title" />
	<textarea bind:value={content} name="content" placeholder="Content" />
	<input type="text" bind:value={imageUrl} name="image_url" placeholder="Image URL" />
	<button type="submit">Submit Post</button>
</form>
