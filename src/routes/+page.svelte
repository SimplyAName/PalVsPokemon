<script lang="ts">
	//TODO: Work out if it's best to keep everything here or add more components
	// import GameWindow from '$lib/components/index/GameWindow.svelte';

	import type { Score } from '$lib/types/ScoreCount';
	import type { Answer } from '$lib/types/Answer';
	import type { Creature } from '@prisma/client';

	import { answerList, roundCounter, streak, scoreCounter } from '$lib/stores/store';

	import IntroDialog from '../lib/components/index/IntroDialog.svelte';
	import EndGameDialog from '../lib/components/index/EndGameDialog.svelte';
	import Scoreboard from '$lib/components/index/Scoreboard.svelte';
	import AnswerButtons from '$lib/components/index/AnswerButtons.svelte';
	import SquareFlipSpinner from '$lib/components/ui/Spinners/SquareFlipSpinner.svelte';

	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	import { flip } from 'svelte/animate';

	import { getRandCreatures } from '$lib/functions/index/GameFunctions';
	import ResultPopover from './ResultPopover.svelte';
	import { quintOut } from 'svelte/easing';
	import { slamDown } from '$lib/components/ui/animations/slam-down';

	import creatureSelectBG from '$lib/assets/images/Pokemon BG.webp';
	import Button from '$lib/components/ui/button/button.svelte';

	//SETUP
	export let data;

	onMount(() => {
		if (!data.visited) {
			introDialogStatus = true;
		}
	});

	//STATE
	let roundScore = 0;

	let questionAmount = 10;
	let currentPokemonIndex = 0;

	let waiting = false;

	let introDialogStatus = false;
	let endGameDialogStatus = false;

	let refreshQuestionsPromise: Promise<Answer[]> = refreshQuestionList();

	let answerBox: HTMLElement;
	let answerInner = '';
	let showResultAnimation = false;

	async function refreshQuestionList() {
		waiting = true;

		let creatureList = await getRandCreatures(questionAmount);

		$answerList = creatureList.reduce((previousValue: Answer[], currCreature: Creature) => {
			let tempAnswer: Answer = {
				creature: currCreature,
				correct: null
			};

			return (previousValue = [...previousValue, tempAnswer]);
		}, []);

		waiting = false;

		return $answerList;
	}

	function answerPalWorld() {
		_answerQuestion('PalWorld');
	}

	function answerPokemon() {
		_answerQuestion('Pokémon');
	}

	function _answerQuestion(submitted: String) {
		if (submitted === $answerList[currentPokemonIndex]?.creature.originGame) {
			$answerList[currentPokemonIndex].correct = true;

			showResultPopup(true);
			roundScore++;
			$streak++;
		} else {
			showResultPopup(false);

			$answerList[currentPokemonIndex].correct = false;
			$streak = 0;
		}

		//End game
		if (currentPokemonIndex >= $answerList.length - 1) {
			endGameDialogStatus = true;

			return refreshGameState();
		}

		currentPokemonIndex++;
	}

	let currTimeout: NodeJS.Timeout;
	function showResultPopup(result: boolean) {
		// answerBox.innerHTML = ResultPopover;

		const SHOW_TIME = 1500;

		if (result) {
			answerInner = '<span style="color: transparent; text-shadow: 0 0 0 green;">✔️</span>';
		} else {
			answerInner = '❌';
		}

		showResultAnimation = true;

		console.log(currTimeout);

		if (currTimeout != null && currTimeout != undefined) {
			clearTimeout(currTimeout);
		}

		currTimeout = setTimeout(() => {
			showResultAnimation = false;
		}, SHOW_TIME);
	}

	function refreshGameState() {
		console.log('Refreshing Game State');

		let tempScore: Score = {
			round: $roundCounter,
			score: roundScore,
			answerList: $answerList
		};

		$scoreCounter = [...$scoreCounter, tempScore];

		roundScore = 0;
		currentPokemonIndex = 0;

		refreshQuestionsPromise = refreshQuestionList();

		$roundCounter++;

		return true;
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
			default:
				break;
		}
	}}
/>

<div class="flex max-h-screen flex-col items-center gap-4">
	<div class="fixed z-10 overflow-hidden">
		<AnswerButtons on:leftClick={answerPalWorld} on:rightClick={answerPokemon} disabled={waiting} />
	</div>

	<div class="z-20 w-full sm:w-2/3 xl:w-1/3">
		<Scoreboard />
	</div>

	<div class="z-20 flex flex-col items-center justify-center">
		<!-- Game window -->
		<div class="flex aspect-square flex-col items-center justify-center">
			{#await refreshQuestionsPromise}
				<SquareFlipSpinner background="linear-gradient(to bottom left, blue, pink)" />
			{:then}
				<div class="relative">
					{#if $streak >= 3}
						<!-- TODO: Make this animate in -->
						<p
							class="text-shadow-black abs-center fade-up-and-out p-4 font-[PaintedLady] text-2xl text-orange-400 md:text-6xl"
						>
							<b>
								{$streak} combo!!!
							</b>
						</p>
					{/if}

					<div
						class:opacity-0={!showResultAnimation}
						class="abs-center absolute top-1/4 text-4xl transition-opacity"
						bind:this={answerBox}
					>
						{@html answerInner}
					</div>

					<img src={creatureSelectBG} class="h-fit object-cover" alt="Background for creature" />

					<img
						alt="Creature to guess from. Starts with {$answerList[currentPokemonIndex].creature
							.name}"
						src={$answerList[currentPokemonIndex].creature.imageLink}
						class="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>

		<!-- Extra answer buttons -->
		<div class="z-20 flex w-full flex-col justify-evenly gap-4 p-4 md:flex-row">
			<Button class="w-full border border-red-500 p-8" disabled={waiting} on:click={answerPalWorld}>
				<!-- TODO: Swap this with an image of the palworld icon-->
				<div class="text-xl">PalWorld</div>
			</Button>
			<Button class="w-full border border-blue-500 p-8" disabled={waiting} on:click={answerPokemon}>
				<!-- TODO: Swap this with an image of the pokemon icon-->
				<div class="text-xl">Pokémon</div>
			</Button>
		</div>
	</div>

	<!-- Dialogs -->

	<IntroDialog bind:introDialogStatus />

	<EndGameDialog bind:endGameDialogStatus />
</div>

<style>
	.abs-center {
		left: 50%;
		transform: translateX(-50%);
	}
	.fade-up-and-out {
		animation: slam-down 0.3s linear;
		position: absolute;
	}

	.text-shadow-black {
		text-shadow:
			-2px -2px 0 #000,
			2px -2px 0 #000,
			-2px 2px 0 #000,
			2px 2px 0 #000;
	}

	@keyframes slam-down {
		0% {
			transform: translateX(-50%) translateY(-100px) scale(1.2);
		}
		30% {
			transform: translateY(0) translateX(calc(-50% + 20px)) scale(1);
		}
		40% {
			transform: translateX(calc(-50% + 20px));
		}
		60% {
			transform: translateX(calc(-50% + -10px));
		}
		70% {
			transform: translateX(calc(-50% + 5px));
		}
		80% {
			transform: translateX(calc(-50% + -5px));
		}
		100% {
			transform: translateX(calc(-50% + 0px));
		}
	}
</style>
