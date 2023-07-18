<script lang="ts">
	import Title from '$lib/components/title.svelte';

	import { orientation } from '$lib/orientation';
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv
	} from '$lib/utility-functions';

	export let blogContent = `Title:Lonely Farts
  Date:2023-jul-19
42br
  Being able to fart without hindrance is one of the important bits of being in the middle of your life, enjoying not having the smell bother you or even frolicking at the indulgence, the sensations of a raw vibrating sphincter, and the various auditory acoustics that can only be mastered in seclusion. Well, at least when I sit depressed, I wallow in my own stink and no one else's, which is how I like to think of loneliness. It's better than the constant harangue that you have to live through in relationships and the endless silent farts.
  42br
Unlike most of the other ungrateful specimens, I am not apologetic about the constituents of what comes out of me. I have several sophisticated chemical factories that are toiling to sift through the bullshit of pollution and plastic, and fuck knows what else, to keep me alive.
42br
No need to get alarmed, though; it's just nitrogen, oxygen, carbon dioxide, hydrogen, and methane like everyone else that I produce. The smell is from Hydrogen Sulfide (H2S), they tell you, the "rotten egg" flavor in the smell, but there's more. For instance, methanethiol (CH3SH) is the rotten vegetable or garlic, dimethyl sulfide (CH3)2S has a sweet, cabbage-like odor, disulfide (CH3)2S2 has a garlic-like odor, and there's the trisulfide (CH3)2S3 that's even more garlicky. There's helluva more. Lot more. 
42br
Everyone's gut microbiota is unique; my fart may be hardly detectable even with an admiring sniffer nose held right next to the pumping station, while yours may cause the Indian parliament to be emptied out and a national emergency declared. In which case, you're just the candidate India is looking for as a prime sinisterial candidate. Don't forget to post your CV on LinkedIn for that role; they're desperate. In Kolkata, farts are used in various deceptive ways to make it look like someone else farted—a ventriloquism of farts that's been perfected over many years of diligent absence of other fruitful occupational choices. This is the sort of thing the politics of the day are mostly about, and the stench can make you throw up your mother's milk.
42br
Of course, since these guys hiring hold their asses very tight, the word to use on your cv would be flatulence. The term "flatulence" is derived from the Latin word "flatus," which means "blowing" or "breathing." In medical terminology, "flatus" is used to refer to gas generated or held in the stomach or intestines. Over time, "flatus" eased into "flatulence" in English, meaning the people who always want to complicate things so that they can charge a fee. The word I use that the polished crowd wouldn't exhibit on a CV can be traced back to the Old English word "feortan," which means "to break wind." This Old English word is of Proto-Germanic origin, from the root "fert-," which also means to break wind. In Old High German "ferzan," the Norse "freta," and the Middle Dutch "vaerten," people farted similarly back in those days, etymologically speaking.`;

	const { title, date, remainingContent } = extractTitleAndDate(blogContent);

	let newBlogContent = replaceBqWithDiv(remainingContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
</script>

<!-- <div>Window width: {innerWidth}, height: {innerHeight}</div> -->

<div>
	{#if $orientation === 'landscape'}
		<!-- Landscape-specific content -->
		<p>This is a landscape view.</p>
	{:else}
		<!-- Portrait-specific content -->
		<p>This is a portrait view.</p>
	{/if}
</div>
<Title stringA="Blog" stringB={title} When={date} />

<div class="grid">
	<img src="/04fa3f64-191b-4c73-a119-b53127c17841.png" alt="b2" />
	<div>{@html newBlogContent}</div>
</div>
