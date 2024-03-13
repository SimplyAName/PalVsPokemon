import fs from 'node:fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let ROOT_DIR = './prisma/seeds/';

function main() {
	fs.readdir(ROOT_DIR, async (err, files) => {
		if (err) {
			console.error(err);
			await prisma.$disconnect();

			throw err;
		} else {
			files.splice(files.indexOf('seed.ts'), 1);

			for (const file of files) {
				let importPath = `./${file}`;

				const seed = await import(importPath);

				await seed.default(prisma);

				console.log(`Seed ${file} ran`);
			}
		}

		await prisma.$disconnect();
	});
}

main();
