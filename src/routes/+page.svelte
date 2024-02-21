<script lang="ts">
	import type { Creature } from '@prisma/client';
	import IntroDialog from '../lib/components/index/IntroDialog.svelte';
	import EndGameDialog from '../lib/components/index/EndGameDialog.svelte';
	import Scoreboard from '$lib/components/index/Scoreboard.svelte';
	import { SquareFlipSpinner } from '$lib/components/ui/animations/SquareFlipSpinner';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data;

	onMount(() => {
		console.log(data);

		if (!data.visited) {
			let introDialogStatus = true;
		}
	});

	type Answer = { creature: Creature; correct: boolean };

	let roundCount = 0;
	let totalScore = 0;
	let wins = 0;
	let loses = 0;
	let streak = 0;

	let currentPokemonIndex = 0;
	let questionList: Creature[] = [];
	let answerList: Answer[] = [];

	let waiting = false;
	let palworldHovered = false;
	let pokemonHovered = false;

	let introDialogStatus = false;
	let endGameDialogStatus = false;

	let pokeButton: HTMLButtonElement;

	let randCreaturePromise = getRandCreature();

	async function getRandCreature() {
		waiting = true;

		questionList = [];
		currentPokemonIndex = 0;

		roundCount++;
		// currentPokemonIndex = 0;

		const resultList = await fetch('/api/question/10', {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		});

		waiting = false;

		if (resultList.ok) {
			return (questionList = await resultList.json());
		}

		console.error(resultList);

		throw new Error(`Failed to get questions! Status: ${resultList.status}`);
	}

	function answerPalWorld() {
		_answerQuestion('PalWorld');
	}

	function answerPokemon() {
		_answerQuestion('Pokémon');
	}

	function _answerQuestion(submitted: String) {
		let tempAnswer: Answer = {
			creature: questionList[currentPokemonIndex],
			correct: false
		};

		if (submitted === questionList[currentPokemonIndex]?.originGame) {
			tempAnswer.correct = true;
			totalScore++;
			wins++;
			streak++;
		} else {
			loses++;
			streak = 0;
		}

		answerList = [...answerList, tempAnswer];

		console.log(currentPokemonIndex, questionList.length);

		if (currentPokemonIndex >= questionList.length - 1) {
			console.log('All questions answered. Resetting');

			waiting = true;

			endGameDialogStatus = true;

			return;
		}

		currentPokemonIndex++;
	}

	let restartFunction = function resetGame() {
		waiting = true;

		wins = 0;
		loses = 0;
		totalScore = 0;
		roundCount = 0;
		streak = 0;
		answerList = [];

		randCreaturePromise = getRandCreature();

		endGameDialogStatus = false;
	};

	let continueFunction = function continueGame() {
		randCreaturePromise = getRandCreature();

		endGameDialogStatus = false;
	};
</script>

<svelte:window
	on:keydown|preventDefault={(event) => {
		if (waiting) {
			return;
		}

		switch (event.key) {
			case 'ArrowLeft':
				answerPalWorld();
				break;
			case 'ArrowRight':
				answerPokemon();
				break;
		}
	}}
/>

<div class="flex h-screen w-screen flex-col items-center">
	<div class="fixed z-10 flex h-screen flex-col md:flex-row">
		<button disabled={waiting} on:click={answerPalWorld}>
			<img
				draggable="false"
				class:grey-scale={pokemonHovered}
				src="/images/background/Backgroundbg-left.webp"
				alt="Collection of PalWorld on the left of the battleground"
				class="relative transition-all duration-300 ease-in-out hover:z-20 hover:scale-110"
				on:mouseenter={() => {
					palworldHovered = true;
				}}
				on:mouseleave={() => {
					palworldHovered = false;
				}}
			/>
		</button>

		<button disabled={waiting} on:click={answerPokemon} bind:this={pokeButton}>
			<img
				draggable="false"
				class:grey-scale={palworldHovered}
				src="/images/background/Backgroundbg-right.webp"
				alt="Collection of Pokémon on the right of the battleground"
				class="relative transition-all duration-300 ease-in-out hover:z-20 hover:scale-110"
				on:mouseenter={() => {
					pokemonHovered = true;
				}}
				on:mouseleave={() => {
					pokemonHovered = false;
				}}
			/>
		</button>
	</div>

	<div class="z-20 w-1/6">
		<Scoreboard {wins} {loses} round={roundCount} />
		{#if streak >= 3}
			<!-- TODO: Have this hover over image at an angle. Make it work art style -->
			<p transition:fade class="bonus-streak-alert flex justify-center text-xl text-red-500">
				<b>{streak} combo!!!</b>
			</p>
		{/if}
	</div>

	<div class="z-20 flex h-full flex-col items-center justify-center">
		<div class="aspect-square h-[33dvh]">
			{#await randCreaturePromise}
				<SquareFlipSpinner background="linear-gradient(to bottom left, blue, pink)" />
			{:then}
				<img
					alt="Creature to guess from. Starts with {questionList[currentPokemonIndex].name}"
					src={questionList[currentPokemonIndex].imageLink}
					class="h-full w-fit"
				/>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
	</div>

	<!-- Dialogs -->

	<IntroDialog bind:introDialogStatus />

	<EndGameDialog
		bind:endGameDialogStatus
		bind:restartFunction
		bind:continueFunction
		bind:answerList
		bind:score={totalScore}
		bind:rounds={roundCount}
	/>
</div>

<style>
	.grey-scale {
		filter: grayscale();
	}

	.bonus-streak-alert {
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
