<script lang="ts">
import Title from "./title.svelte";
	const logoImage =
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/WhatsApp%20Image%202023-12-08%20at%208.44.03%20AM-ImniBRJM2kbWFY5jYu8lJWkthIgRPo.jpeg';
</script>

<Title />
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
