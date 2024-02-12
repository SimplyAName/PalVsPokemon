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
	let bonusAlert: HTMLElement;

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

	function answerPalWorld() {
		_answerQuestion('PalWorld');
	}

	function answerPokemon() {
		_answerQuestion('Pokémon');
	}

	function _answerQuestion(submitted: String) {
		if (submitted === answer?.originGame) {
			wins++;
			streak++;
		} else {
			loses++;
			streak = 0;
		}

		getRandCreature();
	}

	let palworldHovered: boolean,
		pokemonHovered = false;

	// while (streak >= 3) {
	// 	bonusAlert.animate({});
	// }
</script>

<svelte:window
	on:keydown|preventDefault={(event) => {
		console.log(event.key);

		switch (event.key) {
			case 'ArrowLeft':
				answerPalWorld();
			case 'ArrowRight':
				answerPokemon();
		}
	}}
/>

<!-- TODO: Added pop up on load explaining the game -->

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<div class="fixed z-10 flex h-screen flex-col md:flex-row">
		<button on:click={answerPalWorld}>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				draggable="false"
				class:greyScale={pokemonHovered}
				src="/images/background/Backgroundbg-left.webp"
				alt="PalWorld section of background image"
				class="peer/palword object-cover transition-all duration-300 ease-in-out hover:scale-110"
				on:mouseenter={() => {
					palworldHovered = true;
				}}
				on:mouseleave={() => {
					palworldHovered = false;
				}}
			/>
		</button>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<button on:click={answerPokemon}>
			<img
				draggable="false"
				class:greyScale={palworldHovered}
				src="/images/background/Backgroundbg-right.webp"
				alt="Pokémon section of background image"
				class="peer/pokemon transition-transform duration-300 ease-in-out hover:scale-110 peer-hover/palwordImage:scale-50"
				on:mouseenter={() => {
					pokemonHovered = true;
				}}
				on:mouseleave={() => {
					pokemonHovered = false;
				}}
			/>
		</button>
	</div>

	<div class="z-20 flex flex-col items-center">
		<div>
			You have {wins} correct and {loses} wrong
		</div>
		<!-- <div class="flex h-96 flex-col items-start"> -->
		{#if streak >= 3}
			<!-- TODO: Have this hover over image at an angle. Make it work art style -->
			<p
				bind:this={bonusAlert}
				transition:fade
				class="bonus-streak-alert flex justify-center text-red-500"
			>
				<b>{streak} combo!!!</b>
			</p>
		{/if}

		<div class="h-96 w-fit">
			{#if waiting}
				<div class="h-full w-full">
					<SquareFlipSpinner color="" background="linear-gradient(to bottom left, blue, pink)" />
				</div>
			{:else}
				<img
					alt="Creature to guess from. Starts with {answer?.name[0]}"
					src={answer?.imageLink}
					class="h-96 w-fit"
				/>
			{/if}
			<!-- </div> -->
		</div>
	</div>
</div>

<style>
	.bonus-streak-alert {
		animation: pulse 2s ease-in-out infinite;
	}

	.greyScale {
		filter: grayscale();
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
