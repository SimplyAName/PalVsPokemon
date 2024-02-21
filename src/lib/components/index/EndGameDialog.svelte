<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Creature } from '@prisma/client';

	type Answer = { creature: Creature; correct: boolean };

	export let answerList: Answer[] = [];
	export let score = 0;
	export let rounds = 0;

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
	<Dialog.Content class="max-w-fit text-center">
		<Dialog.Header>
			<Dialog.Title class="text-center">Palworld Vs Pokémon</Dialog.Title>
			<Dialog.Description class="text-center">
				Can you tell the pals from pokémon?
			</Dialog.Description>
		</Dialog.Header>

		Rounds: {rounds}
		<br />
		Score: {score}

		{#if answerList.length > 0}
			<Carousel.Root opts={{ loop: true }} class="mx-8 max-w-sm">
				<Carousel.Content>
					{#each answerList as question, i (i)}
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
									<img
										alt={question.creature.name}
										src={question.creature.imageLink}
										class="h-48"
									/>
								</Card.Content>
							</Card.Root>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		{/if}
		<div class="flex flex-row gap-4">
			<Button class="w-full" on:click={restartFunction}>Restart</Button>
			<Button class="w-full" on:click={continueFunction}>Continue</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
