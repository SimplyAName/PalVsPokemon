import { writable } from 'svelte/store';

export const roundCounter = writable(1);
export const roundScore = writable(0);
