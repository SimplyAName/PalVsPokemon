<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';

	let wins = 0;
	let loses = 0;

	let waiting = false;

	let answer = null;

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
		if (submitted === answer.originGame) {
			wins++;
		} else {
			loses++;
		}

		getRandCreature();
	}

	onMount(getRandCreature);
</script>

<h1 class="text-3xl text-center">Welcome to Pal Vs Pokémon</h1>
<p class="text-center">
	Below will have either creature from Pokémon or PalWorld. Try and get the highest streak you can!
</p>
<br />

<div id="gameWindow" class="flex flex-col items-center">
	<div>
		You have {wins} correct and {loses} wrong
	</div>

	<div>
		<img alt="Creature to guess from" src="https://placehold.co/600x400?text={answer?.name}" />
	</div>
	<br />
	<div id="buttons" class="flex flex-row gap-4">
		<Button
			disabled={waiting}
			on:click={() => {
				answerQuestion('PalWorld');
			}}>PalWorld</Button
		>
		<Button
			disabled={waiting}
			on:click={() => {
				answerQuestion('Pokémon');
			}}>Pokémon</Button
		>
	</div>
</div>
