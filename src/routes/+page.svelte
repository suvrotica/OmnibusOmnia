<script>
	import Title from '$lib/components/title.svelte';

    let text = 'Hello, world! "This," she said, "is a test. Is it not?" Yes: it is!';

    // Function that wraps punctuation in a span
    const enhancePunctuation = (input) => {
        return input.replace(/([.,;:!?'"()])/g, '<span class="big-punctuation">$1</span>');
    };

    // Call the function on text change
    $: enhancedText = enhancePunctuation(text);
</script>


<!-- Use @html to bind the enhanced text -->
<p>{@html enhancedText}</p>

<Title stringA="The" stringB="Name" />
<hr>
<div class="grid">
<div><img src="_storage_emulated_0_Android_data_gr.pixelab.sketch_files_DCIM_sketch_camera_sketch1689294617979.jpg" alt="Italian Monk holding Omnibus Omnia "> </div>
  <div>
<br>

<p>
	I couldn't just flippantly, verbosely and ineloquently describe this blog as a scratchpad of thoughts, a much sought-after extension of my embarrassing tangle of nerves, unrelated
	fancies and figments strewn around and rattling loose in it, collectibles from the waste basket scraps that should have seen a shredder, or, somewhat more crudely, <b>everything</b> about
	<b>anything</b>. But these are <u>exactly</u> what I always wanted my blog to be. I'm not a prisoner to the usual
	boundaries that limit most people, and I wanted a place where a weirdo like me could find a way to
	read weird wanderings and not feel weird.
</p>
<p>
	In Latin, an "omnibus" is a volume containing several novels or other items previously published separately. 
This usage likely comes from the idea of bringing together many works "for all" to enjoy. 
"Omnibus" thus implies "for all." <p>"Omnia" means "all things" or "everything."</p> <p>Thus, "Omnibus Omnia" translates to "For Everyone, About
	Anything." And that satisfies the school boy inside me. The phrase expresses the idea of inclusiveness and universal provision. A pompous name for something that could have
	otherwise been ignored as a trifle.
</p>

<p>
	Omnibus Omnia can't be intended as a dictionary, but perhaps as an universal melting pot of information, the ideas, and, if I'm
	allowed some more big words, wisdom! Just by keeping it open, this wide-ranging consortium, allows the limit to be the ever-expanding
	horizon of my imagination, every conceivable topic and field of inquiry as a beacon
	of diverse and inclusive discourse. I can get a bit carried away, sometimes.
</p>
</div>
</div>
<div class="grid">
<div>
<p>
Here, I'm free to explore the vast realms of human
	feats and foibles, fucks and farts, and like Tennyson's Ulysses and his mariners, if you as a reader come on this journey, sharing and receiving insights on a stage
	that questions our assumptions and where the answers always lead to more
	thrilling journeys. So whether you're a seasoned someone or a curious commoner, an artist or an amateur, a ponderer or a pragmatist, join me in the infinite mosaic of collective
	wisdom we have to explore. Welcome to Omnibus Omnia. 
</p>
</div>
<div class="svg" >
<img src="svg_horse-dick.svg" alt="Italian Monk holding Omnibus Omnia "> 
  </div>
</div>
<br>

<pre class="poem">
Though much is taken, much abides; and though
We are not now that strength which in old days
Moved earth and heaven, that which we are, we are—
One equal temper of heroic hearts,
Made weak by time and fate, but strong in will
To strive, to seek, to find, and not to yield.
</pre>

<style>
.big-punctuation {
        font-size: 150%;
        color: red;
    }

.svg {
      background-color: white;
      display: inline-block; /* Ensuring container wraps the image */
    }

	.poem {
		line-height: 1.5;
		padding: 10px;
		color: black;
		background-color: #e4d8d8;
		border: 1px solid #ccc;
		font-family: 'Indie Flower', cursive;
	}
</style>
