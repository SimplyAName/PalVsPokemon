import { cubicOut, bounceIn } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

/**
 * Animates the opacity and scale of an element. `in` transitions animate from an element's current (default) values to the provided values, passed as parameters. `out` transitions animate from the provided values to an element's default values.
 *
 * https://svelte.dev/docs/svelte-transition
 * @param {HTMLElement} node
 * @param {{}} parameters
 * @returns {TransitionConfig}
 */
export function slamDown(
	node: HTMLElement,
	{ delay = 0, duration = 1200, easing = cubicOut, start = 1.5, x = 100, y = 0, opacity = 0 }
): TransitionConfig {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const sd = start;
	const od = target_opacity * (1 - opacity);

	return {
		delay,
		duration,
		easing,
		css: (t, u) => {
			console.log(`scale(${sd * u})`);

			return `
			transform: ${transform} scale(${sd * u}) translate(${(1 - t) * x}px, ${(1 - t) * y}px;
			opacity: ${target_opacity - od * u}
		`;
		}
	};
}
