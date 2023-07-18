<script lang="ts">
	import Title from '$lib/components/title.svelte';

	import { orientation } from '$lib/orientation';
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv
	} from '$lib/utility-functions';

	export let blogContent = `Title:The failed entrepreneur
  Date:2023-jul-18
  In my fleetingly short honeymoon as an entrepreneur,
	I did make some business projection errors and had an uncomfortable feeling about some assumptions
	about how much of reality was really under my control. The variables were real and properly defined,
	and the logic was impeccable, but it didn't work out because business isn't like physics. Nature obeys
	the laws of physics, and if you have understood the problem and your equation models or approximately
	approaches the real physical phenomenon, your products wouldn't betray you like the venal inpecunios
	archipelago in which you're forced to work. 42br For example, you're good. If you are at normal atmospheric
	pressure and temperature, your egg will boil with the simplest cooker design. If you expect this to
	work at an elevation of 65 miles on a suborbital jaunt, it wouldn't. A conspiracy at the equator can't
	ordinarily do anything to subvert the laws of physics to make you look bad, and your product would
	continue to deliver boiled eggs. This is not the same experience you can expect in a business equation,
	even if you have been an unyielding stickler for defining the parameters. 42br 42bq("Success is not final,
	failure is not fatal: It is the courage to continue that counts. - Winston Churchill") 42br Ordinarily,
	partners, associates, or investors may be seditious or flat-out lie about their abilities and commitments.
	You, a person of clear arithmetic, would be persuaded to think that they would follow through, but
	they don't; you can't assume they even intended to. India is a country of maximum seediness, and you
	only learn by burning your ass on the hot chair. That's particularly why the laws of human nature are
	so hard to work with without enough civilized leeway, checks and balances, second and third failover
	insurances, friends who aren't there for your wealth, and people who really understand you, because
	in the midst of crushing failure, most people end up quite lonely. 42br But people like us can't give
	up; I don't know how, even as half-brained and half-mad as I am, if I can survive my frail health and
	drained luck, I can rebuild and reinstall the goodwill and intentions that are quite necessary in this
	increasingly difficult world. There are still some real problems that need good people and practical
	solutions, not ostentatious pretend workarounds that can buy some superficial stardom and social affinity.
	42br 42bq("The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep,
	And miles to go before I sleep. Stopping by Woods on a Snowy Evening By Robert Frost.") 42br My mom sometimes
	regrets the injudicious decision to send me to a good school, encourage me to go abroad, or inspire
	any of the imputations of success or greatness that education provides. Not in this world, not in India
	at least anymore. Most of the people who had failed academically were driven to figure out where Machiavelli
	lived, and in doing so, they carved out a prosperous trajectory. Not knowing is a significant power
	when you want to acclimate to a society that's driven by irrational forces. Here, mathematics never
	leaves the school; in fact, you're encouraged to smudge the sum and figure out how to create fibs out
	of things that would otherwise balance. It's therefore not surprising if you notice the ratios of mixtures
	aren't what they are supposed to be. It's one thing when it's iodine in salt; it's quite another when
	it's sand in cement or urea in milk. In a system such as this, the cogs can't be noisy or they'd be
	replaced, and if people have to eat, they have to cross the Rubicon. So the water from Rubicon is essentially
	mixed with tap water, so you can't be bothered to inculcate dishonesty.`;

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

<article>
	<img src="/B2.webp" alt="b2" class="float-left" />
	<p>{@html newBlogContent}</p>
</article>

<style>
	.float-left {
		float: left;
		margin-right: 10px; /* Adjust the spacing between the image and text */
		width: 40%;
	}
</style>
