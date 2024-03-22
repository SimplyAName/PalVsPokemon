/**
 *
 * @param {PrismaClient} database
 * @returns
 */
export default async function pokemonSeed(database) {
	return await database.creature.createMany({
		data: [
			{
				creatureId: '1',
				name: 'Lamball',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lamball',
				imageLink: 'PalWorld\\1Lamball.webp'
			},
			{
				creatureId: '2',
				name: 'Cattiva',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cattiva',
				imageLink: 'PalWorld\\2Cattiva.webp'
			},
			{
				creatureId: '3',
				name: 'Chikipi',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Chikipi',
				imageLink: 'PalWorld\\3Chikipi.webp'
			},
			{
				creatureId: '4',
				name: 'Lifmunk',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lifmunk',
				imageLink: 'PalWorld\\4Lifmunk.webp'
			},
			{
				creatureId: '5',
				name: 'Foxparks',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Foxparks',
				imageLink: 'PalWorld\\5Foxparks.webp'
			},
			{
				creatureId: '6',
				name: 'Fuack',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Fuack',
				imageLink: 'PalWorld\\6Fuack.webp'
			},
			{
				creatureId: '7',
				name: 'Sparkit',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Sparkit',
				imageLink: 'PalWorld\\7Sparkit.webp'
			},
			{
				creatureId: '8',
				name: 'Tanzee',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Tanzee',
				imageLink: 'PalWorld\\8Tanzee.webp'
			},
			{
				creatureId: '9',
				name: 'Rooby',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Rooby',
				imageLink: 'PalWorld\\9Rooby.webp'
			},
			{
				creatureId: '10',
				name: 'Pengullet',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Pengullet',
				imageLink: 'PalWorld\\10Pengullet.webp'
			},
			{
				creatureId: '11',
				name: 'Penking',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Penking',
				imageLink: 'PalWorld\\11Penking.webp'
			},
			{
				creatureId: '12',
				name: 'Jolthog',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Jolthog',
				imageLink: 'PalWorld\\12Jolthog.webp'
			},
			{
				creatureId: '13',
				name: 'Gumoss',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Gumoss',
				imageLink: 'PalWorld\\13Gumoss.webp'
			},
			{
				creatureId: '14',
				name: 'Vixy',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Vixy',
				imageLink: 'PalWorld\\14Vixy.webp'
			},
			{
				creatureId: '15',
				name: 'Hoocrates',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Hoocrates',
				imageLink: 'PalWorld\\15Hoocrates.webp'
			},
			{
				creatureId: '16',
				name: 'Teafant',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Teafant',
				imageLink: 'PalWorld\\16Teafant.webp'
			},
			{
				creatureId: '17',
				name: 'Depresso',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Depresso',
				imageLink: 'PalWorld\\17Depresso.webp'
			},
			{
				creatureId: '18',
				name: 'Cremis',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cremis',
				imageLink: 'PalWorld\\18Cremis.webp'
			},
			{
				creatureId: '19',
				name: 'Daedream',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Daedream',
				imageLink: 'PalWorld\\19Daedream.webp'
			},
			{
				creatureId: '20',
				name: 'Rushoar',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Rushoar',
				imageLink: 'PalWorld\\20Rushoar.webp'
			},
			{
				creatureId: '21',
				name: 'Nox',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Nox',
				imageLink: 'PalWorld\\21Nox.webp'
			},
			{
				creatureId: '22',
				name: 'Fuddler',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Fuddler',
				imageLink: 'PalWorld\\22Fuddler.webp'
			},
			{
				creatureId: '23',
				name: 'Killamari',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Killamari',
				imageLink: 'PalWorld\\23Killamari.webp'
			},
			{
				creatureId: '24',
				name: 'Mau',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mau',
				imageLink: 'PalWorld\\24Mau.webp'
			},
			{
				creatureId: '25',
				name: 'Celaray',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Celaray',
				imageLink: 'PalWorld\\25Celaray.webp'
			},
			{
				creatureId: '26',
				name: 'Direhowl',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Direhowl',
				imageLink: 'PalWorld\\26Direhowl.webp'
			},
			{
				creatureId: '27',
				name: 'Tocotoco',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Tocotoco',
				imageLink: 'PalWorld\\27Tocotoco.webp'
			},
			{
				creatureId: '28',
				name: 'Flopie',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Flopie',
				imageLink: 'PalWorld\\28Flopie.webp'
			},
			{
				creatureId: '29',
				name: 'Mozzarina',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mozzarina',
				imageLink: 'PalWorld\\29Mozzarina.webp'
			},
			{
				creatureId: '30',
				name: 'Bristla',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Bristla',
				imageLink: 'PalWorld\\30Bristla.webp'
			},
			{
				creatureId: '31',
				name: 'Gobfin',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Gobfin',
				imageLink: 'PalWorld\\31Gobfin.webp'
			},
			{
				creatureId: '32',
				name: 'Hangyu',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Hangyu',
				imageLink: 'PalWorld\\32Hangyu.webp'
			},
			{
				creatureId: '33',
				name: 'Mossanda',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mossanda',
				imageLink: 'PalWorld\\33Mossanda.webp'
			},
			{
				creatureId: '34',
				name: 'Woolipop',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Woolipop',
				imageLink: 'PalWorld\\34Woolipop.webp'
			},
			{
				creatureId: '35',
				name: 'Caprity',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Caprity',
				imageLink: 'PalWorld\\35Caprity.webp'
			},
			{
				creatureId: '36',
				name: 'Melpaca',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Melpaca',
				imageLink: 'PalWorld\\36Melpaca.webp'
			},
			{
				creatureId: '37',
				name: 'Eikthyrdeer',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Eikthyrdeer',
				imageLink: 'PalWorld\\37Eikthyrdeer.webp'
			},
			{
				creatureId: '38',
				name: 'Nitewing',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Nitewing',
				imageLink: 'PalWorld\\38Nitewing.webp'
			},
			{
				creatureId: '39',
				name: 'Ribbuny',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Ribbuny',
				imageLink: 'PalWorld\\39Ribbuny.webp'
			},
			{
				creatureId: '40',
				name: 'Incineram',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Incineram',
				imageLink: 'PalWorld\\40Incineram.webp'
			},
			{
				creatureId: '41',
				name: 'Cinnamoth',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cinnamoth',
				imageLink: 'PalWorld\\41Cinnamoth.webp'
			},
			{
				creatureId: '42',
				name: 'Arsox',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Arsox',
				imageLink: 'PalWorld\\42Arsox.webp'
			},
			{
				creatureId: '43',
				name: 'Dumud',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Dumud',
				imageLink: 'PalWorld\\43Dumud.webp'
			},
			{
				creatureId: '44',
				name: 'Cawgnito',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cawgnito',
				imageLink: 'PalWorld\\44Cawgnito.webp'
			},
			{
				creatureId: '45',
				name: 'Leezpunk',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Leezpunk',
				imageLink: 'PalWorld\\45Leezpunk.webp'
			},
			{
				creatureId: '46',
				name: 'Loupmoon',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Loupmoon',
				imageLink: 'PalWorld\\46Loupmoon.webp'
			},
			{
				creatureId: '47',
				name: 'Galeclaw',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Galeclaw',
				imageLink: 'PalWorld\\47Galeclaw.webp'
			},
			{
				creatureId: '48',
				name: 'Robinquill',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Robinquill',
				imageLink: 'PalWorld\\48Robinquill.webp'
			},
			{
				creatureId: '49',
				name: 'Gorirat',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Gorirat',
				imageLink: 'PalWorld\\49Gorirat.webp'
			},
			{
				creatureId: '50',
				name: 'Beegarde',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Beegarde',
				imageLink: 'PalWorld\\50Beegarde.webp'
			},
			{
				creatureId: '51',
				name: 'Elizabee',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Elizabee',
				imageLink: 'PalWorld\\51Elizabee.webp'
			},
			{
				creatureId: '52',
				name: 'Grintale',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Grintale',
				imageLink: 'PalWorld\\52Grintale.webp'
			},
			{
				creatureId: '53',
				name: 'Swee',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Swee',
				imageLink: 'PalWorld\\53Swee.webp'
			},
			{
				creatureId: '54',
				name: 'Sweepa',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Sweepa',
				imageLink: 'PalWorld\\54Sweepa.webp'
			},
			{
				creatureId: '55',
				name: 'Chillet',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Chillet',
				imageLink: 'PalWorld\\55Chillet.webp'
			},
			{
				creatureId: '56',
				name: 'Univolt',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Univolt',
				imageLink: 'PalWorld\\56Univolt.webp'
			},
			{
				creatureId: '57',
				name: 'Foxcicle',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Foxcicle',
				imageLink: 'PalWorld\\57Foxcicle.webp'
			},
			{
				creatureId: '58',
				name: 'Pyrin',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Pyrin',
				imageLink: 'PalWorld\\58Pyrin.webp'
			},
			{
				creatureId: '59',
				name: 'Reindrix',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Reindrix',
				imageLink: 'PalWorld\\59Reindrix.webp'
			},
			{
				creatureId: '60',
				name: 'Rayhound',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Rayhound',
				imageLink: 'PalWorld\\60Rayhound.webp'
			},
			{
				creatureId: '61',
				name: 'Kitsun',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Kitsun',
				imageLink: 'PalWorld\\61Kitsun.webp'
			},
			{
				creatureId: '62',
				name: 'Dazzi',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Dazzi',
				imageLink: 'PalWorld\\62Dazzi.webp'
			},
			{
				creatureId: '63',
				name: 'Lunaris',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lunaris',
				imageLink: 'PalWorld\\63Lunaris.webp'
			},
			{
				creatureId: '64',
				name: 'Dinossom',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Dinossom',
				imageLink: 'PalWorld\\64Dinossom.webp'
			},
			{
				creatureId: '65',
				name: 'Surfent',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Surfent',
				imageLink: 'PalWorld\\65Surfent.webp'
			},
			{
				creatureId: '66',
				name: 'Maraith',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Maraith',
				imageLink: 'PalWorld\\66Maraith.webp'
			},
			{
				creatureId: '67',
				name: 'Digtoise',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Digtoise',
				imageLink: 'PalWorld\\67Digtoise.webp'
			},
			{
				creatureId: '68',
				name: 'Tombat',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Tombat',
				imageLink: 'PalWorld\\68Tombat.webp'
			},
			{
				creatureId: '69',
				name: 'Lovander',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Lovander',
				imageLink: 'PalWorld\\69Lovander.webp'
			},
			{
				creatureId: '70',
				name: 'Flambelle',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Flambelle',
				imageLink: 'PalWorld\\70Flambelle.webp'
			},
			{
				creatureId: '71',
				name: 'Vanwyrm',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Vanwyrm',
				imageLink: 'PalWorld\\71Vanwyrm.webp'
			},
			{
				creatureId: '72',
				name: 'Bushi',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Bushi',
				imageLink: 'PalWorld\\72Bushi.webp'
			},
			{
				creatureId: '73',
				name: 'Beakon',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Beakon',
				imageLink: 'PalWorld\\73Beakon.webp'
			},
			{
				creatureId: '74',
				name: 'Ragnahawk',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Ragnahawk',
				imageLink: 'PalWorld\\74Ragnahawk.webp'
			},
			{
				creatureId: '75',
				name: 'Katress',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Katress',
				imageLink: 'PalWorld\\75Katress.webp'
			},
			{
				creatureId: '76',
				name: 'Wixen',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Wixen',
				imageLink: 'PalWorld\\76Wixen.webp'
			},
			{
				creatureId: '77',
				name: 'Verdash',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Verdash',
				imageLink: 'PalWorld\\77Verdash.webp'
			},
			{
				creatureId: '78',
				name: 'Vaelet',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Vaelet',
				imageLink: 'PalWorld\\78Vaelet.webp'
			},
			{
				creatureId: '79',
				name: 'Sibelyx',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Sibelyx',
				imageLink: 'PalWorld\\79Sibelyx.webp'
			},
			{
				creatureId: '80',
				name: 'Elphidran',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Elphidran',
				imageLink: 'PalWorld\\80Elphidran.webp'
			},
			{
				creatureId: '81',
				name: 'Kelpsea',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Kelpsea',
				imageLink: 'PalWorld\\81Kelpsea.webp'
			},
			{
				creatureId: '82',
				name: 'Azurobe',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Azurobe',
				imageLink: 'PalWorld\\82Azurobe.webp'
			},
			{
				creatureId: '83',
				name: 'Cryolinx',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Cryolinx',
				imageLink: 'PalWorld\\83Cryolinx.webp'
			},
			{
				creatureId: '84',
				name: 'Blazehowl',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Blazehowl',
				imageLink: 'PalWorld\\84Blazehowl.webp'
			},
			{
				creatureId: '85',
				name: 'Relaxaurus',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Relaxaurus',
				imageLink: 'PalWorld\\85Relaxaurus.webp'
			},
			{
				creatureId: '86',
				name: 'Broncherry',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Broncherry',
				imageLink: 'PalWorld\\86Broncherry.webp'
			},
			{
				creatureId: '87',
				name: 'Petallia',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Petallia',
				imageLink: 'PalWorld\\87Petallia.webp'
			},
			{
				creatureId: '88',
				name: 'Reptyro',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Reptyro',
				imageLink: 'PalWorld\\88Reptyro.webp'
			},
			{
				creatureId: '89',
				name: 'Kingpaca',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Kingpaca',
				imageLink: 'PalWorld\\89Kingpaca.webp'
			},
			{
				creatureId: '90',
				name: 'Mammorest',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Mammorest',
				imageLink: 'PalWorld\\90Mammorest.webp'
			},
			{
				creatureId: '91',
				name: 'Wumpo',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Wumpo',
				imageLink: 'PalWorld\\91Wumpo.webp'
			},
			{
				creatureId: '92',
				name: 'Warsect',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Warsect',
				imageLink: 'PalWorld\\92Warsect.webp'
			},
			{
				creatureId: '93',
				name: 'Fenglope',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Fenglope',
				imageLink: 'PalWorld\\93Fenglope.webp'
			},
			{
				creatureId: '94',
				name: 'Felbat',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Felbat',
				imageLink: 'PalWorld\\94Felbat.webp'
			},
			{
				creatureId: '95',
				name: 'Quivern',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Quivern',
				imageLink: 'PalWorld\\95Quivern.webp'
			},
			{
				creatureId: '96',
				name: 'Blazamut',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Blazamut',
				imageLink: 'PalWorld\\96Blazamut.webp'
			},
			{
				creatureId: '97',
				name: 'Helzephyr',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Helzephyr',
				imageLink: 'PalWorld\\97Helzephyr.webp'
			},
			{
				creatureId: '98',
				name: 'Astegon',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Astegon',
				imageLink: 'PalWorld\\98Astegon.webp'
			},
			{
				creatureId: '99',
				name: 'Menasting',
				originGame: 'PalWorld',
				wikiLink: 'https://palworld.fandom.com/wiki/Menasting',
				imageLink: 'PalWorld\\99Menasting.webp'
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
