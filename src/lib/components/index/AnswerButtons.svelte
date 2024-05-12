<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function leftOnClick(event) {
		dispatch('leftClick', event);
	}
	function rightOnClick(event) {
		dispatch('rightClick', event);
	}

	// STATE
	export let disabled = false;

	let leftHovered = false;
	let rightHovered = false;
</script>

<div class="flex min-h-screen flex-row">
	<button {disabled} on:click={leftOnClick}>
		<img
			draggable="false"
			class:grey-scale={rightHovered}
			src="/images/background/Backgroundbg-left.webp"
			alt="Collection of PalWorld on the left of the battleground"
			class="relative h-full object-cover object-right transition-all duration-300 ease-in-out hover:z-10 hover:scale-110"
			on:mouseenter={() => {
				leftHovered = true;
			}}
			on:mouseleave={() => {
				leftHovered = false;
			}}
		/>
	</button>

	<button {disabled} on:click={rightOnClick}>
		<img
			draggable="false"
			class:grey-scale={leftHovered}
			src="/images/background/Backgroundbg-right.webp"
			alt="Collection of Pokémon on the right of the battleground"
			class="relative h-full object-cover object-left filter transition-all duration-300 ease-in-out hover:z-10 hover:scale-110"
			on:mouseenter={() => {
				rightHovered = true;
			}}
			on:mouseleave={() => {
				rightHovered = false;
			}}
		/>
	</button>
</div>

<style>
	.grey-scale {
		filter: grayscale();
	}
</style>
