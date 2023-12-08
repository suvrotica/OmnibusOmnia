<script lang="ts">
	import * as config from '$lib/config';

	const logoImage =
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/WhatsApp%20Image%202023-12-08%20at%205.35.01%20AM-0sLSKSQC8WfSDoFPnexMsKFiISlpFg.jpeg';
</script>

<nav>
	<!-- Navigation -->

	<ul>
		<li><img class="logo" src={logoImage} alt="Suvro Ghosh" /></li>
	</ul>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/disclaimer">Disclaimer</a></li>

		<li><a href="/blogs">Blogs</a></li>
	</ul>
	<div>
		<!-- This is the root element for the SVG. The width and height set the dimensions of the entire SVG canvas. -->
	</div>
</nav>

<style>
	

	nav li,
	a {
		color: white;
		font-size: larger;
	}
	.logo {
		width: 100px;
	}
	nav {
		margin: 0px;
		padding: 0px;
	}
</style>
