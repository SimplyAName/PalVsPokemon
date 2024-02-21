<script lang="ts">
	import { fade } from 'svelte/transition';

	let roundCount = 0;
	export { roundCount as round };

	export let wins = 0;
	export let loses = 0;
</script>

<div
	class="flex flex-row items-center justify-center rounded-b-lg border-x border-b border-black bg-white align-middle text-5xl"
>
	<div class="grow bg-gradient-to-r from-green-700 py-4 pb-5 text-left">
		🏆{wins}
	</div>
	<div class="text-center text-2xl">
		Round
		<br />
		{roundCount}
	</div>
	<div class="grow bg-gradient-to-l from-red-700 py-4 pb-5 text-right">
		{loses}💀
	</div>
</div>
