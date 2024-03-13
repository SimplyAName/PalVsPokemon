import { shuffle } from '$lib/utils/shuffle-array';

export async function getRandCreatures(questionAmount: number) {
	const resultList = await fetch(`/api/question/${questionAmount}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	});

	if (resultList.ok) {
		let creatureList = await resultList.json();

		creatureList = shuffle(creatureList);

		return creatureList;
	}

	console.error(resultList);

	throw new Error(`Failed to get questions! Status: ${resultList.status}`);
}
