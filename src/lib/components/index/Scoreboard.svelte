<script lang="ts">
	import { Circle } from 'lucide-svelte';
	import { answerList, roundCounter } from '$lib/stores/store';

	let tempAnswerList = [];

	answerList.subscribe((update) => {
		tempAnswerList = update;
	});
</script>

<!-- TODO: Pal and Pokemon balls as answer icons? -->

<div class="relative">
	<img
		src="/images/new-scoreboard.svg"
		alt="Scoreboard background"
		class="scale-[2] scale-y-[2.5] md:scale-[2] lg:scale-100"
	/>
	<div
		class="absolute top-0 flex w-full flex-col items-center font-[MusicStudio] lg:top-1/2 lg:-translate-y-1/2"
	>
		<div class="md:text-2xl">Round</div>
		<b class="md:-m-1 md:text-3xl">{$roundCounter}</b>
	</div>

	<!-- Left (PalWorld) side -->
	<div
		class="absolute right-[62%] top-0 flex flex-row-reverse flex-wrap md:top-2 lg:right-[57%] lg:top-[45%] lg:-translate-y-[55%]"
	>
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

	<!-- Right (Pokémon) side -->
	<div
		class="absolute left-[62%] top-0 flex flex-row-reverse flex-wrap md:top-2 lg:left-[57%] lg:top-[45%] lg:-translate-y-[55%]"
	>
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
