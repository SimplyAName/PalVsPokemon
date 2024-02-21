import { getRandomCreatures } from '../utils/getCreaturesFromDatabase';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ event }) {
	let response = await getRandomCreatures(1);

	return json(response[0]);
}
