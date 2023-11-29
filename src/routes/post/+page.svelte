<script>
	let title = '';
	let content = '';
	let imageUrl = '';
	let tagSet = '';
</script>

<form method="post">
	<input type="text" bind:value={title} name="title" placeholder="Title" required />
	<textarea
		bind:value={content}
		name="content"
		placeholder="Content"
		rows="10"
		cols="50"
		required
	/>
	<input type="text" bind:value={imageUrl} name="image_url" placeholder="Image URL" required />
	<input
		type="text"
		bind:value={tagSet}
		name="tag_set"
		placeholder="Enter tags (comma-separate them e.g. tag1,tag2,tag3)"
		required
	/>
	<button type="submit">Submit Post</button>
</form>

<style>
	textarea {
		width: 100%; /* or any specific width */
		height: 200px; /* or any specific height */
		resize: vertical; /* allows vertical resizing */
	}
</style>
