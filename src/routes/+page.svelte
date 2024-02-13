<script lang="ts">
	import { SquareFlipSpinner } from '$lib/components/ui/animations/SquareFlipSpinner';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(getRandCreature);

	let dialogMessage = '';

	let wins = 0;
	let loses = 0;
	let streak = 0;
	let palworldHovered = false;
	let pokemonHovered = false;
	let bonusAlert: HTMLElement;
	let dialog: any;

	let waiting = false;

	let randCreaturePromise = getRandCreature();

	let currCreature: Promise<any>;

	function newRandCreature() {
		randCreaturePromise = getRandCreature();
	}

	async function getRandCreature() {
		waiting = true;

		const result = await fetch('/api/question', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		waiting = false;

		if (result.ok) {
			currCreature = await result.json();
			return currCreature;
		}

		console.error(result);

		throw new Error(`Failed to get questions! Status: ${result.status}`);
	}

	function answerPalWorld() {
		_answerQuestion('PalWorld');
	}

	function answerPokemon() {
		_answerQuestion('Pokémon');
	}

	function _answerQuestion(submitted: String) {
		if (submitted === currCreature?.originGame) {
			wins++;
			streak++;
		} else {
			loses++;
			streak = 0;
		}

		newRandCreature();
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
			case 'ArrowRight':
				answerPokemon();
		}
	}}
/>

<!-- TODO: Added pop up on load explaining the game -->

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<div class="fixed z-10 flex h-screen flex-col md:flex-row">
		<button disabled={waiting} on:click={answerPalWorld}>
			<img
				draggable="false"
				class:greyScale={pokemonHovered}
				src="/images/background/Backgroundbg-left.webp"
				alt="Collection of PalWorld on the left of the battleground"
				class="z-10 transition-all duration-300 ease-in-out hover:z-20 hover:scale-110 relative"
				on:mouseenter={() => {
					palworldHovered = true;
				}}
				on:mouseleave={() => {
					palworldHovered = false;
				}}
			/>
		</button>

		<button disabled={waiting} on:click={answerPokemon}>
			<img
				draggable="false"
				class:greyScale={palworldHovered}
				src="/images/background/Backgroundbg-right.webp"
				alt="Collection of Pokémon on the right of the battleground"
				class="z-10 transition-all duration-300 ease-in-out hover:z-20 hover:scale-110 relative"
				on:mouseenter={() => {
					pokemonHovered = true;
				}}
				on:mouseleave={() => {
					pokemonHovered = false;
				}}
			/>
		</button>
	</div>

	<div
		class="z-50 flex aspect-square w-fit flex-col items-center bg-gradient-radial from-white to-transparent to-80% p-8"
	>
		<div>
			You have {wins} correct and {loses} wrong
		</div>
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

		<div class="flex h-[33dvh] w-fit flex-col justify-center">
			{#await randCreaturePromise}
				<SquareFlipSpinner color="" background="linear-gradient(to bottom left, blue, pink)" />
			{:then creature}
				<img
					alt="Creature to guess from. Starts with {creature?.name[0]}"
					src={creature?.imageLink}
					class="h-full w-fit"
				/>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
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
