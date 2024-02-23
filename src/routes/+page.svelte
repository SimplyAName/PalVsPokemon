<script lang="ts">
	//TODO: Work out if it's best to keep everything here or add more components
	// import GameWindow from '$lib/components/index/GameWindow.svelte';

	import type { Creature } from '@prisma/client';
	import type { Answer } from '$lib/types/Answer';
	import type { Score } from '$lib/types/ScoreCount';

	import { answerList, roundCounter } from '$lib/stores/store';

	import { shuffle } from '$lib/utils/shuffle-array';

	import IntroDialog from '../lib/components/index/IntroDialog.svelte';
	import EndGameDialog from '../lib/components/index/EndGameDialog.svelte';
	import Scoreboard from '$lib/components/index/Scoreboard.svelte';
	import { SquareFlipSpinner } from '$lib/components/ui/animations/SquareFlipSpinner';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	//SETUP
	export let data;

	onMount(() => {
		console.log(data);

		if (!data.visited) {
			introDialogStatus = true;
		}
	});

	//STATE
	let roundScore = 0;
	let scoreCounter: Score[] = [];
	let streak = 0;

	let questionAmount = 10;
	let currentPokemonIndex = 0;

	let waiting = false;
	let palworldHovered = false;
	let pokemonHovered = false;

	let introDialogStatus = false;
	let endGameDialogStatus = false;

	let pokeButton: HTMLButtonElement;
	let answerBox: HTMLDivElement;

	let randCreaturePromise = getRandCreature();

	async function getRandCreature() {
		waiting = true;

		const resultList = await fetch(`/api/question/${questionAmount}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		});

		waiting = false;

		if (resultList.ok) {
			let creatureList = await resultList.json();

			creatureList = shuffle(creatureList);

			$answerList = creatureList.reduce((previousValue: Answer[], currQuestion: Creature) => {
				let tempAnswer: Answer = {
					creature: currQuestion,
					correct: null
				};

				return (previousValue = [...previousValue, tempAnswer]);
			}, []);

			return creatureList;
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

	function showAnswerAnimation(correct: boolean) {
		if (correct) {
			//Animate win
		} else {
			//Animate loss
		}
	}

	function _answerQuestion(submitted: String) {
		if (submitted === $answerList[currentPokemonIndex]?.creature.originGame) {
			$answerList[currentPokemonIndex].correct = true;

			roundScore++;
			streak++;

			showAnswerAnimation(true);
		} else {
			$answerList[currentPokemonIndex].correct = false;
			streak = 0;

			showAnswerAnimation(false);
		}

		//End game
		if (currentPokemonIndex >= $answerList.length - 1) {
			endGameDialogStatus = true;

			return refreshGameState();
		}

		currentPokemonIndex++;
	}

	function refreshGameState() {
		console.log('Refreshing Game State');

		waiting = true;

		let tempScore: Score = {
			round: $roundCounter,
			score: roundScore,
			answerList: $answerList
		};

		scoreCounter = [...scoreCounter, tempScore];

		currentPokemonIndex = 0;

		randCreaturePromise = getRandCreature();

		$roundCounter++;

		return true;
	}

	let restartFunction = () => {
		$roundCounter = 1;
		streak = 0;
		scoreCounter = [];

		resetGame();
	};

	let continueFunction = () => {
		resetGame();
	};

	function resetGame() {
		roundScore = 0;

		endGameDialogStatus = false;
	}
</script>

<svelte:window
	on:keydown|preventDefault={(event) => {
		if (waiting || endGameDialogStatus) {
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

<div class="flex h-screen flex-col items-center">
	<div class="fixed z-10 flex min-h-full flex-row overflow-hidden">
		<button disabled={waiting} on:click={answerPalWorld}>
			<img
				draggable="false"
				class:grey-scale={pokemonHovered}
				src="/images/background/Backgroundbg-left.webp"
				alt="Collection of PalWorld on the left of the battleground"
				class="relative h-full object-cover object-right transition-all duration-300 ease-in-out hover:z-20 hover:scale-110"
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
				class="relative h-full object-cover object-left transition-all duration-300 ease-in-out hover:z-20 hover:scale-110"
				on:mouseenter={() => {
					pokemonHovered = true;
				}}
				on:mouseleave={() => {
					pokemonHovered = false;
				}}
			/>
		</button>
	</div>

	<div class="z-20 w-full xl:w-fit">
		<Scoreboard />

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
				<div bind:this={answerBox}></div>
				<img
					alt="Creature to guess from. Starts with {$answerList[currentPokemonIndex].creature.name}"
					src={$answerList[currentPokemonIndex].creature.imageLink}
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
		bind:scoreCounter
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
