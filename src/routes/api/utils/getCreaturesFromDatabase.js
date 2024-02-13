import { PrismaClient } from '@prisma/client';

/**
 * @typedef { import("@prisma/client").Creature } Creature
 */

/**
 * @param {Number} amount
 * @returns {Promise<Creature[]>} creatureList
 */
export async function getRandomCreatures(amount) {
	let prisma = new PrismaClient();

	/**
	 * @type {Creature[]}
	 */
	let response;

	try {
		const allIds = await prisma.creature.findMany({
			select: {
				id: true
			}
		});

		let flattenedIds = allIds.map((id) => id.id);

		let randIds = pickRandomIds(flattenedIds, amount);

		let randCreatureResult = await prisma.creature.findMany({
			where: { id: { in: randIds } }
		});

		randCreatureResult.forEach((creature) => {
			creature.imageLink = `images/${creature.originGame}/${creature.imageLink}`;
		});

		response = randCreatureResult;
	} catch (e) {
		console.log(e);

		response = [];
	} finally {
		await prisma.$disconnect();
	}

	return response;
}

/**
 * @param {number[]} idList
 * @param {number} [amount]
 * @returns {number[]} randomIds - array of random ids from the idList. If amount is not provided, only one random id is returned.
 */
function pickRandomIds(idList, amount) {
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