import { getRandomCreatures } from '../../utils/getCreaturesFromDatabase';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ event, params }) {
	let amount = parseInt(params.amount);

	let response = await getRandomCreatures(amount);

	return json(response);
}
