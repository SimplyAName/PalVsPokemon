<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import Button from '$lib/components/ui/button/button.svelte';

	export let introDialogStatus = false;
	let introDialogChange = (openStatus: boolean) => {
		introDialogStatus = openStatus;
	};
</script>

<Dialog.Root bind:open={introDialogStatus} bind:onOpenChange={introDialogChange}>
	<Dialog.Content>
		<Dialog.Header></Dialog.Header>
		<div class="relative">
			<img
				class="w-full"
				src="/images/background/Backgroundbg.webp"
				alt="Pals on the left with Pokemon on the right in a battle ground setting"
			/>
			<div class="white-banner absolute top-1/2 w-full -translate-y-1/2 text-center">
				<p class="text-xl">Palworld Vs Pokémon</p>
			</div>
		</div>
		<div class="text-balance text-center">
			<p><b>Pokemon or Pal-emon?</b></p>

			<p class="p-1">
				Guess from 10 creatures, see how much of a fan you really are! <br />
				Answer by clicking either side of the screen or the buttons at the bottom
			</p>
		</div>
		<Button
			class="w-full"
			on:click={() => {
				introDialogStatus = false;
			}}
		>
			Lets get started!
		</Button>
	</Dialog.Content>
</Dialog.Root>

<style>
	.white-banner {
		background: white;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			white 33%,
			white 66%,
			rgba(0, 0, 0, 0) 100%
		);
	}
</style>
