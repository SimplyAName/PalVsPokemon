<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<h1 class="text-center text-3xl">Welcome to Pal Vs Pokémon</h1>
<p class="text-center">
	Below will have either creature from Pokémon or PalWorld. Try and get the highest streak you can!
</p>
<br />

<div id="gameWindow" class="flex flex-col items-center">
	<div>
		<img src="https://placehold.co/600x400" />
	</div>
	<br />
	<div id="buttons" class="flex flex-row gap-4">
		<Button>PalWorld</Button>
		<Button>Pokémon</Button>
	</div>
</div>
