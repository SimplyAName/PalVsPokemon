import type { Answer } from '$lib/types/Answer';
import type { Score } from '$lib/types/ScoreCount';
import { writable } from 'svelte/store';

const roundCounter = writable(1);
const answerList = writable<Answer[]>([]);
const streak = writable(0);
const scoreCounter = writable<Score[]>([]);

export { answerList, roundCounter, streak, scoreCounter };
