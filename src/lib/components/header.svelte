<script lang="ts">
	import * as config from '$lib/config';
	import Title from '$lib/components/title.svelte';
</script>

<!-- Title -->
<a href="/" class="title">
	<b>{config.title}</b>
</a>
<nav>
	<!-- Navigation -->

	<ul>
		<li>
			<Title stringA="Omnibus" stringB="Omnia" />
		</li>
	</ul>
	<ul>
		<li><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/rss.xml" target="_blank" role="button">RSS</a></li>
	</ul>
</nav>
