<script lang="ts">
	const const_string_titleImageURL =
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/Logo-CLaiXHz8pBKvoZAtMDzKZmgF7Bu7SP.png';
</script>

<nav>
	<ul>
		<li><img class="logo" src={const_string_titleImageURL} alt="Suvro Ghosh" /></li>
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
		color: rgb(94, 90, 90);
		font-size: larger;
	}
	li {
		display: inline;
		margin-right: 10px;
	}
	.logo {
		width: 600px;
	}
	nav {
		margin: 0px;
		padding: 0px;
		background: linear-gradient(to right, black, white);
	}
</style>
