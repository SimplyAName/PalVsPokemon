import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ event }) {
	let response;

	let prisma = new PrismaClient();

	try {
		const productsCount = await prisma.creature.count();

		const skip = Math.floor(Math.random() * productsCount);

		let randCreatureResult = await prisma.creature.findMany({
			take: 1,
			skip: skip
		});

		let randCreature = randCreatureResult[0];

		randCreature.imageLink = `images/${randCreature.originGame}/${randCreature.imageLink}`;

		response = randCreature;
	} catch (e) {
		console.log(e);
		response = { error: e };
	} finally {
		await prisma.$disconnect();
	}

	return json(response);
}
