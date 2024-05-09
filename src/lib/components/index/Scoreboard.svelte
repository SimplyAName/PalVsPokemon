<script lang="ts">
	import { Circle } from 'lucide-svelte';
	import { answerList, roundCounter } from '$lib/stores/store';

	let tempAnswerList = [];

	answerList.subscribe((update) => {
		tempAnswerList = update;
	});
</script>

<!-- Pal and Pokemon balls as answer icons?-->

<div class="relative">
	<img src="/images/new-scoreboard.svg" alt="Scoreboard background" />
	<div
		class="absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-center font-[MusicStudio]"
	>
		<div class="md:text-2xl">Round</div>
		<b class="md: -m-1 md:text-3xl">{$roundCounter}</b>
	</div>
	<div class="right-side absolute flex flex-row-reverse">
		{#each $answerList as currAnswer}
			{#if currAnswer.creature.originGame === 'PalWorld'}
				{#if currAnswer.correct}
					<Circle fill="green" size={'2.5rem'} strokeWidth={1.25} />
				{:else if currAnswer.correct === false}
					<Circle fill="red" size={'2.5rem'} strokeWidth={1.25} />
				{/if}
			{/if}
		{/each}
	</div>
	<div class="left-side absolute flex flex-row">
		{#each $answerList as currAnswer}
			{#if currAnswer.creature.originGame === 'Pokémon'}
				{#if currAnswer.correct}
					<Circle fill="green" size={'2.5rem'} strokeWidth={1.25} />
				{:else if currAnswer.correct === false}
					<Circle fill="red" size={'2.5rem'} strokeWidth={1.25} />
				{/if}
			{/if}
		{/each}
	</div>
</div>

<style>
	.right-side {
		top: 45%;
		right: 57%;
		translate: 0 -55%;
	}

	.left-side {
		top: 45%;
		left: 57%;
		translate: 0 -55%;
	}
</style>
