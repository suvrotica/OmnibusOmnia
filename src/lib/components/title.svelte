<script lang="ts">
	export let stringA: string;
	export let stringB: string;

	let stringAInitial = '';
	let stringARest = '';
	let stringBInitial = '';
	let stringBRest = '';

	$: {
		if (stringA && stringB) {
			stringAInitial = stringA.charAt(0);
			stringARest = stringA.substring(1);
			stringBInitial = stringB.charAt(0);
			stringBRest = stringB.substring(1);
		}
	}
</script>

<div class="string">
	<span class="string-initial"> {stringAInitial} </span>
	<span class="string-rest"> {stringARest} </span>

	<span class="string-initial"> {stringBInitial} </span>
	<span class="string-rest"> {stringBRest} </span>
</div>

<style>
	.string {
		background: #000;
		transition: background 2s ease-in-out;
	}
	.string-rest {
		font-size: 25px;
		color: #FFF;
		line-height: 1.5;
		margin: 0;
		margin-left: -10px;
		padding-left: 0px;
		position: relative;
font-family: 'Abel', sans-serif;
		transition: color 2s ease-in-out;
	}
	.string-initial {
		position: relative;
		top: 0;
		left: 0;
		color: gray;
		font-size: 30px;
		line-height: 1;

		font-family: 'Abel', sans-serif;
		transition: color 2s ease-in-out, transform 0.5s;
	}
	.string:hover {
		background: #222;
	}
	.string:hover .string-rest {
		color: #ee82ee;
	}
	.string:hover .string-initial {
		color: #ffd700;
		transform: scale(1.1);
	}
</style>
