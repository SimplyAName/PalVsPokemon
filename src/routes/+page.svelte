<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	let wins = 0;
	let loses = 0;

	let answer = 'PalWorld';

	function randomizeAnswer() {
		let randNum = Math.floor(Math.random() * 2);

		switch (randNum) {
			case 0:
				answer = 'Pokémon';
				break;

			case 1:
				answer = 'PalWorld';
				break;

			default:
				answer = 'Unknown';
				break;
		}
	}

	function answerQuestion(submitted: String) {
		if (submitted === answer) {
			wins++;
		} else {
			loses++;
		}

		randomizeAnswer();
	}
</script>

<h1 class="text-center text-3xl">Welcome to Pal Vs Pokémon</h1>
<p class="text-center">
	Below will have either creature from Pokémon or PalWorld. Try and get the highest streak you can!
</p>
<br />

<div id="gameWindow" class="flex flex-col items-center">
	<div>
		You have {wins} correct and {loses} wrong
	</div>

	<div>
		<img src="https://placehold.co/600x400" />
	</div>
	<br />
	<div id="buttons" class="flex flex-row gap-4">
		<Button
			on:click={() => {
				answerQuestion('PalWorld');
			}}>PalWorld</Button
		>
		<Button
			on:click={() => {
				answerQuestion('Pokémon');
			}}>Pokémon</Button
		>
	</div>
</div>
