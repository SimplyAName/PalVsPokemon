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

	import { getRandCreatures } from '$lib/functions/index/GameFunctions';
	import ResultPopover from './ResultPopover.svelte';
	import { quintOut } from 'svelte/easing';
	import { slamDown } from '$lib/components/ui/animations/slam-down';

	import creatureSelectBG from '$lib/assets/images/Pokemon BG.webp';

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

	function showResultPopup(result: boolean) {
		// answerBox.innerHTML = ResultPopover;
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

<div class="flex h-screen flex-col items-center">
	<div class="fixed z-10 min-h-full overflow-hidden">
		<AnswerButtons on:leftClick={answerPalWorld} on:rightClick={answerPokemon} disabled={waiting} />
	</div>

	<div class="z-20">
		<Scoreboard />
	</div>

	<div class="z-20 flex h-full flex-col items-center justify-center">
		<div class="flex aspect-square h-[80dvh] flex-col items-center justify-center">
			{#await refreshQuestionsPromise}
				<SquareFlipSpinner background="linear-gradient(to bottom left, blue, pink)" />
			{:then}
				<div
					class="fade-up-and-out relative top-0 text-red-500 transition-all"
					transition:fade
					bind:this={answerBox}
				></div>

				<div class="relative">
					{#if $streak >= 3}
						<!-- TODO: Make this animate in -->
						<p
							transition:slamDown={{
								delay: 250,
								duration: 1200,
								x: 100,
								y: -500,
								easing: quintOut
							}}
							class="absolute left-1/2 -translate-x-1/2"
						>
							<b class="text-shadow-black font-[PaintedLady] text-7xl text-orange-400">
								{$streak} combo!!!
							</b>
						</p>
					{/if}
					<img src={creatureSelectBG} class=" w-full" alt="Background for creature" />

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
	</div>

	<!-- Dialogs -->

	<IntroDialog bind:introDialogStatus />

	<EndGameDialog bind:endGameDialogStatus />
</div>

<style>
	.bonus-streak-alert {
		animation: pulse 2s ease-in-out infinite;
	}

	.fade-up-and-out {
		animation: trans-up 2s ease-in-out infinite;
	}

	.text-shadow-black {
		text-shadow:
			-2px -2px 0 #000,
			2px -2px 0 #000,
			-2px 2px 0 #000,
			2px 2px 0 #000;
	}

	.ani-spin {
		animation-name: custom-spin;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		/* animation-timing-function: cubic-bezier(); */
	}

	@keyframes custom-spin {
		0% {
			transform: rotate(360deg);
		}
		20% {
			transform: scale(1.1) rotate(60deg);
		}
		40% {
			transform: scale(1) rotate(120deg);
		}
		60% {
			transform: scale(1.1) rotate(180deg);
		}
		80% {
			transform: scale(1) rotate(240deg);
		}
		100% {
			transform: scale(1.1) rotate(300deg);
		}
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

	@keyframes trans-up {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-1000);
		}
	}
</style>
