<script lang="ts">
	import {
		extractTitleAndDate,
		replace42brWithBreak,
		replaceBqWithDiv,
		enhancePunctuation,
		replace4bWithBreak,
		replace42tableWithHTMLTable
	} from '$lib/utility-functions';

	export let image_name = '';
	export let blogContent = '';

	let responsiveVoice: any;
	let newBlogContent = '';
	let title = '';
	let date = '';

	$: {
		const {
			title: extractedTitle,
			date: extractedDate,
			remainingContent
		} = extractTitleAndDate(blogContent);

		title = extractedTitle;
		date = extractedDate;

		newBlogContent = replaceBqWithDiv(remainingContent);
		newBlogContent = replace42brWithBreak(newBlogContent);
		newBlogContent = replace4bWithBreak(newBlogContent);
		newBlogContent = replace42tableWithHTMLTable(newBlogContent);
		newBlogContent = enhancePunctuation(newBlogContent);
	}

	function speakText(text: string) {
		if (typeof responsiveVoice !== 'undefined') {
			responsiveVoice.speak(text);
		} else {
			console.error('responsiveVoice is not loaded yet');
		}
	}

	function pauseSpeech() {
		responsiveVoice.pause();
	}

	function resumeSpeech() {
		responsiveVoice.resume();
	}

	function cancelSpeech() {
		responsiveVoice.cancel();
	}
</script>

<details>
	<div class="button-panel">
		<button on:click={() => speakText(newBlogContent)}
			><span class="material-icons">play_arrow</span></button
		>
		<button on:click={pauseSpeech}><span class="material-icons">pause</span></button>
		<button on:click={resumeSpeech}><span class="material-icons">play_circle_filled</span></button>
		<button on:click={cancelSpeech}><span class="material-icons">stop</span></button>
	</div>
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

<style>
	.button-panel {
		display: flex;
		justify-content: space-between; /* Adjust as needed */
		gap: 10px; /* Adjust as needed */
	}

	.button-panel button {
		background-color: #4caf50; /* Green */
		border: none;
		color: white;
		text-align: center;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.4s;
		cursor: pointer;
		padding: 10px 24px;
		text-decoration: none;
		text-transform: uppercase;
	}

	.button-panel button:hover {
		background-color: white;
		color: black;
		border: 2px solid #4caf50;
	}

	summary {
		font-size: 26px;
	}

	.float-left {
		background-color: white;

		float: left;
		margin-bottom: 20px;
		width: 100%;
	}
</style>
