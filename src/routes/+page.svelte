<script lang="ts">
	import Title from '$lib/components/title.svelte';
	import B1 from '../routes/blog/Blog-001.svelte';
import B2 from '../routes/blog/Blog-002.svelte';

	let p1 = `I couldn't just42brflippantly, verbosely and ineloquently describe this blog as a scratchpad of
			thoughts, a much sought-after extension of my embarrassing tangle of nerves, unrelated fancies
			and figments strewn around and rattling loose in it, collectibles from the waste basket scraps
			that should have seen a shredder, or, somewhat more crudely, <b>everything</b> about
			<b>anything</b>. But these are <u>exactly</u> what I always wanted my blog to be. I'm not a prisoner
			to the usual boundaries that limit most people, and I wanted a place where a weirdo like me could
			find a way to read weird wanderings and not feel weird. <hr>
			In Latin, as a child I've seen the word "omnibus" used as if to mean a volume containing several novels or other items previously
			published separately. This usage likely comes from the idea of bringing together many works
			"for all" to enjoy, and that may be the real meaning, but I wanted to hold on to a fat book. And "omnia" expresses the idea of inclusiveness and
			universal provision, basically anything. So, in the end it's a fat book about anything, in a pompous way, lest people ignore it as a
			trifle and think I'm a fool. Omnibus Omnia can't be intended as a dictionary, albeit fat, but perhaps as an universal melting pot of
			quixotic ideas, and, if I'm allowed some more big words, wisdom! Just by keeping the book 
			open, this wide-ranging consortium, will allow me to test the limit of the ever-expanding horizon, 
every conceivable topic and field of inquiry as a beacon of diverse and inclusive
			discourse and so on. I can get a bit carried away, sometimes.`;

	let p2 = `Here, ¡Ay, caramba! I'm free to explore the vast as well as the forbidden realms of human feats and foibles, fucks and farts, feces and fraternities and by holy golly in bengali, 
			jai maa kali, like Tennyson's Ulysses and his mariners, if you as a reader come on this journey, sharing and
			receiving insights on a stage that questions our assumptions and where the answers always lead
			to more thrilling journeys. So whether you're a seasoned someone or a curious commoner, an
			artist or an amateur, a ponderer or a pragmatist, join me in the infinite mosaic of collective
			wisdom we have to explore. Welcome to Omnibus Omnia.`;
	// Function that wraps punctuation in a span
	const enhancePunctuation = (input: string) => {
		return input.replace(/([.,;:!?'"()])/g, '<span class="big-punctuation">$1</span>');
	};
const enhanceMarkup = (input: string) => {
    return input.replace(/42br/g, '<br>');
};


	// Call the function on text change
	$: {
    enhancedText = enhancePunctuation(enhanceMarkup(p1));
  }
</script>

<!-- Use @html to bind the enhanced text -->

<Title stringA="The" stringB="Name" />
<hr />
<div class="grid">
	<article>
		<img src="monk.jpg" alt="Italian Monk holding Omnibus Omnia " />
	</article>

	<div>
		<br />

		<p>{@html enhancedText}</p>
	</div>
</div>


<Title stringA="Welcome by" stringB="Holy Golly" />
<hr/>
<div class="grid">
	<article>
		<p>{@html enhancePunctuation(p2)}</p>
		<article class="poem">
			Though much is taken, much abides; and though...We are not now that strength which in old days...
			Moved earth and heaven, that which we are, we are—...One equal temper of heroic hearts,...Made
			weak by time and fate, but strong in will...To strive, to seek, to find, and not to yield.
		</article>
	</article>
	<article class="svg">
		<img src="svg_horse-dick.svg" alt="Man horse dick" />
	</article>
</div>
<br />

<B1 />
<B2 />

<style>
	

	
</style>
