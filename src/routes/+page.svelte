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

	import { getRandCreatures } from '$lib/functions/index/GameFunctions';

	import creatureSelectBG from '$lib/assets/images/Pokemon BG.webp';
	import pokemonLogo from '$lib/assets/images/Pokemon/pokemon-logo.png';
	import palworldLogo from '$lib/assets/images/Palworld/palworld-logo.png';
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
			answerInner = '🎉 🎉 🎉';
		} else {
			answerInner = '❌ 👎 ❌';
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

<div class="relative h-screen overflow-hidden">
	<div class="absolute top-[-10] z-0 h-full w-full overflow-hidden">
		<AnswerButtons on:leftClick={answerPalWorld} on:rightClick={answerPokemon} disabled={waiting} />
	</div>

	<div class="pointer-events-none relative z-20 flex h-full flex-col overflow-hidden">
		<div class="z-20 mx-auto w-full sm:w-2/3 xl:w-1/2">
			<Scoreboard />
		</div>

		<div class="flex h-full w-full items-center justify-center">
			{#await refreshQuestionsPromise}
				<SquareFlipSpinner background="linear-gradient(to bottom left, blue, pink)" />
			{:then}
				<div
					class:opacity-0={!showResultAnimation}
					class="abs-center absolute top-1/4 z-30 text-4xl transition-opacity"
					bind:this={answerBox}
				>
					{@html answerInner}
				</div>

				<div class="relative flex items-center justify-center">
					{#if $streak >= 3}
						<span
							class="text-shadow-black abs-center fade-up-and-out absolute -bottom-16 z-40 whitespace-nowrap p-4 font-[PaintedLady] text-2xl font-bold text-red-500 md:text-6xl"
						>
							{$streak} <span class="font-[Steppers]">combo</span>!!!
						</span>
					{/if}

					<div class="absolute -m-32">
						<img
							src={creatureSelectBG}
							class="h-full w-full object-cover"
							alt="Background for creature"
						/>
					</div>

					<img
						alt="Creature to guess from. Starts with {$answerList[currentPokemonIndex].creature
							.name}"
						src={$answerList[currentPokemonIndex].creature.imageLink}
						class="pointer-events-auto z-20 h-full max-h-[50vh] translate-y-0 md:-translate-y-8"
					/>
				</div>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>

		<!-- Mobile answer prompts -->
		<div class="z-20 flex w-screen flex-row justify-evenly gap-8 p-4 md:invisible">
			<!-- <Button class="w-full border border-red-500 p-8" disabled={waiting} on:click={answerPalWorld}>
				<div class="text-xl">PalWorld</div>
			</Button> -->
			<!-- <Button class="w-full border border-blue-500 p-8" disabled={waiting} on:click={answerPokemon}>
				<div class="text-xl">Pokémon</div>
			</Button> -->
			<!-- <div class="text-2xl text-white">PalWorld</div> -->
			<!-- <div class="font-[PokeFontSolid] text-3xl text-white">Pokémon</div> -->
			<div class="w-1/2">
				<img src={palworldLogo} alt="PalWorld logo" class="h-full w-full object-scale-down" />
			</div>
			<div class="w-1/2">
				<img src={pokemonLogo} alt="Pokémon logo" class="h-full w-full object-scale-down" />
			</div>
		</div>
	</div>

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
