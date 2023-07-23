<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
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

	function populateVoiceList() {
		voices = window.speechSynthesis.getVoices();
	}

	function speakText(text: string) {
		utterance.text = text;
		utterance.onerror = function (event) {
			console.error('SpeechSynthesisUtterance.onerror', event);
		};
		window.speechSynthesis.speak(utterance);
	}

	function pauseSpeech() {
		window.speechSynthesis.pause();
	}

	function resumeSpeech() {
		window.speechSynthesis.resume();
	}

	function stopSpeech() {
		window.speechSynthesis.cancel();
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
	<button on:click={pauseSpeech}>
		<span class="material-icons">pause</span>
	</button>
	<button on:click={resumeSpeech}>
		<span class="material-icons">play_circle_filled</span>
	</button>
	<button on:click={stopSpeech}>
		<span class="material-icons">stop</span>
	</button>
</div>
