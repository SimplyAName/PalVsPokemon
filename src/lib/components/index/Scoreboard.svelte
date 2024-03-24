<script lang="ts">
	import { answerList, roundCounter } from '$lib/stores/store';

	let tempAnswerList = [];

	answerList.subscribe((update) => {
		tempAnswerList = update;
	});
</script>

<div
	class="flex flex-col items-center justify-center rounded-b-lg border-x border-b border-blue-600 bg-gradient-to-r from-purple-500 to-blue-600 text-center align-middle"
>
	<div class="white-banner my-1 w-2/3 p-1 text-2xl text-yellow-500">
		<b>Round {$roundCounter}</b>
	</div>
	<div class="text-xl md:px-4 md:pb-4 md:text-4xl">
		{#each $answerList as currAnswer}
			{#if currAnswer.correct}
				🟢
			{:else if currAnswer.correct === false}
				🔴
			{:else}
				⚪
			{/if}
		{/each}
	</div>
</div>

<style>
	.white-banner {
		background: blue;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			blueviolet 33%,
			rgb(45, 45, 221) 66%,
			rgba(0, 0, 0, 0) 100%
		);
	}
</style>
