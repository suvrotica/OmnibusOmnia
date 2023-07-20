<script lang="ts">
	import Title from '$lib/components/title.svelte';
	import B1 from '../routes/blog/Blog-001.svelte';
	import B2 from '../routes/blog/Blog-002.svelte';
	import B3 from '../routes/blog/Blog-003.svelte';
	import B4 from '../routes/blog/Blog-004.svelte';
	import { getCurrentDateAsString } from '$lib/date';

	const currentDate: string = getCurrentDateAsString();

	let p1 = `I couldn't just flippantly, verbosely and ineloquently describe this blog as a scratchpad of
			thoughts, a much sought-after extension of my embarrassing tangle of nerves, unrelated fancies
			and figments strewn around and rattling loose in it, collectibles from the waste basket scraps
			that should have seen a shredder, or, somewhat more crudely, <b>everything</b> about
			<b>anything</b>. But these are <u>exactly</u> what I always wanted my blog to be. I'm not a prisoner
			to the usual boundaries that limit most people, and I wanted a place where a weirdo like me could
			find a way to read weird wanderings and not feel weird.42br42brIn Latin, as a child I've seen the word "omnibus" used as if to mean a volume containing several novels or other items previously
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
</script>

<!-- Use @html to bind the enhanced text -->

<Title stringA="The" stringB="Name" When={currentDate} />
<hr />
<div class="grid">
	<img src="monk.jpg" alt="Italian Monk holding Omnibus Omnia " />

	<div>
		<br />

		<p>{@html enhancePunctuation(enhanceMarkup(p1))}</p>
	</div>
</div>

<Title stringA="Welcome by" stringB="Holy Golly" When={currentDate} />
<hr />
<div class="grid">
	<article>
		<p>{@html enhancePunctuation(p2)}</p>
		<article class="poem">
			Though much is taken, much abides; and though...We are not now that strength which in old
			days... Moved earth and heaven, that which we are, we are—...One equal temper of heroic
			hearts,...Made weak by time and fate, but strong in will...To strive, to seek, to find, and
			not to yield.
		</article>
	</article>
	<article class="svg">
		<img src="svg_horse-dick.svg" alt="Man horse dick" />
	</article>
</div>
<br />

<B1 />
<B2 />
<B3 />
<B4
	blogContent={`Title:Lonely Farts
	Date:2023-jul-19
  42br
	Being able to fart without hindrance is one of the important bits of being in the middle of your life, enjoying not having the smell bother you or even frolicking at the indulgence, the sensations of a raw vibrating sphincter, and the various auditory acoustics that can only be mastered in seclusion. Well, at least when I sit depressed, I wallow in my own stink and no one else's, which is how I like to think of loneliness. It's better than the constant harangue that you have to live through in relationships and the endless silent farts in the remunerative society.
	42br
  Unlike most of the other ungrateful specimens, I am not apologetic about the constituents of what comes out of me. I have several sophisticated chemical factories that are toiling to sift through the bullshit of pollution and plastic, and fuck knows what else, to keep me alive.
  42br
  No need to get alarmed, though; it's just innocuous nitrogen, oxygen, carbon dioxide, hydrogen, and methane like everyone else that I produce. The smell is from Hydrogen Sulfide (H2S), they tell you, the "rotten egg" flavor in the smell, but there's more. For instance, methanethiol (CH3SH) is the rotten vegetable or garlic, dimethyl sulfide (CH3)2S has a sweet, cabbage-like odor, disulfide (CH3)2S2 has a garlic-like odor, and there's the trisulfide (CH3)2S3 that's even more garlicky. There's helluva more. Lot more. 
  42br
  Everyone's gut microbiota is unique; my fart may be hardly detectable even with an admiring sniffer nose held right next to the pumping station, while yours may cause the Indian parliament to be emptied out and a national emergency declared. In which case, you're just the candidate India is looking for as a prime sinisterial candidate. Don't forget to post your CV on LinkedIn for that role; they're desperate. In Kolkata, farts are used in various deceptive ways to make it look like someone else farted—a ventriloquism of farts that's been perfected over many years of diligent absence of other fruitful occupational choices. This is the sort of thing the politics of the day are mostly about, and the stench can make you throw up your mother's milk.
  42br
  Of course, since these guys hiring hold their asses very tight, the word to use on your cv would be flatulence. The term "flatulence" is derived from the Latin word "flatus," which means "blowing" or "breathing." In medical terminology, "flatus" is used to refer to gas generated or held in the stomach or intestines. Over time, "flatus" eased into "flatulence" in English, meaning the people who always want to complicate things so that they can charge a fee. The word I use that the polished crowd wouldn't exhibit on a CV can be traced back to the Old English word "feortan," which means "to break wind." This Old English word is of Proto-Germanic origin, from the root "fert-," which also means to break wind. In Old High German "ferzan," the Norse "freta," and the Middle Dutch "vaerten," people farted similarly back in those days, etymologically speaking.
42bq("My poot per foot full of soot,
Yellow my thoughts like diarrhea.
My mind is blown when it is flown,
Sitting on my bed in India.
42br
Anger and rage come on stage,
With smelly belly farts wuthering.
Premonitions quite deadly now,
A cyclonic season of farting.
42br
What did I eat for this gas feat,
The charcoal tablets did shit. 
The gods wallowing in the pan,
I'm deeply sorry for it.
42br
Holy my soul, even my asshole,
The pious don't come in parts.
I must rest, must a full body test,
Start smart for my farts.
42br
My shit brown, from this town,
Listens holy the cow Mary.
Thoughts for which I fought,
That farts aren't ordinary.
42br
But in this post my fart I boast,
Super smelly and really gross.
Floating high, now in the sky,
I shoot my shit with force. ")
42br
And yes, you can set your fart on fire. Methane (CH4) in fart, which is also the main component of natural gas, can ignite or explode in a mixture of air at concentrations between 5% and 15%. Hydrogen (H2) in fart is also a highly flammable gas and can form explosive mixtures in the bathroom air at concentrations between 4% and 75%. Chances are you'll burn your asshole and rectum as well. 
42br
In fact, the bacteria don't stop working after we've defecated. In the Victorian era, methane gas buildup in sewer systems led to explosions and fires. The feces rot, giving bacteria a five-star environment without good ventilation and leading to the accumulation of flammable gases, primarily methane, easily ignited by a spark from a lit match or candle flame. Of course, now that we've gotten smart with plumbing, The trap, a standard feature, is a U-, S-, or J-shaped pipe located below or within a plumbing fixture that retains a small amount of water to prevent sewer gases from entering buildings.`}
	image_name="_storage_emulated_0_Android_data_gr.pixelab.sketch_files_DCIM_sketch_camera_sketch1689722290889.jpg"
/>
<B4
	blogContent={`Title:About Time
	Date:2023-jul-20
  42brThe monoculture that we want to fancy as our reality is sort of poked with a bunch of funny little shitty holes that, unless you're interested in annual membership to the Indian Heathens Club, you'd not notice. Most people walk through life ironing irony out of their lives or never really digging into contradictions, looking up frocks, and that sort of thing. They end up half-content in a state of bliss that is also known by its more pejorative connotation of ignorance, except for a nagging feeling they have hidden all their lives—that inquisitive bit that they suppressed.
42br
As a child growing up with half-practicing Hindu parents and a generational tolerance for haphazard apocrypha and hearsay, I took it upon myself to figure things out on my own. It's not that these were esoterica sold in special shops, but concepts that didn't penetrate the adult subconscious's unthinking layer of opaque blubber. People didn't get it, or comprehension lacked the scrutiny it normally raises in a thinking mind, a conditioning of the colonial school system.
42br
The first that I remember was this deal with the century; why is it that we call this the 21st when clearly there's a 20 in 2023?
42br
It turns out that this is because our current system of numbering years and centuries does not include a year 0. The year 1 BC is immediately followed by the year AD 1. The

The 1st century AD includes the years AD 1 through AD 100.

The 2nd century AD includes the years AD 101 through AD 20.


.... So on....

The 21st century AD includes the years AD 2001 through AD 2099.

Essentially, anytime you see AD Year, Century = Ceiling [Year / 100], ceiling returns the integer that is the nearest higher whole number rounded up.

So 2023 is the ceiling (20.23), or 21.

Another way is to separate out the parts 20|23, and then the century is 20+1 or 21.
	`}
	image_name="_storage_emulated_0_Android_data_gr.pixelab.sketch_files_DCIM_sketch_camera_sketch1689795974635.jpg"
/>
<B4
	blogContent={`Title: Prescription Abbreviations
	Date:2023-jul-21
  
  42br
A lot of people get confused with the abbreviation on a prescription that physicians use. Here are a few that might make your life useful. I just saw a post by AnjonBanerjee Banerjee and thought I'd post this information. 
42br
42table("ad lib: as desired
a.c.: ante cibum (before meals)
b.i.d.: bis in die (twice a day)
c: cum (with)
cap.: capsule
gtt.: guttae (drops)
h.s.: hora somni (at bedtime)
NPO: nil per os (nothing by mouth)
o.d.: omne in die (once a day)
p.c.: post cibum (after meals)
p.o.: per os (by mouth)
p.r.n.: pro re nata (as needed)
q.d.: quaque die (every day)
q.h.: quaque hora (every hour)
q.i.d.: quater in die (four times a day)
q.o.d.: quaque altera die (every other day)
q.s.: quantum satis (as much as is sufficient)
s.o.s.: si opus sit (if necessary)
stat: immediately
t.i.d.: ter in die (three times a day)
ung.: unguentum (ointment)
aa: of each
aq: aqua (water)
comp: compound
dil: dilute
ex: extract
fl: fluid
gr: grain
inj: injectio (injection)
liq: liquid
mixt: mixture
non rep: non repetatur (do not repeat)
oint: ointment
pulv: pulvis (powder)
q.s.p.: quantum satis pro (quantity sufficient for)
sol: solution
supp: suppositorium (suppository)
susp: suspension
tab: tablet
tr: tinctura (tincture)
ungt: unguentum (ointment)
ad: ad (to, up to)
alt. dieb.: alternis diebus (every other day)
bis in m.: bis in mensem (twice a month)
ex aqua dest.: ex aqua destillata (from distilled water)
gttt.: guttae (drops)
h.: hora (hour)
i.m.: intramuscularis (intramuscular)
i.v.: intravenosus (intravenous)
m.f.: misce fiat (mix and make)
m.d.s.: mane, deinde somno (in the morning, then at bedtime)
noct.: nocte (at night)
o.m.: omni mane (every morning)
p.r.: per rectum (rectally)
p.v.: per vaginam (vaginally)
q.a.d.: quaque altera die (every other day)
q.h.s.: quaque hora somni (every bedtime)
q.p.m.: quaque post meridiem (every afternoon)
s.c.: subcutaneus (subcutaneous)
s.i.d.: semel in die (once a day)
t.o.: ter opus (three times as needed)")

42br 
And these are commonly used words that are used:
42table("Ad: to, toward (e.g., ad libitum: as desired)
Ante: before (e.g., ante cibum: before meals)
Aqua: water (e.g., aqua purificata: purified water)
Cum: with (e.g., cum cibis: with food)
In: in, into (e.g., intramuscularis: intramuscular)
Inter: between (e.g., intercostalis: intercostal)
Post: after (e.g., postoperative: after surgery)
Pre: before (e.g., preoperative: before surgery)
Pro: for, in favor of (e.g., pro re nata: as needed)
Sub: under (e.g., subcutaneus: subcutaneous)
Trans: across, through (e.g., transdermal: through the skin)
Ultra: beyond, excessive (e.g., ultraviolet: beyond violet light)
Via: by way of, through (e.g., via oralis: by mouth)")
42br 
Latin is sort of the traditional, historical, universal language that's concise and provides a standardized system for everyone to refer to the same thing. Although I don't know why doctors insist on being illegible in addition to being this inscrutable. 
42br `}
	image_name="04fa3f64-191b-4c73-a119-b53127c17841 (1).svg"
/>

<style>
</style>
