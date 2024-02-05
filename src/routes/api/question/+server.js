import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ event }) {
	const prisma = new PrismaClient();

	const productsCount = await prisma.creature.count();

	const skip = Math.floor(Math.random() * productsCount);

	let randCreature = await prisma.creature.findMany({
		take: 1,
		skip: skip
	});

	await prisma.$disconnect();
    

	return json(randCreature[0]);
}
