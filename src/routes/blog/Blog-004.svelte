<script lang="ts">
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv,
		enhancePunctuation,
		replace4bWithBreak,
		replace42tableWithHTMLTable
	} from '$lib/utility-functions';
	import { onMount, afterUpdate } from 'svelte';
	import { speak, populateVoiceList, pause, resume, stop } from '$lib/tts';

	export let image_name = '';
	export let blogContent = '';

	let voices: SpeechSynthesisVoice[] = [];
	let selectedVoice: string | null = null;
	let utterance: SpeechSynthesisUtterance;

	onMount(() => {
		utterance = new SpeechSynthesisUtterance();
		utterance.lang = 'en-IN';
		populateVoiceList();
		if (speechSynthesis.onvoiceschanged !== undefined) {
			speechSynthesis.onvoiceschanged = populateVoiceList;
		}
	});

	afterUpdate(() => {
		voices.forEach((voice) => {
			if (voice.name === selectedVoice) {
				utterance.voice = voice;
			}
		});
	});
	function handleSpeak() {
		speak(remainingContent);
	}

	function handlePause() {
		pause();
	}

	function handleResume() {
		resume();
	}

	function handleStop() {
		stop();
	}
	const { title, date, remainingContent } = extractTitleAndDate(blogContent);

	let newBlogContent = replaceBqWithDiv(remainingContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = replace4bWithBreak(newBlogContent);
	newBlogContent = replace42tableWithHTMLTable(newBlogContent);
	newBlogContent = enhancePunctuation(newBlogContent);
</script>

<details>
	<button on:click={handleSpeak}>Speak</button>
	<button on:click={handlePause}>Pause</button>
	<button on:click={handleResume}>Resume</button>
	<button on:click={handleStop}>Stop</button>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<summary role="button" class="contrast">{date + ' : ' + title} </summary>
	<article>
		<article class="float-left">
			<figure>
				<img src="/{image_name}" alt="pic" />
				<img src="/sign.svg" alt="sign" width="50%" style="display: block; margin: 0 auto;" />

				<figcaption class="yellow-banner">
					{title}
				</figcaption>
			</figure>
		</article>

		<p>{@html newBlogContent}</p>
	</article>
</details>

<!-- Your styles here -->
