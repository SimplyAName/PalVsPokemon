<script lang="ts">
	import { SquareFlipSpinner } from '$lib/components/ui/animations/SquareFlipSpinner';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { Creature } from '@prisma/client';
	import { fade } from 'svelte/transition';

	let wins = 0;
	let loses = 0;
	let streak = 0;
	let palworldHovered = false;
	let pokemonHovered = false;
	let dialogOpen = false;
	let bonusAlert: HTMLElement;

	let waiting = false;

	let randCreaturePromise = getRandCreature();

	let currCreature: Creature;

	async function getRandCreature() {
		waiting = true;

		const result = await fetch('/api/question', {
			method: 'GET',
			headers: {
				Accept: 'application/json'
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

		randCreaturePromise = getRandCreature();
	}

	let dialogChange = function dialogChange(open: boolean) {
		dialogOpen = open;
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

<!-- TODO: Added pop up on load explaining the game -->

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<Dialog.Root bind:open={dialogOpen} bind:onOpenChange={dialogChange}>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
				<Dialog.Description>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</Dialog.Description>
			</Dialog.Header>
		</Dialog.Content>
	</Dialog.Root>

	<div class="fixed z-10 flex h-screen flex-col md:flex-row">
		<button disabled={waiting} on:click={answerPalWorld}>
			<img
				draggable="false"
				class:greyScale={pokemonHovered}
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

		<button disabled={waiting} on:click={answerPokemon}>
			<img
				draggable="false"
				class:greyScale={palworldHovered}
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

	<div
		class="z-50 flex aspect-square w-fit flex-col items-center bg-gradient-radial from-white to-transparent to-80% p-8"
	>
		<div class="text-5xl">
			<span class="text-green-700">{wins}</span> : <span class="text-red-600">{loses}</span>
		</div>
		<br />
		{#if streak >= 3}
			<!-- TODO: Have this hover over image at an angle. Make it work art style -->
			<p
				bind:this={bonusAlert}
				transition:fade
				class="bonus-streak-alert flex justify-center text-xl text-red-500"
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
