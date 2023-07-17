<script lang="ts">
	import Title from '$lib/components/title.svelte';

	import { onMount } from 'svelte';
	let isLandscape;

	if (typeof window !== 'undefined') {
		// check if window object is available
		isLandscape = window.innerWidth > window.innerHeight;

		function handleResize() {
			isLandscape = window.innerWidth > window.innerHeight;
		}

		onMount(() => {
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		});
	}
</script>

<div>{$isLandscape ? 'Landscape orientation detected.' : 'Portrait orientation detected.'}</div>

<Title stringA="Huge Ass" stringB="Horn" />

<div class="grid-container">
	<article class="svg">
		<img src="toota164883d.svg" alt="horse" />
	</article>

	<article class="poem, column">
		You must know, you can't be slow,
		<br />Got that huge ass horn to toot. <br />
		Otherwise they think you're not,<br />
		Even worth a fucking smelly poot.
		<br /><br />
		Nobody really cares what you know,<br />
		And by now you ought to see.<br />
		The race of men want their ass licked,<br />
		Paid as a slave, eat shit crumbs free.
		<br /><br />
		It's just our species that has it's head,<br />
		Right and tight and way inside its ass.<br />
		Ants and many others cooperate,<br />
		Swarm intelligence is another class.<br /><br />

		No ant a prude, can't call them rude,<br />
		Their language we don't really know.<br />
		Euphemistic superlative shit don't us fit,<br />
		Sissy slaves with balls that need to grow.<br />
		<br />
		The race of thoughtless chase,<br />
		Of purses fat, and big fat cat.<br />
		We don't understand why and,<br />
		Realize it was on shit we sat.<br />
		<br />
		Add to this just a drop of piss,<br />
		And we shall they say overcome.<br />
		I doubt this route, on our<br />
		Face the fraudsters jerk cum.<br />
		<br />
		The race of men, in their semen,<br />
		Soaked and perfectly full of stink.<br />
		Pieces of paper with colossal lies,<br />
		Resumes are shit stains with paper and ink.<br />
		<br />
		Holy moley, tits up bengali,<br />
		I am resigned to my shit fate.<br />
		Can't fight a billion army of con,<br />
		Rhyming sense before it's too late.<br />
		<br />
		Shouldn't you be fucking off or something,<br />
		I agree, I should, an old friendless man.<br />
		You guys carry on and good luck, <br />
		Try to be that man you say you can. <br />
	</article>
</div>
