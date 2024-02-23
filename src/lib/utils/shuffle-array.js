/**
 * An implementation of the Fisher-Yates Sorting Algorithm
 *
 * @param {any[]} array
 * @returns {any[]} shuffled array
 */
function shuffleFn(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}

export const shuffle = shuffleFn;
