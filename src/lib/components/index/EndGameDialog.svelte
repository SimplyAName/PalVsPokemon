<script lang="ts">
	import type { Score } from '$lib/types/ScoreCount';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Table from '$lib/components/ui/table';
	import Button from '$lib/components/ui/button/button.svelte';

	export let scoreCounter: Score[] = [];
	let totalScore: number = 0;

	$: totalScore = scoreCounter.reduce((previous, next) => {
		return (previous += next.score);
	}, 0);

	export let endGameDialogStatus = false;

	export let restartFunction = () => {
		endGameDialogStatus = false;
	};

	export let continueFunction = () => {
		endGameDialogStatus = false;
	};

	const endGameDialogClickOnClose = false;
	let endGameDialogChange = (openStatus: boolean) => {
		endGameDialogStatus = openStatus;
	};
</script>

<Dialog.Root
	bind:open={endGameDialogStatus}
	bind:onOpenChange={endGameDialogChange}
	closeOnOutsideClick={endGameDialogClickOnClose}
	closeOnEscape={endGameDialogClickOnClose}
>
	<Dialog.Content class="max-w-fit text-center" closeButton={false}>
		<Dialog.Header>
			<Dialog.Title class="text-center">Palworld Vs Pokémon</Dialog.Title>
			<Dialog.Description class="text-center">
				Can you tell the pals from pokémon?
			</Dialog.Description>
		</Dialog.Header>

		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-1/3 border-r text-center">Round</Table.Head>
					<Table.Head class="text-center"></Table.Head>
					<Table.Head class="text-center">Score</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each scoreCounter as score}
					<Table.Row>
						<Table.Cell class="border-r font-medium">{score.round}</Table.Cell>
						<Table.Cell>
							{#each score.answerList as currAnswer}
								{#if currAnswer.correct}
									🟩
								{:else if currAnswer.correct === false}
									🟥
								{:else}
									⬜
								{/if}
							{/each}
						</Table.Cell>
						<Table.Cell>
							{score.score}
						</Table.Cell>
					</Table.Row>
				{/each}
				<Table.Row>
					<Table.Cell class="border-r font-medium">Total Score</Table.Cell>
					<Table.Cell></Table.Cell>
					<Table.Cell class="font-medium">{totalScore}</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>

		<Carousel.Root opts={{ loop: true }} class="mx-8 max-w-sm">
			<Carousel.Content>
				{#each scoreCounter[scoreCounter.length - 1].answerList as question, i (i)}
					<Carousel.Item>
						<Card.Root>
							<Card.Header>
								<Card.Title>
									{i + 1} - {question.creature.name}
									{#if question.correct}
										<span class="text-transparent" style="text-shadow: 0 0 0 green;"> ✔️ </span>
									{:else}
										❌
									{/if}
								</Card.Title>
								<Card.Description>
									{question.creature.originGame}
								</Card.Description>
							</Card.Header>
							<Card.Content class="flex flex-col items-center">
								<img alt={question.creature.name} src={question.creature.imageLink} class="h-48" />
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>

		<div class="flex flex-row gap-4">
			<Button class="w-full" on:click={restartFunction}>Restart</Button>
			<Button class="w-full" on:click={continueFunction}>Continue</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
