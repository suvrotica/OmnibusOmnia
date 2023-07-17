<script lang="ts">
	import Title from '$lib/components/title.svelte';

	import { orientation } from '$lib/orientation';
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
<Title stringA="Huge Ass" stringB="Horn" />

<article>
	<img src="/B2.webp" alt="b2" class="float-left" />
	You've seen Delhi's condition. This is only because the cameras are there. The issues are endemic,
	but we don't see them since the cameras are artfully diverted to the emperor's new clothes.
	<br /><br />
	So I ask. What's the point of education if we don't, can't, or are too afraid to use it? We are only
	at this barely livable convenience because of privatization and the fact that these companies have
	to be accountable for their products; otherwise, they'll go out of business. The Indian government,
	whether at the center or at the regional levels, has no such scruples, prerogatives, or vision. This
	is the difference I saw between the US and India: people aren't by default selfish, vindictive, or
	lazy; here, this is the status quo. I can't ignore the fact that it's us who sit on the chairs we blame.
	<br /><br />
	And the pissy territorial fights and blamemongering, followed by amnesia as the water recedes, will
	be repeated with the usual fare every time. If tiny neighboring states can't get along, what hope is
	there between warring nations? Apparently, the very representations we've elected to safeguard us might
	in fact proffer us as the sacrosanct lamb for sacrifice come disaster. And this isn't political party
	A or B; they are equally duplicitous and nefarious self-serving selfish alter egos of us as a group.
	That does, in fact, show how fucked up we must be if these kleptomaniac rascals are the best we can
	do. Good grief, if this is democracy, then what the fuck?
	<br /><br />
	The current problem with the climate can be conveniently explained away as that of cause and effect,
	but looking at the actors and the period over which things have, are, and will play out is what really
	matters. In the past, it was the developed nations; now it's the developing nations, and the former
	ought to fund the latter and hold hands all the way. Homo Hemlock has to get real and united; otherwise,
	the shit hitting the fan is an inevitability. Get ready to get your face splattered.
	<br /><br />
	Most of the causal and casual actors were and are the fat haves, living lives worth envying, while
	the emaciated have-nots suffer, barely existing and tenuously clinging on to the breadcrumbs made available,
	getting snuffed out by the results of shit they didn't do. This inequality will have to go, along with
	selfishness, irrational behavior, moral seediness, and political corruption, hallmarks of Homo Fucking
	Hemlock. Merely clicking on icons or copying and pasting isn't going to get us any further than our
	dead skull. If the environmental collapse gets to an exponential point, there won't be any room for
	politicians or, for that matter, any political correctness, and we'll be a thin layer of plastic on
	the rocks.
	<br /><br />
	It doesn't have to be a zero-sum game like that, and we can't win, no matter how large we think our
	lumps are. I mean, balls. I was trying to be polite. We're like scum on a rock floating in space that
	thinks it's all that, when it's not. It might be the pinworms in our shit that's going to take over;
	you never really know. We were improbable, and if we screw this up, getting the planet back is out
	of our hands. We don't have a plan or a planet B.
	<br /><br />
	All the bullshit magic, religion, pseudoscience, capricious gods, lecture notes from belligerent and
	uneducated leaders, and fancy imaginary beings will be able to do shit when the time comes. Only math
	and science will be of any help, if there's any left, by the time we realize it's too late. And the
	art of rhetoric to get fools to listen and move.
	<br /><br />
	I think we are getting close to getting fucked, but I'm already too old and unpopular; I'll get murdered
	for being reasonable, the usual fitting end for softies with yielding dispositions.

	<br />
</article>

<style>
	.float-left {
		float: left;
		margin-right: 10px; /* Adjust the spacing between the image and text */
		width: 40%;
	}
</style>
