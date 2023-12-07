<script lang="ts">
	import * as config from '$lib/config';
	import Title from '$lib/components/title.svelte';
</script>

<!-- Title -->
<div class="title">
	<Title stringA="SuvroGhosh" stringB="Blog" />
</div>

<nav>
	<!-- Navigation -->

	<ul>
		<li><a href="/">Home</a></li>
	</ul>
	<ul>
		<li><a href="/disclaimer">Disclaimer</a></li>
		<li><a href="/upload">Upload</a></li>
		<li><a href="/update">Update</a></li>
		<li><a href="/post">Post</a></li>
		<li><a href="/blogs">Blogs</a></li>
	</ul>
</nav>

<style>
	nav li,
	a {
		color: white;
		font-size: larger;
	}
</style>
