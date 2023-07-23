<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { speak, populateVoiceList } from '$lib/tts';

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

	function speakText(text: string) {
		utterance.text = text;
		utterance.onerror = function (event) {
			console.error('SpeechSynthesisUtterance.onerror', event);
		};
		speak();
	}
</script>

<select bind:value={selectedVoice}>
	{#each voices as voice (voice.name)}
		<option value={voice.name}>{voice.name} ({voice.lang})</option>
	{/each}
</select>

<div class="button-panel">
	<button on:click={() => speakText('Hello world')}>
		<span class="material-icons">play_arrow</span>
	</button>
</div>
