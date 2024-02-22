<script lang="ts">
	import type { Answer } from '$lib/types/Answer';
	import type { Creature } from '@prisma/client';

	let roundCount = 0;
	export { roundCount as round };

	export let answerList: Answer[] = [];
</script>

<div
	class="flex flex-col items-center justify-center rounded-b-lg border-x border-b border-black bg-white bg-gradient-to-l from-purple-700 via-blue-700 to-red-700 text-center align-middle"
>
	<div class="p-1 text-2xl">
		Round {roundCount}
	</div>
	<div class="pb-2 text-4xl">
		{#each answerList as currAnswer}
			{#if currAnswer.correct}
				🟩
			{:else if currAnswer.correct === false}
				🟥
			{:else}
				⬜
			{/if}
		{/each}
	</div>
</div>
