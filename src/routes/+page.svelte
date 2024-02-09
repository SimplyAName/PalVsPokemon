<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { SquareFlipSpinner } from '$lib/components/ui/animations/SquareFlipSpinner';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';

	onMount(getRandCreature);

	let wins = 0;
	let loses = 0;
	let streak = 4;
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

	// while (streak >= 3) {
	// 	bonusAlert.animate({});
	// }
</script>

<div class="container flex h-screen flex-col justify-center">
	<div class="rounded-md bg-white p-4">
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

			<div class="flex h-96 flex-col items-start">
				{#if streak >= 3}
					<!-- TODO: Have this hover over image at an angle. Make it work art style -->
					<p
						bind:this={bonusAlert}
						transition:fade
						class="bonus-streak-alert flex shrink justify-center text-red-500"
					>
						<b>{streak} combo!!!</b>
					</p>
				{/if}

				<div class="h-96 w-full">
					{#if waiting}
						<div class="h-full w-full">
							<SquareFlipSpinner
								color=""
								background="linear-gradient(to bottom left, blue, pink)"
							/>
						</div>
					{:else}
						<img
							alt="Creature to guess from. Starts with {answer?.name[0]}"
							src={answer?.imageLink}
							class="h-96 w-full"
						/>
					{/if}
				</div>
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
</div>

<style>
	.bonus-streak-alert {
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1) rotate(-45deg) translate(-33%);
		}
		50% {
			transform: scale(1.5) rotate(-45deg) translate(-33%);
		}
		100% {
			transform: scale(1) rotate(-45deg) translate(-33%);
		}
	}
</style>
