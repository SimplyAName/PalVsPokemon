import { PrismaClient } from '@prisma/client';

export default async function pokemonSeed(database: PrismaClient) {
	return await database.creature.createMany({
		data: [
			{
				creatureId: '1',
				name: 'Lamball',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lamball',
				imageLink: 'PalWorld\\001Lamball.webp'
			},
			{
				creatureId: '2',
				name: 'Cattiva',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cattiva',
				imageLink: 'PalWorld\\002Cattiva.webp'
			},
			{
				creatureId: '3',
				name: 'Chikipi',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Chikipi',
				imageLink: 'PalWorld\\003Chikipi.webp'
			},
			{
				creatureId: '4',
				name: 'Lifmunk',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lifmunk',
				imageLink: 'PalWorld\\004Lifmunk.webp'
			},
			{
				creatureId: '5',
				name: 'Foxparks',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Foxparks',
				imageLink: 'PalWorld\\005Foxparks.webp'
			},
			{
				creatureId: '6',
				name: 'Fuack',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Fuack',
				imageLink: 'PalWorld\\006Fuack.webp'
			},
			{
				creatureId: '7',
				name: 'Sparkit',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Sparkit',
				imageLink: 'PalWorld\\007Sparkit.webp'
			},
			{
				creatureId: '8',
				name: 'Tanzee',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Tanzee',
				imageLink: 'PalWorld\\008Tanzee.webp'
			},
			{
				creatureId: '9',
				name: 'Rooby',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Rooby',
				imageLink: 'PalWorld\\009Rooby.webp'
			},
			{
				creatureId: '10',
				name: 'Pengullet',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Pengullet',
				imageLink: 'PalWorld\\010Pengullet.webp'
			},
			{
				creatureId: '11',
				name: 'Penking',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Penking',
				imageLink: 'PalWorld\\011Penking.webp'
			},
			{
				creatureId: '12',
				name: 'Jolthog',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Jolthog',
				imageLink: 'PalWorld\\012Jolthog.webp'
			},
			{
				creatureId: '13',
				name: 'Gumoss',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Gumoss',
				imageLink: 'PalWorld\\013Gumoss.webp'
			},
			{
				creatureId: '14',
				name: 'Vixy',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Vixy',
				imageLink: 'PalWorld\\014Vixy.webp'
			},
			{
				creatureId: '15',
				name: 'Hoocrates',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Hoocrates',
				imageLink: 'PalWorld\\015Hoocrates.webp'
			},
			{
				creatureId: '16',
				name: 'Teafant',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Teafant',
				imageLink: 'PalWorld\\016Teafant.webp'
			},
			{
				creatureId: '17',
				name: 'Depresso',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Depresso',
				imageLink: 'PalWorld\\017Depresso.webp'
			},
			{
				creatureId: '18',
				name: 'Cremis',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cremis',
				imageLink: 'PalWorld\\018Cremis.webp'
			},
			{
				creatureId: '19',
				name: 'Daedream',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Daedream',
				imageLink: 'PalWorld\\019Daedream.webp'
			},
			{
				creatureId: '20',
				name: 'Rushoar',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Rushoar',
				imageLink: 'PalWorld\\020Rushoar.webp'
			},
			{
				creatureId: '21',
				name: 'Nox',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Nox',
				imageLink: 'PalWorld\\021Nox.webp'
			},
			{
				creatureId: '22',
				name: 'Fuddler',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Fuddler',
				imageLink: 'PalWorld\\022Fuddler.webp'
			},
			{
				creatureId: '23',
				name: 'Killamari',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Killamari',
				imageLink: 'PalWorld\\023Killamari.webp'
			},
			{
				creatureId: '24',
				name: 'Mau',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mau',
				imageLink: 'PalWorld\\024Mau.webp'
			},
			{
				creatureId: '25',
				name: 'Celaray',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Celaray',
				imageLink: 'PalWorld\\025Celaray.webp'
			},
			{
				creatureId: '26',
				name: 'Direhowl',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Direhowl',
				imageLink: 'PalWorld\\026Direhowl.webp'
			},
			{
				creatureId: '27',
				name: 'Tocotoco',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Tocotoco',
				imageLink: 'PalWorld\\027Tocotoco.webp'
			},
			{
				creatureId: '28',
				name: 'Flopie',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Flopie',
				imageLink: 'PalWorld\\028Flopie.webp'
			},
			{
				creatureId: '29',
				name: 'Mozzarina',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mozzarina',
				imageLink: 'PalWorld\\029Mozzarina.webp'
			},
			{
				creatureId: '30',
				name: 'Bristla',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Bristla',
				imageLink: 'PalWorld\\030Bristla.webp'
			},
			{
				creatureId: '31',
				name: 'Gobfin',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Gobfin',
				imageLink: 'PalWorld\\031Gobfin.webp'
			},
			{
				creatureId: '32',
				name: 'Hangyu',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Hangyu',
				imageLink: 'PalWorld\\032Hangyu.webp'
			},
			{
				creatureId: '33',
				name: 'Mossanda',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mossanda',
				imageLink: 'PalWorld\\033Mossanda.webp'
			},
			{
				creatureId: '34',
				name: 'Woolipop',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Woolipop',
				imageLink: 'PalWorld\\034Woolipop.webp'
			},
			{
				creatureId: '35',
				name: 'Caprity',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Caprity',
				imageLink: 'PalWorld\\035Caprity.webp'
			},
			{
				creatureId: '36',
				name: 'Melpaca',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Melpaca',
				imageLink: 'PalWorld\\036Melpaca.webp'
			},
			{
				creatureId: '37',
				name: 'Eikthyrdeer',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Eikthyrdeer',
				imageLink: 'PalWorld\\037Eikthyrdeer.webp'
			},
			{
				creatureId: '38',
				name: 'Nitewing',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Nitewing',
				imageLink: 'PalWorld\\038Nitewing.webp'
			},
			{
				creatureId: '39',
				name: 'Ribbuny',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Ribbuny',
				imageLink: 'PalWorld\\039Ribbuny.webp'
			},
			{
				creatureId: '40',
				name: 'Incineram',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Incineram',
				imageLink: 'PalWorld\\040Incineram.webp'
			},
			{
				creatureId: '41',
				name: 'Cinnamoth',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cinnamoth',
				imageLink: 'PalWorld\\041Cinnamoth.webp'
			},
			{
				creatureId: '42',
				name: 'Arsox',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Arsox',
				imageLink: 'PalWorld\\042Arsox.webp'
			},
			{
				creatureId: '43',
				name: 'Dumud',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Dumud',
				imageLink: 'PalWorld\\043Dumud.webp'
			},
			{
				creatureId: '44',
				name: 'Cawgnito',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cawgnito',
				imageLink: 'PalWorld\\044Cawgnito.webp'
			},
			{
				creatureId: '45',
				name: 'Leezpunk',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Leezpunk',
				imageLink: 'PalWorld\\045Leezpunk.webp'
			},
			{
				creatureId: '46',
				name: 'Loupmoon',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Loupmoon',
				imageLink: 'PalWorld\\046Loupmoon.webp'
			},
			{
				creatureId: '47',
				name: 'Galeclaw',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Galeclaw',
				imageLink: 'PalWorld\\047Galeclaw.webp'
			},
			{
				creatureId: '48',
				name: 'Robinquill',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Robinquill',
				imageLink: 'PalWorld\\048Robinquill.webp'
			},
			{
				creatureId: '49',
				name: 'Gorirat',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Gorirat',
				imageLink: 'PalWorld\\049Gorirat.webp'
			},
			{
				creatureId: '50',
				name: 'Beegarde',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Beegarde',
				imageLink: 'PalWorld\\050Beegarde.webp'
			},
			{
				creatureId: '51',
				name: 'Elizabee',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Elizabee',
				imageLink: 'PalWorld\\051Elizabee.webp'
			},
			{
				creatureId: '52',
				name: 'Grintale',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Grintale',
				imageLink: 'PalWorld\\052Grintale.webp'
			},
			{
				creatureId: '53',
				name: 'Swee',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Swee',
				imageLink: 'PalWorld\\053Swee.webp'
			},
			{
				creatureId: '54',
				name: 'Sweepa',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Sweepa',
				imageLink: 'PalWorld\\054Sweepa.webp'
			},
			{
				creatureId: '55',
				name: 'Chillet',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Chillet',
				imageLink: 'PalWorld\\055Chillet.webp'
			},
			{
				creatureId: '56',
				name: 'Univolt',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Univolt',
				imageLink: 'PalWorld\\056Univolt.webp'
			},
			{
				creatureId: '57',
				name: 'Foxcicle',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Foxcicle',
				imageLink: 'PalWorld\\057Foxcicle.webp'
			},
			{
				creatureId: '58',
				name: 'Pyrin',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Pyrin',
				imageLink: 'PalWorld\\058Pyrin.webp'
			},
			{
				creatureId: '59',
				name: 'Reindrix',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Reindrix',
				imageLink: 'PalWorld\\059Reindrix.webp'
			},
			{
				creatureId: '60',
				name: 'Rayhound',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Rayhound',
				imageLink: 'PalWorld\\060Rayhound.webp'
			},
			{
				creatureId: '61',
				name: 'Kitsun',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Kitsun',
				imageLink: 'PalWorld\\061Kitsun.webp'
			},
			{
				creatureId: '62',
				name: 'Dazzi',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Dazzi',
				imageLink: 'PalWorld\\062Dazzi.webp'
			},
			{
				creatureId: '63',
				name: 'Lunaris',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lunaris',
				imageLink: 'PalWorld\\063Lunaris.webp'
			},
			{
				creatureId: '64',
				name: 'Dinossom',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Dinossom',
				imageLink: 'PalWorld\\064Dinossom.webp'
			},
			{
				creatureId: '65',
				name: 'Surfent',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Surfent',
				imageLink: 'PalWorld\\065Surfent.webp'
			},
			{
				creatureId: '66',
				name: 'Maraith',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Maraith',
				imageLink: 'PalWorld\\066Maraith.webp'
			},
			{
				creatureId: '67',
				name: 'Digtoise',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Digtoise',
				imageLink: 'PalWorld\\067Digtoise.webp'
			},
			{
				creatureId: '68',
				name: 'Tombat',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Tombat',
				imageLink: 'PalWorld\\068Tombat.webp'
			},
			{
				creatureId: '69',
				name: 'Lovander',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lovander',
				imageLink: 'PalWorld\\069Lovander.webp'
			},
			{
				creatureId: '70',
				name: 'Flambelle',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Flambelle',
				imageLink: 'PalWorld\\070Flambelle.webp'
			},
			{
				creatureId: '71',
				name: 'Vanwyrm',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Vanwyrm',
				imageLink: 'PalWorld\\071Vanwyrm.webp'
			},
			{
				creatureId: '72',
				name: 'Bushi',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Bushi',
				imageLink: 'PalWorld\\072Bushi.webp'
			},
			{
				creatureId: '73',
				name: 'Beakon',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Beakon',
				imageLink: 'PalWorld\\073Beakon.webp'
			},
			{
				creatureId: '74',
				name: 'Ragnahawk',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Ragnahawk',
				imageLink: 'PalWorld\\074Ragnahawk.webp'
			},
			{
				creatureId: '75',
				name: 'Katress',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Katress',
				imageLink: 'PalWorld\\075Katress.webp'
			},
			{
				creatureId: '76',
				name: 'Wixen',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Wixen',
				imageLink: 'PalWorld\\076Wixen.webp'
			},
			{
				creatureId: '77',
				name: 'Verdash',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Verdash',
				imageLink: 'PalWorld\\077Verdash.webp'
			},
			{
				creatureId: '78',
				name: 'Vaelet',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Vaelet',
				imageLink: 'PalWorld\\078Vaelet.webp'
			},
			{
				creatureId: '79',
				name: 'Sibelyx',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Sibelyx',
				imageLink: 'PalWorld\\079Sibelyx.webp'
			},
			{
				creatureId: '80',
				name: 'Elphidran',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Elphidran',
				imageLink: 'PalWorld\\080Elphidran.webp'
			},
			{
				creatureId: '81',
				name: 'Kelpsea',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Kelpsea',
				imageLink: 'PalWorld\\081Kelpsea.webp'
			},
			{
				creatureId: '82',
				name: 'Azurobe',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Azurobe',
				imageLink: 'PalWorld\\082Azurobe.webp'
			},
			{
				creatureId: '83',
				name: 'Cryolinx',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cryolinx',
				imageLink: 'PalWorld\\083Cryolinx.webp'
			},
			{
				creatureId: '84',
				name: 'Blazehowl',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Blazehowl',
				imageLink: 'PalWorld\\084Blazehowl.webp'
			},
			{
				creatureId: '85',
				name: 'Relaxaurus',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Relaxaurus',
				imageLink: 'PalWorld\\085Relaxaurus.webp'
			},
			{
				creatureId: '86',
				name: 'Broncherry',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Broncherry',
				imageLink: 'PalWorld\\086Broncherry.webp'
			},
			{
				creatureId: '87',
				name: 'Petallia',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Petallia',
				imageLink: 'PalWorld\\087Petallia.webp'
			},
			{
				creatureId: '88',
				name: 'Reptyro',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Reptyro',
				imageLink: 'PalWorld\\088Reptyro.webp'
			},
			{
				creatureId: '89',
				name: 'Kingpaca',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Kingpaca',
				imageLink: 'PalWorld\\089Kingpaca.webp'
			},
			{
				creatureId: '90',
				name: 'Mammorest',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mammorest',
				imageLink: 'PalWorld\\090Mammorest.webp'
			},
			{
				creatureId: '91',
				name: 'Wumpo',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Wumpo',
				imageLink: 'PalWorld\\091Wumpo.webp'
			},
			{
				creatureId: '92',
				name: 'Warsect',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Warsect',
				imageLink: 'PalWorld\\092Warsect.webp'
			},
			{
				creatureId: '93',
				name: 'Fenglope',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Fenglope',
				imageLink: 'PalWorld\\093Fenglope.webp'
			},
			{
				creatureId: '94',
				name: 'Felbat',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Felbat',
				imageLink: 'PalWorld\\094Felbat.webp'
			},
			{
				creatureId: '95',
				name: 'Quivern',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Quivern',
				imageLink: 'PalWorld\\095Quivern.webp'
			},
			{
				creatureId: '96',
				name: 'Blazamut',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Blazamut',
				imageLink: 'PalWorld\\096Blazamut.webp'
			},
			{
				creatureId: '97',
				name: 'Helzephyr',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Helzephyr',
				imageLink: 'PalWorld\\097Helzephyr.webp'
			},
			{
				creatureId: '98',
				name: 'Astegon',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Astegon',
				imageLink: 'PalWorld\\098Astegon.webp'
			},
			{
				creatureId: '99',
				name: 'Menasting',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Menasting',
				imageLink: 'PalWorld\\099Menasting.webp'
			},
			{
				creatureId: '100',
				name: 'Anubis',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Anubis',
				imageLink: 'PalWorld\\100Anubis.webp'
			},
			{
				creatureId: '101',
				name: 'Jormuntide',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Jormuntide',
				imageLink: 'PalWorld\\101Jormuntide.webp'
			},
			{
				creatureId: '102',
				name: 'Suzaku',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Suzaku',
				imageLink: 'PalWorld\\102Suzaku.webp'
			},
			{
				creatureId: '103',
				name: 'Grizzbolt',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Grizzbolt',
				imageLink: 'PalWorld\\103Grizzbolt.webp'
			},
			{
				creatureId: '104',
				name: 'Lyleen',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lyleen',
				imageLink: 'PalWorld\\104Lyleen.webp'
			},
			{
				creatureId: '105',
				name: 'Faleris',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Faleris',
				imageLink: 'PalWorld\\105Faleris.webp'
			},
			{
				creatureId: '106',
				name: 'Orserk',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Orserk',
				imageLink: 'PalWorld\\106Orserk.webp'
			},
			{
				creatureId: '107',
				name: 'Shadowbeak',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Shadowbeak',
				imageLink: 'PalWorld\\107Shadowbeak.webp'
			},
			{
				creatureId: '108',
				name: 'Paladius',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Paladius',
				imageLink: 'PalWorld\\108Paladius.webp'
			},
			{
				creatureId: '109',
				name: 'Necromus',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Necromus',
				imageLink: 'PalWorld\\109Necromus.webp'
			},
			{
				creatureId: '110',
				name: 'Frostallion',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Frostallion',
				imageLink: 'PalWorld\\110Frostallion.webp'
			},
			{
				creatureId: '111',
				name: 'Jetragon',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Jetragon',
				imageLink: 'PalWorld\\111Jetragon.webp'
			}
		]
	});
}
