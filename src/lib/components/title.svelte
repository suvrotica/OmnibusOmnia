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

<div>
	<span class="string-initial"> {stringAInitial} </span>
	<span class="string-rest"> {stringARest} </span>

	<span class="string-initial"> {stringBInitial} </span>
	<span class="string-rest"> {stringBRest} </span>
</div>

<style>
	.string-rest {
		font-size: 30px;
		color: #ffffff;
		line-height: 1.5;
		margin: 0;
		padding-left: 0px;
		position: relative;
	}
	.string-initial {
		position: relative;
		top: 0;
		left: 0;
		color: #ffffff;
		font-size: 40px;
		line-height: 1;
		font-weight: bold;
		color: #ffffff;
		font-family: 'Kablammo', cursive;
	}
</style>
