<script>
	export let color = '#000000';
	export let size = '100px';
	export let duration = '3s';
	export let background = '';
</script>

<div
	class="square rounded-md shadow"
	{color}
	style="--size: {size}; --color: {color}; --duration: {duration};--background: {background}"
/>

<style>
	.square {
		width: var(--size);
		height: var(--size);
		background-color: var(--color);
		animation: spinningAnimation var(--duration) 0s infinite ease-in;
		background: var(--background);
	}

	@keyframes spinningAnimation {
		25% {
			transform: rotateX(180deg) rotateY(0);
		}
		50% {
			transform: rotateX(180deg) rotateY(180deg);
		}
		75% {
			transform: rotateX(0) rotateY(180deg);
		}
		100% {
			transform: rotateX(0) rotateY(0);
		}
	}
</style>
