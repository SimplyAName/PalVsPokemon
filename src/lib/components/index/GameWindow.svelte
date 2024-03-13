<script lang="ts">
	import type { Creature } from '@prisma/client';
	import type { Answer } from '$lib/types/Answer';
	import type { Score } from '$lib/types/ScoreCount';

	import { roundCounter, roundScore } from '$lib/stores/store';

	import { shuffle } from '$lib/utils/shuffle-array';

	import Scoreboard from '$lib/components/index/Scoreboard.svelte';
	import { SquareFlipSpinner } from '$lib/components/ui/animations/SquareFlipSpinner';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	//STATE
	let scoreCounter: Score[] = [];
	let streak = 0;

	let currentPokemonIndex = 0;
	let questionList: Creature[] = [];
	let answerList: Answer[] = [];

	let waiting = false;
	let palworldHovered = false;
	let pokemonHovered = false;

	let endGameDialogStatus = false;

	let pokeButton: HTMLButtonElement;
	let answerBox: HTMLDivElement;

	let randCreaturePromise = getRandCreature();

	async function getRandCreature() {
		waiting = true;

		const resultList = await fetch('/api/question/10', {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		});

		waiting = false;

		if (resultList.ok) {
			questionList = await resultList.json();

			questionList = shuffle(questionList);

			answerList = questionList.reduce((previousValue: Answer[], currQuestion) => {
				let tempAnswer: Answer = {
					creature: currQuestion,
					correct: null
				};

				return (previousValue = [...previousValue, tempAnswer]);
			}, []);

			return questionList;
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
		if (submitted === questionList[currentPokemonIndex]?.originGame) {
			answerList[currentPokemonIndex].correct = true;

			$roundScore++;
			streak++;

			showAnswerAnimation(true);
		} else {
			answerList[currentPokemonIndex].correct = false;
			streak = 0;

			showAnswerAnimation(false);
		}

		console.log(currentPokemonIndex, questionList.length);

		//End game
		if (currentPokemonIndex >= questionList.length - 1) {
			endGameDialogStatus = true;

			return refreshGameState();
		}

		currentPokemonIndex++;
	}

	function refreshGameState() {
		console.log('Refreshing Game State');

		waiting = true;

		let tempScore: Score = { round: $roundCounter, score: $roundScore, answerList: answerList };

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
		$roundScore = 0;

		endGameDialogStatus = false;
	}
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

<div class="fixed z-10 flex h-screen w-full flex-row overflow-hidden">
	<button disabled={waiting} on:click={answerPalWorld}>
		<img
			draggable="false"
			class:grey-scale={pokemonHovered}
			src="/images/background/Backgroundbg-left.webp"
			alt="Collection of PalWorld on the left of the battleground"
			class="relative w-full object-cover transition-all duration-300 ease-in-out hover:z-20 hover:scale-110"
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
			class="relative w-full object-cover transition-all duration-300 ease-in-out hover:z-20 hover:scale-110"
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
	<Scoreboard bind:answerList />

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
				alt="Creature to guess from. Starts with {questionList[currentPokemonIndex].name}"
				src={questionList[currentPokemonIndex].imageLink}
				class="h-full w-fit"
			/>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
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
