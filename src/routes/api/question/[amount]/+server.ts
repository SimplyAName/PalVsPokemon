import { getRandomCreatures } from '../../utils/getCreaturesFromDatabase';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ event, params }) {
	let response;

	let amount = parseInt(params.amount);

	response = await getRandomCreatures(amount);

	return json(response);
}
