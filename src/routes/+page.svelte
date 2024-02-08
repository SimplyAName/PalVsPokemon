<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { SquareFlipSpinner } from '$lib/components/ui/animations/SquareFlipSpinner';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';

	onMount(getRandCreature);

	let wins = 0;
	let loses = 0;
	let streak = 0;

	let waiting = false;

	let answer: {
		id: number;
		name: string;
		originGame: string;
		imageLink: string;
		createdAt: Date;
	} | null = null;

	async function getRandCreature() {
		waiting = true;
		const response = await fetch('/api/question', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		answer = await response.json();

		waiting = false;
	}

	function answerQuestion(submitted: String) {
		if (submitted === answer?.originGame) {
			wins++;
			streak++;
		} else {
			loses++;
			streak = 0;
		}

		getRandCreature();
	}

	const textSize = spring(1, {
		stiffness: 0.1,
		damping: 1,
		precision: 0.001
	});

	const zoomIn = setInterval(() => {
		textSize.set(1.5);
	}, 400);

	const zoomOut = setInterval(() => {
		textSize.set(1);
	}, 800);
</script>

<div class="container flex h-screen flex-col justify-center">
	<h1 class="text-center text-3xl">Welcome to Pal Vs Pokémon</h1>
	<p class="text-center">
		Below will have either creature from Pokémon or PalWorld. Try and get the highest streak you
		can!
	</p>
	<br />

	<div id="gameWindow" class="flex w-full flex-col items-center">
		<div>
			You have {wins} correct and {loses} wrong
		</div>

		<div class="flex h-96 flex-col justify-center">
			{#if waiting}
				<SquareFlipSpinner color="" background="linear-gradient(to bottom left, blue, pink)" />
			{:else}
				{#if streak >= 3}
				<!-- TODO: Have this hover over image at an angle. Make it work art style -->
					<p transition:fade class="mt-4 block" style="transform: scale({$textSize});">
						{streak} combo!!!
					</p>
				{/if}
				<img
					alt="Creature to guess from. Starts with {answer?.name[0]}"
					src={answer?.imageLink}
					class="h-96 w-full"
				/>
			{/if}
		</div>

		<br />

		<div id="buttons" class="flex w-full flex-row gap-4 p-8">
			<Button
				class="h-16 w-full text-xl"
				disabled={waiting}
				on:click={() => {
					answerQuestion('PalWorld');
				}}><b>PalWorld</b></Button
			>
			<Button
				class="h-16 w-full text-xl"
				disabled={waiting}
				on:click={() => {
					answerQuestion('Pokémon');
				}}><b>Pokémon</b></Button
			>
		</div>
	</div>
</div>
