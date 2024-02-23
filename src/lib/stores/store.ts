import type { Answer } from '$lib/types/Answer';
import { writable } from 'svelte/store';

const roundCounter = writable(1);
const answerList = writable<Answer[]>([]);

export { answerList, roundCounter };
