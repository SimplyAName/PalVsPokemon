import dbClient from '$lib/database/db.server';
import type { Creature } from '@prisma/client';

/**
 * @param {Number} amount
 * @returns {Promise<Creature[]>} creatureList containing random pals and pokemon. Guaranteed for a minimum of 2 pals
 */
export async function getRandomCreatures(amount: number): Promise<Creature[]> {
	/**
	 * @type {Creature[]}
	 */
	let response: Creature[];

	try {
		//Make sure not all pokemon are pick as they outweigh pals 10-1, min of 2 pals
		const palAmount = Math.max(Math.floor(Math.random() * amount), 2);
		const pokeAmount = amount - palAmount;

		console.log(palAmount, pokeAmount);

		const palIds = await getRandCreatureIds('PalWorld', palAmount);
		const pokeIds = await getRandCreatureIds('Pokémon', pokeAmount);

		let randIds = palIds.concat(pokeIds);

		let randCreatureResult = await dbClient.creature.findMany({
			where: { id: { in: randIds } }
		});

		randCreatureResult.forEach((creature) => {
			creature.imageLink = `images/${creature.imageLink}`;
		});

		response = randCreatureResult;
	} catch (e) {
		console.log(e);

		response = [];
	}

	return response;
}

/**
 * @param {number[]} idList
 * @param {number} [amount]
 * @returns {number[]} randomIds - array of random ids from the idList. If amount is not provided, only one random id is returned.
 */
function pickRandomIds(idList: number[], amount: number): number[] {
	amount = amount || 1;
	let result = [];
	let tempCopy = [...idList];

	for (let i = 0; i < amount; i++) {
		if (tempCopy.length === 0) break;

		let rand = Math.floor(Math.random() * tempCopy.length);

		result.push(tempCopy[rand]);

		tempCopy.splice(rand, 1);
	}

	return result;
}

async function getRandCreatureIds(game: string, amount: number) {
	const allPalIds = await dbClient.creature.findMany({
		select: {
			id: true
		},
		where: {
			originGame: game
		}
	});

	let flattenedPalIds = allPalIds.map((id) => id.id);
	return pickRandomIds(flattenedPalIds, amount);
}
