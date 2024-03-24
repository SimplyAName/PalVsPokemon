export default async function pokemonSeed(database) {
	return await database.creature.createMany({
		data: [
			{
				creatureId: '1',
				name: 'Bulbasaur',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pokémon)',
				imageLink: 'Pokemon\\1Bulbasaur.webp'
			},
			{
				creatureId: '2',
				name: 'Ivysaur',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pokémon)',
				imageLink: 'Pokemon\\2Ivysaur.webp'
			},
			{
				creatureId: '3',
				name: 'Venusaur',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pokémon)',
				imageLink: 'Pokemon\\3Venusaur.webp'
			},
			{
				creatureId: '4',
				name: 'Charmander',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pokémon)',
				imageLink: 'Pokemon\\4Charmander.webp'
			},
			{
				creatureId: '5',
				name: 'Charmeleon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pokémon)',
				imageLink: 'Pokemon\\5Charmeleon.webp'
			},
			{
				creatureId: '6',
				name: 'Charizard',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pokémon)',
				imageLink: 'Pokemon\\6Charizard.webp'
			},
			{
				creatureId: '7',
				name: 'Squirtle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pokémon)',
				imageLink: 'Pokemon\\7Squirtle.webp'
			},
			{
				creatureId: '8',
				name: 'Wartortle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pokémon)',
				imageLink: 'Pokemon\\8Wartortle.webp'
			},
			{
				creatureId: '9',
				name: 'Blastoise',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pokémon)',
				imageLink: 'Pokemon\\9Blastoise.webp'
			},
			{
				creatureId: '10',
				name: 'Caterpie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pokémon)',
				imageLink: 'Pokemon\\10Caterpie.webp'
			},
			{
				creatureId: '11',
				name: 'Metapod',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pokémon)',
				imageLink: 'Pokemon\\11Metapod.webp'
			},
			{
				creatureId: '12',
				name: 'Butterfree',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pokémon)',
				imageLink: 'Pokemon\\12Butterfree.webp'
			},
			{
				creatureId: '13',
				name: 'Weedle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pokémon)',
				imageLink: 'Pokemon\\13Weedle.webp'
			},
			{
				creatureId: '14',
				name: 'Kakuna',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pokémon)',
				imageLink: 'Pokemon\\14Kakuna.webp'
			},
			{
				creatureId: '15',
				name: 'Beedrill',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pokémon)',
				imageLink: 'Pokemon\\15Beedrill.webp'
			},
			{
				creatureId: '16',
				name: 'Pidgey',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pokémon)',
				imageLink: 'Pokemon\\16Pidgey.webp'
			},
			{
				creatureId: '17',
				name: 'Pidgeotto',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pokémon)',
				imageLink: 'Pokemon\\17Pidgeotto.webp'
			},
			{
				creatureId: '18',
				name: 'Pidgeot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pokémon)',
				imageLink: 'Pokemon\\18Pidgeot.webp'
			},
			{
				creatureId: '19',
				name: 'Rattata',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pokémon)',
				imageLink: 'Pokemon\\19Rattata.webp'
			},
			{
				creatureId: '20',
				name: 'Raticate',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pokémon)',
				imageLink: 'Pokemon\\20Raticate.webp'
			},
			{
				creatureId: '21',
				name: 'Spearow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pokémon)',
				imageLink: 'Pokemon\\21Spearow.webp'
			},
			{
				creatureId: '22',
				name: 'Fearow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pokémon)',
				imageLink: 'Pokemon\\22Fearow.webp'
			},
			{
				creatureId: '23',
				name: 'Ekans',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pokémon)',
				imageLink: 'Pokemon\\23Ekans.webp'
			},
			{
				creatureId: '24',
				name: 'Arbok',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pokémon)',
				imageLink: 'Pokemon\\24Arbok.webp'
			},
			{
				creatureId: '25',
				name: 'Pikachu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pokémon)',
				imageLink: 'Pokemon\\25Pikachu.webp'
			},
			{
				creatureId: '26',
				name: 'Raichu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pokémon)',
				imageLink: 'Pokemon\\26Raichu.webp'
			},
			{
				creatureId: '27',
				name: 'Sandshrew',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pokémon)',
				imageLink: 'Pokemon\\27Sandshrew.webp'
			},
			{
				creatureId: '28',
				name: 'Sandslash',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pokémon)',
				imageLink: 'Pokemon\\28Sandslash.webp'
			},
			{
				creatureId: '29',
				name: 'Nidoran (Female)',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nidoran♀_(Pokémon)',
				imageLink: 'Pokemon\\29Nidoran-f.webp'
			},
			{
				creatureId: '30',
				name: 'Nidorina',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pokémon)',
				imageLink: 'Pokemon\\30Nidorina.webp'
			},
			{
				creatureId: '31',
				name: 'Nidoqueen',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pokémon)',
				imageLink: 'Pokemon\\31Nidoqueen.webp'
			},
			{
				creatureId: '32',
				name: 'Nidoran (Male)',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nidoran♂_(Pokémon)',
				imageLink: 'Pokemon\\32Nidoran-m.webp'
			},
			{
				creatureId: '33',
				name: 'Nidorino',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pokémon)',
				imageLink: 'Pokemon\\33Nidorino.webp'
			},
			{
				creatureId: '34',
				name: 'Nidoking',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pokémon)',
				imageLink: 'Pokemon\\34Nidoking.webp'
			},
			{
				creatureId: '35',
				name: 'Clefairy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pokémon)',
				imageLink: 'Pokemon\\35Clefairy.webp'
			},
			{
				creatureId: '36',
				name: 'Clefable',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Clefable_(Pokémon)',
				imageLink: 'Pokemon\\36Clefable.webp'
			},
			{
				creatureId: '37',
				name: 'Vulpix',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pokémon)',
				imageLink: 'Pokemon\\37Vulpix.webp'
			},
			{
				creatureId: '38',
				name: 'Ninetales',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pokémon)',
				imageLink: 'Pokemon\\38Ninetales.webp'
			},
			{
				creatureId: '39',
				name: 'Jigglypuff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pokémon)',
				imageLink: 'Pokemon\\39Jigglypuff.webp'
			},
			{
				creatureId: '40',
				name: 'Wigglytuff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pokémon)',
				imageLink: 'Pokemon\\40Wigglytuff.webp'
			},
			{
				creatureId: '41',
				name: 'Zubat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zubat_(Pokémon)',
				imageLink: 'Pokemon\\41Zubat.webp'
			},
			{
				creatureId: '42',
				name: 'Golbat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Golbat_(Pokémon)',
				imageLink: 'Pokemon\\42Golbat.webp'
			},
			{
				creatureId: '43',
				name: 'Oddish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pokémon)',
				imageLink: 'Pokemon\\43Oddish.webp'
			},
			{
				creatureId: '44',
				name: 'Gloom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gloom_(Pokémon)',
				imageLink: 'Pokemon\\44Gloom.webp'
			},
			{
				creatureId: '45',
				name: 'Vileplume',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pokémon)',
				imageLink: 'Pokemon\\45Vileplume.webp'
			},
			{
				creatureId: '46',
				name: 'Paras',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Paras_(Pokémon)',
				imageLink: 'Pokemon\\46Paras.webp'
			},
			{
				creatureId: '47',
				name: 'Parasect',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Parasect_(Pokémon)',
				imageLink: 'Pokemon\\47Parasect.webp'
			},
			{
				creatureId: '48',
				name: 'Venonat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Venonat_(Pokémon)',
				imageLink: 'Pokemon\\48Venonat.webp'
			},
			{
				creatureId: '49',
				name: 'Venomoth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pokémon)',
				imageLink: 'Pokemon\\49Venomoth.webp'
			},
			{
				creatureId: '50',
				name: 'Diglett',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pokémon)',
				imageLink: 'Pokemon\\50Diglett.webp'
			},
			{
				creatureId: '51',
				name: 'Dugtrio',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pokémon)',
				imageLink: 'Pokemon\\51Dugtrio.webp'
			},
			{
				creatureId: '52',
				name: 'Meowth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pokémon)',
				imageLink: 'Pokemon\\52Meowth.webp'
			},
			{
				creatureId: '53',
				name: 'Persian',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Persian_(Pokémon)',
				imageLink: 'Pokemon\\53Persian.webp'
			},
			{
				creatureId: '54',
				name: 'Psyduck',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pokémon)',
				imageLink: 'Pokemon\\54Psyduck.webp'
			},
			{
				creatureId: '55',
				name: 'Golduck',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Golduck_(Pokémon)',
				imageLink: 'Pokemon\\55Golduck.webp'
			},
			{
				creatureId: '56',
				name: 'Mankey',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pokémon)',
				imageLink: 'Pokemon\\56Mankey.webp'
			},
			{
				creatureId: '57',
				name: 'Primeape',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Primeape_(Pokémon)',
				imageLink: 'Pokemon\\57Primeape.webp'
			},
			{
				creatureId: '58',
				name: 'Growlithe',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pokémon)',
				imageLink: 'Pokemon\\58Growlithe.webp'
			},
			{
				creatureId: '59',
				name: 'Arcanine',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pokémon)',
				imageLink: 'Pokemon\\59Arcanine.webp'
			},
			{
				creatureId: '60',
				name: 'Poliwag',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pokémon)',
				imageLink: 'Pokemon\\60Poliwag.webp'
			},
			{
				creatureId: '61',
				name: 'Poliwhirl',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pokémon)',
				imageLink: 'Pokemon\\61Poliwhirl.webp'
			},
			{
				creatureId: '62',
				name: 'Poliwrath',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pokémon)',
				imageLink: 'Pokemon\\62Poliwrath.webp'
			},
			{
				creatureId: '63',
				name: 'Abra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Abra_(Pokémon)',
				imageLink: 'Pokemon\\63Abra.webp'
			},
			{
				creatureId: '64',
				name: 'Kadabra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pokémon)',
				imageLink: 'Pokemon\\64Kadabra.webp'
			},
			{
				creatureId: '65',
				name: 'Alakazam',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pokémon)',
				imageLink: 'Pokemon\\65Alakazam.webp'
			},
			{
				creatureId: '66',
				name: 'Machop',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Machop_(Pokémon)',
				imageLink: 'Pokemon\\66Machop.webp'
			},
			{
				creatureId: '67',
				name: 'Machoke',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Machoke_(Pokémon)',
				imageLink: 'Pokemon\\67Machoke.webp'
			},
			{
				creatureId: '68',
				name: 'Machamp',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Machamp_(Pokémon)',
				imageLink: 'Pokemon\\68Machamp.webp'
			},
			{
				creatureId: '69',
				name: 'Bellsprout',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pokémon)',
				imageLink: 'Pokemon\\69Bellsprout.webp'
			},
			{
				creatureId: '70',
				name: 'Weepinbell',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pokémon)',
				imageLink: 'Pokemon\\70Weepinbell.webp'
			},
			{
				creatureId: '71',
				name: 'Victreebel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pokémon)',
				imageLink: 'Pokemon\\71Victreebel.webp'
			},
			{
				creatureId: '72',
				name: 'Tentacool',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pokémon)',
				imageLink: 'Pokemon\\72Tentacool.webp'
			},
			{
				creatureId: '73',
				name: 'Tentacruel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pokémon)',
				imageLink: 'Pokemon\\73Tentacruel.webp'
			},
			{
				creatureId: '74',
				name: 'Geodude',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pokémon)',
				imageLink: 'Pokemon\\74Geodude.webp'
			},
			{
				creatureId: '75',
				name: 'Graveler',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pokémon)',
				imageLink: 'Pokemon\\75Graveler.webp'
			},
			{
				creatureId: '76',
				name: 'Golem',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Golem_(Pokémon)',
				imageLink: 'Pokemon\\76Golem.webp'
			},
			{
				creatureId: '77',
				name: 'Ponyta',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pokémon)',
				imageLink: 'Pokemon\\77Ponyta.webp'
			},
			{
				creatureId: '78',
				name: 'Rapidash',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pokémon)',
				imageLink: 'Pokemon\\78Rapidash.webp'
			},
			{
				creatureId: '79',
				name: 'Slowpoke',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pokémon)',
				imageLink: 'Pokemon\\79Slowpoke.webp'
			},
			{
				creatureId: '80',
				name: 'Slowbro',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pokémon)',
				imageLink: 'Pokemon\\80Slowbro.webp'
			},
			{
				creatureId: '81',
				name: 'Magnemite',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pokémon)',
				imageLink: 'Pokemon\\81Magnemite.webp'
			},
			{
				creatureId: '82',
				name: 'Magneton',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magneton_(Pokémon)',
				imageLink: 'Pokemon\\82Magneton.webp'
			},
			{
				creatureId: '83',
				name: 'Farfetchd',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Farfetchd_(Pokémon)',
				imageLink: 'Pokemon\\83Farfetchd.webp'
			},
			{
				creatureId: '84',
				name: 'Doduo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Doduo_(Pokémon)',
				imageLink: 'Pokemon\\84Doduo.webp'
			},
			{
				creatureId: '85',
				name: 'Dodrio',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pokémon)',
				imageLink: 'Pokemon\\85Dodrio.webp'
			},
			{
				creatureId: '86',
				name: 'Seel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Seel_(Pokémon)',
				imageLink: 'Pokemon\\86Seel.webp'
			},
			{
				creatureId: '87',
				name: 'Dewgong',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pokémon)',
				imageLink: 'Pokemon\\87Dewgong.webp'
			},
			{
				creatureId: '88',
				name: 'Grimer',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pokémon)',
				imageLink: 'Pokemon\\88Grimer.webp'
			},
			{
				creatureId: '89',
				name: 'Muk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Muk_(Pokémon)',
				imageLink: 'Pokemon\\89Muk.webp'
			},
			{
				creatureId: '90',
				name: 'Shellder',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shellder_(Pokémon)',
				imageLink: 'Pokemon\\90Shellder.webp'
			},
			{
				creatureId: '91',
				name: 'Cloyster',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pokémon)',
				imageLink: 'Pokemon\\91Cloyster.webp'
			},
			{
				creatureId: '92',
				name: 'Gastly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gastly_(Pokémon)',
				imageLink: 'Pokemon\\92Gastly.webp'
			},
			{
				creatureId: '93',
				name: 'Haunter',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pokémon)',
				imageLink: 'Pokemon\\93Haunter.webp'
			},
			{
				creatureId: '94',
				name: 'Gengar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pokémon)',
				imageLink: 'Pokemon\\94Gengar.webp'
			},
			{
				creatureId: '95',
				name: 'Onix',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Onix_(Pokémon)',
				imageLink: 'Pokemon\\95Onix.webp'
			},
			{
				creatureId: '96',
				name: 'Drowzee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pokémon)',
				imageLink: 'Pokemon\\96Drowzee.webp'
			},
			{
				creatureId: '97',
				name: 'Hypno',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hypno_(Pokémon)',
				imageLink: 'Pokemon\\97Hypno.webp'
			},
			{
				creatureId: '98',
				name: 'Krabby',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Krabby_(Pokémon)',
				imageLink: 'Pokemon\\98Krabby.webp'
			},
			{
				creatureId: '99',
				name: 'Kingler',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kingler_(Pokémon)',
				imageLink: 'Pokemon\\99Kingler.webp'
			},
			{
				creatureId: '100',
				name: 'Voltorb',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pokémon)',
				imageLink: 'Pokemon\\100Voltorb.webp'
			},
			{
				creatureId: '101',
				name: 'Electrode',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pokémon)',
				imageLink: 'Pokemon\\101Electrode.webp'
			},
			{
				creatureId: '102',
				name: 'Exeggcute',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pokémon)',
				imageLink: 'Pokemon\\102Exeggcute.webp'
			},
			{
				creatureId: '103',
				name: 'Exeggutor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pokémon)',
				imageLink: 'Pokemon\\103Exeggutor.webp'
			},
			{
				creatureId: '104',
				name: 'Cubone',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pokémon)',
				imageLink: 'Pokemon\\104Cubone.webp'
			},
			{
				creatureId: '105',
				name: 'Marowak',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pokémon)',
				imageLink: 'Pokemon\\105Marowak.webp'
			},
			{
				creatureId: '106',
				name: 'Hitmonlee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pokémon)',
				imageLink: 'Pokemon\\106Hitmonlee.webp'
			},
			{
				creatureId: '107',
				name: 'Hitmonchan',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pokémon)',
				imageLink: 'Pokemon\\107Hitmonchan.webp'
			},
			{
				creatureId: '108',
				name: 'Lickitung',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pokémon)',
				imageLink: 'Pokemon\\108Lickitung.webp'
			},
			{
				creatureId: '109',
				name: 'Koffing',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pokémon)',
				imageLink: 'Pokemon\\109Koffing.webp'
			},
			{
				creatureId: '110',
				name: 'Weezing',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Weezing_(Pokémon)',
				imageLink: 'Pokemon\\110Weezing.webp'
			},
			{
				creatureId: '111',
				name: 'Rhyhorn',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pokémon)',
				imageLink: 'Pokemon\\111Rhyhorn.webp'
			},
			{
				creatureId: '112',
				name: 'Rhydon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pokémon)',
				imageLink: 'Pokemon\\112Rhydon.webp'
			},
			{
				creatureId: '113',
				name: 'Chansey',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pokémon)',
				imageLink: 'Pokemon\\113Chansey.webp'
			},
			{
				creatureId: '114',
				name: 'Tangela',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tangela_(Pokémon)',
				imageLink: 'Pokemon\\114Tangela.webp'
			},
			{
				creatureId: '115',
				name: 'Kangaskhan',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pokémon)',
				imageLink: 'Pokemon\\115Kangaskhan.webp'
			},
			{
				creatureId: '116',
				name: 'Horsea',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Horsea_(Pokémon)',
				imageLink: 'Pokemon\\116Horsea.webp'
			},
			{
				creatureId: '117',
				name: 'Seadra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Seadra_(Pokémon)',
				imageLink: 'Pokemon\\117Seadra.webp'
			},
			{
				creatureId: '118',
				name: 'Goldeen',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pokémon)',
				imageLink: 'Pokemon\\118Goldeen.webp'
			},
			{
				creatureId: '119',
				name: 'Seaking',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Seaking_(Pokémon)',
				imageLink: 'Pokemon\\119Seaking.webp'
			},
			{
				creatureId: '120',
				name: 'Staryu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Staryu_(Pokémon)',
				imageLink: 'Pokemon\\120Staryu.webp'
			},
			{
				creatureId: '121',
				name: 'Starmie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Starmie_(Pokémon)',
				imageLink: 'Pokemon\\121Starmie.webp'
			},
			{
				creatureId: '122',
				name: 'Mr. Mime',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mr._Mime_(Pokémon)',
				imageLink: 'Pokemon\\122Mr-mime.webp'
			},
			{
				creatureId: '123',
				name: 'Scyther',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pokémon)',
				imageLink: 'Pokemon\\123Scyther.webp'
			},
			{
				creatureId: '124',
				name: 'Jynx',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Jynx_(Pokémon)',
				imageLink: 'Pokemon\\124Jynx.webp'
			},
			{
				creatureId: '125',
				name: 'Electabuzz',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pokémon)',
				imageLink: 'Pokemon\\125Electabuzz.webp'
			},
			{
				creatureId: '126',
				name: 'Magmar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magmar_(Pokémon)',
				imageLink: 'Pokemon\\126Magmar.webp'
			},
			{
				creatureId: '127',
				name: 'Pinsir',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pokémon)',
				imageLink: 'Pokemon\\127Pinsir.webp'
			},
			{
				creatureId: '128',
				name: 'Tauros',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pokémon)',
				imageLink: 'Pokemon\\128Tauros.webp'
			},
			{
				creatureId: '129',
				name: 'Magikarp',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pokémon)',
				imageLink: 'Pokemon\\129Magikarp.webp'
			},
			{
				creatureId: '130',
				name: 'Gyarados',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pokémon)',
				imageLink: 'Pokemon\\130Gyarados.webp'
			},
			{
				creatureId: '131',
				name: 'Lapras',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pokémon)',
				imageLink: 'Pokemon\\131Lapras.webp'
			},
			{
				creatureId: '132',
				name: 'Ditto',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pokémon)',
				imageLink: 'Pokemon\\132Ditto.webp'
			},
			{
				creatureId: '133',
				name: 'Eevee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pokémon)',
				imageLink: 'Pokemon\\133Eevee.webp'
			},
			{
				creatureId: '134',
				name: 'Vaporeon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pokémon)',
				imageLink: 'Pokemon\\134Vaporeon.webp'
			},
			{
				creatureId: '135',
				name: 'Jolteon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pokémon)',
				imageLink: 'Pokemon\\135Jolteon.webp'
			},
			{
				creatureId: '136',
				name: 'Flareon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pokémon)',
				imageLink: 'Pokemon\\136Flareon.webp'
			},
			{
				creatureId: '137',
				name: 'Porygon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pokémon)',
				imageLink: 'Pokemon\\137Porygon.webp'
			},
			{
				creatureId: '138',
				name: 'Omanyte',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pokémon)',
				imageLink: 'Pokemon\\138Omanyte.webp'
			},
			{
				creatureId: '139',
				name: 'Omastar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Omastar_(Pokémon)',
				imageLink: 'Pokemon\\139Omastar.webp'
			},
			{
				creatureId: '140',
				name: 'Kabuto',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pokémon)',
				imageLink: 'Pokemon\\140Kabuto.webp'
			},
			{
				creatureId: '141',
				name: 'Kabutops',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pokémon)',
				imageLink: 'Pokemon\\141Kabutops.webp'
			},
			{
				creatureId: '142',
				name: 'Aerodactyl',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pokémon)',
				imageLink: 'Pokemon\\142Aerodactyl.webp'
			},
			{
				creatureId: '143',
				name: 'Snorlax',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pokémon)',
				imageLink: 'Pokemon\\143Snorlax.webp'
			},
			{
				creatureId: '144',
				name: 'Articuno',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pokémon)',
				imageLink: 'Pokemon\\144Articuno.webp'
			},
			{
				creatureId: '145',
				name: 'Zapdos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pokémon)',
				imageLink: 'Pokemon\\145Zapdos.webp'
			},
			{
				creatureId: '146',
				name: 'Moltres',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pokémon)',
				imageLink: 'Pokemon\\146Moltres.webp'
			},
			{
				creatureId: '147',
				name: 'Dratini',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dratini_(Pokémon)',
				imageLink: 'Pokemon\\147Dratini.webp'
			},
			{
				creatureId: '148',
				name: 'Dragonair',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pokémon)',
				imageLink: 'Pokemon\\148Dragonair.webp'
			},
			{
				creatureId: '149',
				name: 'Dragonite',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pokémon)',
				imageLink: 'Pokemon\\149Dragonite.webp'
			},
			{
				creatureId: '150',
				name: 'Mewtwo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pokémon)',
				imageLink: 'Pokemon\\150Mewtwo.webp'
			},
			{
				creatureId: '151',
				name: 'Mew',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pokémon)',
				imageLink: 'Pokemon\\151Mew.webp'
			},
			{
				creatureId: '152',
				name: 'Chikorita',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pokémon)',
				imageLink: 'Pokemon\\152Chikorita.webp'
			},
			{
				creatureId: '153',
				name: 'Bayleef',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pokémon)',
				imageLink: 'Pokemon\\153Bayleef.webp'
			},
			{
				creatureId: '154',
				name: 'Meganium',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pokémon)',
				imageLink: 'Pokemon\\154Meganium.webp'
			},
			{
				creatureId: '155',
				name: 'Cyndaquil',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pokémon)',
				imageLink: 'Pokemon\\155Cyndaquil.webp'
			},
			{
				creatureId: '156',
				name: 'Quilava',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pokémon)',
				imageLink: 'Pokemon\\156Quilava.webp'
			},
			{
				creatureId: '157',
				name: 'Typhlosion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pokémon)',
				imageLink: 'Pokemon\\157Typhlosion.webp'
			},
			{
				creatureId: '158',
				name: 'Totodile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Totodile_(Pokémon)',
				imageLink: 'Pokemon\\158Totodile.webp'
			},
			{
				creatureId: '159',
				name: 'Croconaw',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pokémon)',
				imageLink: 'Pokemon\\159Croconaw.webp'
			},
			{
				creatureId: '160',
				name: 'Feraligatr',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pokémon)',
				imageLink: 'Pokemon\\160Feraligatr.webp'
			},
			{
				creatureId: '161',
				name: 'Sentret',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sentret_(Pokémon)',
				imageLink: 'Pokemon\\161Sentret.webp'
			},
			{
				creatureId: '162',
				name: 'Furret',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Furret_(Pokémon)',
				imageLink: 'Pokemon\\162Furret.webp'
			},
			{
				creatureId: '163',
				name: 'Hoothoot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hoothoot_(Pokémon)',
				imageLink: 'Pokemon\\163Hoothoot.webp'
			},
			{
				creatureId: '164',
				name: 'Noctowl',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Noctowl_(Pokémon)',
				imageLink: 'Pokemon\\164Noctowl.webp'
			},
			{
				creatureId: '165',
				name: 'Ledyba',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ledyba_(Pokémon)',
				imageLink: 'Pokemon\\165Ledyba.webp'
			},
			{
				creatureId: '166',
				name: 'Ledian',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ledian_(Pokémon)',
				imageLink: 'Pokemon\\166Ledian.webp'
			},
			{
				creatureId: '167',
				name: 'Spinarak',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spinarak_(Pokémon)',
				imageLink: 'Pokemon\\167Spinarak.webp'
			},
			{
				creatureId: '168',
				name: 'Ariados',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ariados_(Pokémon)',
				imageLink: 'Pokemon\\168Ariados.webp'
			},
			{
				creatureId: '169',
				name: 'Crobat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Crobat_(Pokémon)',
				imageLink: 'Pokemon\\169Crobat.webp'
			},
			{
				creatureId: '170',
				name: 'Chinchou',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chinchou_(Pokémon)',
				imageLink: 'Pokemon\\170Chinchou.webp'
			},
			{
				creatureId: '171',
				name: 'Lanturn',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lanturn_(Pokémon)',
				imageLink: 'Pokemon\\171Lanturn.webp'
			},
			{
				creatureId: '172',
				name: 'Pichu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pichu_(Pokémon)',
				imageLink: 'Pokemon\\172Pichu.webp'
			},
			{
				creatureId: '173',
				name: 'Cleffa',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cleffa_(Pokémon)',
				imageLink: 'Pokemon\\173Cleffa.webp'
			},
			{
				creatureId: '174',
				name: 'Igglybuff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Igglybuff_(Pokémon)',
				imageLink: 'Pokemon\\174Igglybuff.webp'
			},
			{
				creatureId: '175',
				name: 'Togepi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pokémon)',
				imageLink: 'Pokemon\\175Togepi.webp'
			},
			{
				creatureId: '176',
				name: 'Togetic',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Togetic_(Pokémon)',
				imageLink: 'Pokemon\\176Togetic.webp'
			},
			{
				creatureId: '177',
				name: 'Natu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Natu_(Pokémon)',
				imageLink: 'Pokemon\\177Natu.webp'
			},
			{
				creatureId: '178',
				name: 'Xatu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pokémon)',
				imageLink: 'Pokemon\\178Xatu.webp'
			},
			{
				creatureId: '179',
				name: 'Mareep',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mareep_(Pokémon)',
				imageLink: 'Pokemon\\179Mareep.webp'
			},
			{
				creatureId: '180',
				name: 'Flaaffy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flaaffy_(Pokémon)',
				imageLink: 'Pokemon\\180Flaaffy.webp'
			},
			{
				creatureId: '181',
				name: 'Ampharos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pokémon)',
				imageLink: 'Pokemon\\181Ampharos.webp'
			},
			{
				creatureId: '182',
				name: 'Bellossom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bellossom_(Pokémon)',
				imageLink: 'Pokemon\\182Bellossom.webp'
			},
			{
				creatureId: '183',
				name: 'Marill',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Marill_(Pokémon)',
				imageLink: 'Pokemon\\183Marill.webp'
			},
			{
				creatureId: '184',
				name: 'Azumarill',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Azumarill_(Pokémon)',
				imageLink: 'Pokemon\\184Azumarill.webp'
			},
			{
				creatureId: '185',
				name: 'Sudowoodo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sudowoodo_(Pokémon)',
				imageLink: 'Pokemon\\185Sudowoodo.webp'
			},
			{
				creatureId: '186',
				name: 'Politoed',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Politoed_(Pokémon)',
				imageLink: 'Pokemon\\186Politoed.webp'
			},
			{
				creatureId: '187',
				name: 'Hoppip',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hoppip_(Pokémon)',
				imageLink: 'Pokemon\\187Hoppip.webp'
			},
			{
				creatureId: '188',
				name: 'Skiploom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skiploom_(Pokémon)',
				imageLink: 'Pokemon\\188Skiploom.webp'
			},
			{
				creatureId: '189',
				name: 'Jumpluff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Jumpluff_(Pokémon)',
				imageLink: 'Pokemon\\189Jumpluff.webp'
			},
			{
				creatureId: '190',
				name: 'Aipom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Aipom_(Pokémon)',
				imageLink: 'Pokemon\\190Aipom.webp'
			},
			{
				creatureId: '191',
				name: 'Sunkern',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sunkern_(Pokémon)',
				imageLink: 'Pokemon\\191Sunkern.webp'
			},
			{
				creatureId: '192',
				name: 'Sunflora',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sunflora_(Pokémon)',
				imageLink: 'Pokemon\\192Sunflora.webp'
			},
			{
				creatureId: '193',
				name: 'Yanma',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Yanma_(Pokémon)',
				imageLink: 'Pokemon\\193Yanma.webp'
			},
			{
				creatureId: '194',
				name: 'Wooper',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pokémon)',
				imageLink: 'Pokemon\\194Wooper.webp'
			},
			{
				creatureId: '195',
				name: 'Quagsire',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Quagsire_(Pokémon)',
				imageLink: 'Pokemon\\195Quagsire.webp'
			},
			{
				creatureId: '196',
				name: 'Espeon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pokémon)',
				imageLink: 'Pokemon\\196Espeon.webp'
			},
			{
				creatureId: '197',
				name: 'Umbreon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pokémon)',
				imageLink: 'Pokemon\\197Umbreon.webp'
			},
			{
				creatureId: '198',
				name: 'Murkrow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Murkrow_(Pokémon)',
				imageLink: 'Pokemon\\198Murkrow.webp'
			},
			{
				creatureId: '199',
				name: 'Slowking',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slowking_(Pokémon)',
				imageLink: 'Pokemon\\199Slowking.webp'
			},
			{
				creatureId: '200',
				name: 'Misdreavus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Misdreavus_(Pokémon)',
				imageLink: 'Pokemon\\200Misdreavus.webp'
			},
			{
				creatureId: '201',
				name: 'Unown',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Unown_(Pokémon)',
				imageLink: 'Pokemon\\201Unown.webp'
			},
			{
				creatureId: '202',
				name: 'Wobbuffet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wobbuffet_(Pokémon)',
				imageLink: 'Pokemon\\202Wobbuffet.webp'
			},
			{
				creatureId: '203',
				name: 'Girafarig',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Girafarig_(Pokémon)',
				imageLink: 'Pokemon\\203Girafarig.webp'
			},
			{
				creatureId: '204',
				name: 'Pineco',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pineco_(Pokémon)',
				imageLink: 'Pokemon\\204Pineco.webp'
			},
			{
				creatureId: '205',
				name: 'Forretress',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Forretress_(Pokémon)',
				imageLink: 'Pokemon\\205Forretress.webp'
			},
			{
				creatureId: '206',
				name: 'Dunsparce',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pokémon)',
				imageLink: 'Pokemon\\206Dunsparce.webp'
			},
			{
				creatureId: '207',
				name: 'Gligar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gligar_(Pokémon)',
				imageLink: 'Pokemon\\207Gligar.webp'
			},
			{
				creatureId: '208',
				name: 'Steelix',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Steelix_(Pokémon)',
				imageLink: 'Pokemon\\208Steelix.webp'
			},
			{
				creatureId: '209',
				name: 'Snubbull',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Snubbull_(Pokémon)',
				imageLink: 'Pokemon\\209Snubbull.webp'
			},
			{
				creatureId: '210',
				name: 'Granbull',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Granbull_(Pokémon)',
				imageLink: 'Pokemon\\210Granbull.webp'
			},
			{
				creatureId: '211',
				name: 'Qwilfish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pokémon)',
				imageLink: 'Pokemon\\211Qwilfish.webp'
			},
			{
				creatureId: '212',
				name: 'Scizor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scizor_(Pokémon)',
				imageLink: 'Pokemon\\212Scizor.webp'
			},
			{
				creatureId: '213',
				name: 'Shuckle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shuckle_(Pokémon)',
				imageLink: 'Pokemon\\213Shuckle.webp'
			},
			{
				creatureId: '214',
				name: 'Heracross',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Heracross_(Pokémon)',
				imageLink: 'Pokemon\\214Heracross.webp'
			},
			{
				creatureId: '215',
				name: 'Sneasel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pokémon)',
				imageLink: 'Pokemon\\215Sneasel.webp'
			},
			{
				creatureId: '216',
				name: 'Teddiursa',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Teddiursa_(Pokémon)',
				imageLink: 'Pokemon\\216Teddiursa.webp'
			},
			{
				creatureId: '217',
				name: 'Ursaring',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ursaring_(Pokémon)',
				imageLink: 'Pokemon\\217Ursaring.webp'
			},
			{
				creatureId: '218',
				name: 'Slugma',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slugma_(Pokémon)',
				imageLink: 'Pokemon\\218Slugma.webp'
			},
			{
				creatureId: '219',
				name: 'Magcargo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magcargo_(Pokémon)',
				imageLink: 'Pokemon\\219Magcargo.webp'
			},
			{
				creatureId: '220',
				name: 'Swinub',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swinub_(Pokémon)',
				imageLink: 'Pokemon\\220Swinub.webp'
			},
			{
				creatureId: '221',
				name: 'Piloswine',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Piloswine_(Pokémon)',
				imageLink: 'Pokemon\\221Piloswine.webp'
			},
			{
				creatureId: '222',
				name: 'Corsola',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Corsola_(Pokémon)',
				imageLink: 'Pokemon\\222Corsola.webp'
			},
			{
				creatureId: '223',
				name: 'Remoraid',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Remoraid_(Pokémon)',
				imageLink: 'Pokemon\\223Remoraid.webp'
			},
			{
				creatureId: '224',
				name: 'Octillery',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Octillery_(Pokémon)',
				imageLink: 'Pokemon\\224Octillery.webp'
			},
			{
				creatureId: '225',
				name: 'Delibird',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Delibird_(Pokémon)',
				imageLink: 'Pokemon\\225Delibird.webp'
			},
			{
				creatureId: '226',
				name: 'Mantine',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mantine_(Pokémon)',
				imageLink: 'Pokemon\\226Mantine.webp'
			},
			{
				creatureId: '227',
				name: 'Skarmory',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skarmory_(Pokémon)',
				imageLink: 'Pokemon\\227Skarmory.webp'
			},
			{
				creatureId: '228',
				name: 'Houndour',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Houndour_(Pokémon)',
				imageLink: 'Pokemon\\228Houndour.webp'
			},
			{
				creatureId: '229',
				name: 'Houndoom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Houndoom_(Pokémon)',
				imageLink: 'Pokemon\\229Houndoom.webp'
			},
			{
				creatureId: '230',
				name: 'Kingdra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kingdra_(Pokémon)',
				imageLink: 'Pokemon\\230Kingdra.webp'
			},
			{
				creatureId: '231',
				name: 'Phanpy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Phanpy_(Pokémon)',
				imageLink: 'Pokemon\\231Phanpy.webp'
			},
			{
				creatureId: '232',
				name: 'Donphan',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Donphan_(Pokémon)',
				imageLink: 'Pokemon\\232Donphan.webp'
			},
			{
				creatureId: '233',
				name: 'Porygon2',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Porygon2_(Pokémon)',
				imageLink: 'Pokemon\\233Porygon2.webp'
			},
			{
				creatureId: '234',
				name: 'Stantler',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Stantler_(Pokémon)',
				imageLink: 'Pokemon\\234Stantler.webp'
			},
			{
				creatureId: '235',
				name: 'Smeargle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Smeargle_(Pokémon)',
				imageLink: 'Pokemon\\235Smeargle.webp'
			},
			{
				creatureId: '236',
				name: 'Tyrogue',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tyrogue_(Pokémon)',
				imageLink: 'Pokemon\\236Tyrogue.webp'
			},
			{
				creatureId: '237',
				name: 'Hitmontop',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pokémon)',
				imageLink: 'Pokemon\\237Hitmontop.webp'
			},
			{
				creatureId: '238',
				name: 'Smoochum',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Smoochum_(Pokémon)',
				imageLink: 'Pokemon\\238Smoochum.webp'
			},
			{
				creatureId: '239',
				name: 'Elekid',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Elekid_(Pokémon)',
				imageLink: 'Pokemon\\239Elekid.webp'
			},
			{
				creatureId: '240',
				name: 'Magby',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magby_(Pokémon)',
				imageLink: 'Pokemon\\240Magby.webp'
			},
			{
				creatureId: '241',
				name: 'Miltank',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Miltank_(Pokémon)',
				imageLink: 'Pokemon\\241Miltank.webp'
			},
			{
				creatureId: '242',
				name: 'Blissey',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Blissey_(Pokémon)',
				imageLink: 'Pokemon\\242Blissey.webp'
			},
			{
				creatureId: '243',
				name: 'Raikou',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Raikou_(Pokémon)',
				imageLink: 'Pokemon\\243Raikou.webp'
			},
			{
				creatureId: '244',
				name: 'Entei',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Entei_(Pokémon)',
				imageLink: 'Pokemon\\244Entei.webp'
			},
			{
				creatureId: '245',
				name: 'Suicune',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pokémon)',
				imageLink: 'Pokemon\\245Suicune.webp'
			},
			{
				creatureId: '246',
				name: 'Larvitar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Larvitar_(Pokémon)',
				imageLink: 'Pokemon\\246Larvitar.webp'
			},
			{
				creatureId: '247',
				name: 'Pupitar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pupitar_(Pokémon)',
				imageLink: 'Pokemon\\247Pupitar.webp'
			},
			{
				creatureId: '248',
				name: 'Tyranitar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pokémon)',
				imageLink: 'Pokemon\\248Tyranitar.webp'
			},
			{
				creatureId: '249',
				name: 'Lugia',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pokémon)',
				imageLink: 'Pokemon\\249Lugia.webp'
			},
			{
				creatureId: '250',
				name: 'Ho-Oh',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pokémon)',
				imageLink: 'Pokemon\\250Ho-oh.webp'
			},
			{
				creatureId: '251',
				name: 'Celebi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pokémon)',
				imageLink: 'Pokemon\\251Celebi.webp'
			},
			{
				creatureId: '252',
				name: 'Treecko',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pokémon)',
				imageLink: 'Pokemon\\252Treecko.webp'
			},
			{
				creatureId: '253',
				name: 'Grovyle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pokémon)',
				imageLink: 'Pokemon\\253Grovyle.webp'
			},
			{
				creatureId: '254',
				name: 'Sceptile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pokémon)',
				imageLink: 'Pokemon\\254Sceptile.webp'
			},
			{
				creatureId: '255',
				name: 'Torchic',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Torchic_(Pokémon)',
				imageLink: 'Pokemon\\255Torchic.webp'
			},
			{
				creatureId: '256',
				name: 'Combusken',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Combusken_(Pokémon)',
				imageLink: 'Pokemon\\256Combusken.webp'
			},
			{
				creatureId: '257',
				name: 'Blaziken',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pokémon)',
				imageLink: 'Pokemon\\257Blaziken.webp'
			},
			{
				creatureId: '258',
				name: 'Mudkip',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pokémon)',
				imageLink: 'Pokemon\\258Mudkip.webp'
			},
			{
				creatureId: '259',
				name: 'Marshtomp',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pokémon)',
				imageLink: 'Pokemon\\259Marshtomp.webp'
			},
			{
				creatureId: '260',
				name: 'Swampert',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pokémon)',
				imageLink: 'Pokemon\\260Swampert.webp'
			},
			{
				creatureId: '261',
				name: 'Poochyena',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Poochyena_(Pokémon)',
				imageLink: 'Pokemon\\261Poochyena.webp'
			},
			{
				creatureId: '262',
				name: 'Mightyena',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mightyena_(Pokémon)',
				imageLink: 'Pokemon\\262Mightyena.webp'
			},
			{
				creatureId: '263',
				name: 'Zigzagoon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pokémon)',
				imageLink: 'Pokemon\\263Zigzagoon.webp'
			},
			{
				creatureId: '264',
				name: 'Linoone',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Linoone_(Pokémon)',
				imageLink: 'Pokemon\\264Linoone.webp'
			},
			{
				creatureId: '265',
				name: 'Wurmple',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wurmple_(Pokémon)',
				imageLink: 'Pokemon\\265Wurmple.webp'
			},
			{
				creatureId: '266',
				name: 'Silcoon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Silcoon_(Pokémon)',
				imageLink: 'Pokemon\\266Silcoon.webp'
			},
			{
				creatureId: '267',
				name: 'Beautifly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Beautifly_(Pokémon)',
				imageLink: 'Pokemon\\267Beautifly.webp'
			},
			{
				creatureId: '268',
				name: 'Cascoon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cascoon_(Pokémon)',
				imageLink: 'Pokemon\\268Cascoon.webp'
			},
			{
				creatureId: '269',
				name: 'Dustox',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dustox_(Pokémon)',
				imageLink: 'Pokemon\\269Dustox.webp'
			},
			{
				creatureId: '270',
				name: 'Lotad',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lotad_(Pokémon)',
				imageLink: 'Pokemon\\270Lotad.webp'
			},
			{
				creatureId: '271',
				name: 'Lombre',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lombre_(Pokémon)',
				imageLink: 'Pokemon\\271Lombre.webp'
			},
			{
				creatureId: '272',
				name: 'Ludicolo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ludicolo_(Pokémon)',
				imageLink: 'Pokemon\\272Ludicolo.webp'
			},
			{
				creatureId: '273',
				name: 'Seedot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Seedot_(Pokémon)',
				imageLink: 'Pokemon\\273Seedot.webp'
			},
			{
				creatureId: '274',
				name: 'Nuzleaf',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nuzleaf_(Pokémon)',
				imageLink: 'Pokemon\\274Nuzleaf.webp'
			},
			{
				creatureId: '275',
				name: 'Shiftry',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pokémon)',
				imageLink: 'Pokemon\\275Shiftry.webp'
			},
			{
				creatureId: '276',
				name: 'Taillow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Taillow_(Pokémon)',
				imageLink: 'Pokemon\\276Taillow.webp'
			},
			{
				creatureId: '277',
				name: 'Swellow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swellow_(Pokémon)',
				imageLink: 'Pokemon\\277Swellow.webp'
			},
			{
				creatureId: '278',
				name: 'Wingull',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wingull_(Pokémon)',
				imageLink: 'Pokemon\\278Wingull.webp'
			},
			{
				creatureId: '279',
				name: 'Pelipper',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pelipper_(Pokémon)',
				imageLink: 'Pokemon\\279Pelipper.webp'
			},
			{
				creatureId: '280',
				name: 'Ralts',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ralts_(Pokémon)',
				imageLink: 'Pokemon\\280Ralts.webp'
			},
			{
				creatureId: '281',
				name: 'Kirlia',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kirlia_(Pokémon)',
				imageLink: 'Pokemon\\281Kirlia.webp'
			},
			{
				creatureId: '282',
				name: 'Gardevoir',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gardevoir_(Pokémon)',
				imageLink: 'Pokemon\\282Gardevoir.webp'
			},
			{
				creatureId: '283',
				name: 'Surskit',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Surskit_(Pokémon)',
				imageLink: 'Pokemon\\283Surskit.webp'
			},
			{
				creatureId: '284',
				name: 'Masquerain',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Masquerain_(Pokémon)',
				imageLink: 'Pokemon\\284Masquerain.webp'
			},
			{
				creatureId: '285',
				name: 'Shroomish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shroomish_(Pokémon)',
				imageLink: 'Pokemon\\285Shroomish.webp'
			},
			{
				creatureId: '286',
				name: 'Breloom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Breloom_(Pokémon)',
				imageLink: 'Pokemon\\286Breloom.webp'
			},
			{
				creatureId: '287',
				name: 'Slakoth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slakoth_(Pokémon)',
				imageLink: 'Pokemon\\287Slakoth.webp'
			},
			{
				creatureId: '288',
				name: 'Vigoroth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vigoroth_(Pokémon)',
				imageLink: 'Pokemon\\288Vigoroth.webp'
			},
			{
				creatureId: '289',
				name: 'Slaking',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slaking_(Pokémon)',
				imageLink: 'Pokemon\\289Slaking.webp'
			},
			{
				creatureId: '290',
				name: 'Nincada',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nincada_(Pokémon)',
				imageLink: 'Pokemon\\290Nincada.webp'
			},
			{
				creatureId: '291',
				name: 'Ninjask',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ninjask_(Pokémon)',
				imageLink: 'Pokemon\\291Ninjask.webp'
			},
			{
				creatureId: '292',
				name: 'Shedinja',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pokémon)',
				imageLink: 'Pokemon\\292Shedinja.webp'
			},
			{
				creatureId: '293',
				name: 'Whismur',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Whismur_(Pokémon)',
				imageLink: 'Pokemon\\293Whismur.webp'
			},
			{
				creatureId: '294',
				name: 'Loudred',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Loudred_(Pokémon)',
				imageLink: 'Pokemon\\294Loudred.webp'
			},
			{
				creatureId: '295',
				name: 'Exploud',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Exploud_(Pokémon)',
				imageLink: 'Pokemon\\295Exploud.webp'
			},
			{
				creatureId: '296',
				name: 'Makuhita',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Makuhita_(Pokémon)',
				imageLink: 'Pokemon\\296Makuhita.webp'
			},
			{
				creatureId: '297',
				name: 'Hariyama',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hariyama_(Pokémon)',
				imageLink: 'Pokemon\\297Hariyama.webp'
			},
			{
				creatureId: '298',
				name: 'Azurill',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Azurill_(Pokémon)',
				imageLink: 'Pokemon\\298Azurill.webp'
			},
			{
				creatureId: '299',
				name: 'Nosepass',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nosepass_(Pokémon)',
				imageLink: 'Pokemon\\299Nosepass.webp'
			},
			{
				creatureId: '300',
				name: 'Skitty',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skitty_(Pokémon)',
				imageLink: 'Pokemon\\300Skitty.webp'
			},
			{
				creatureId: '301',
				name: 'Delcatty',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Delcatty_(Pokémon)',
				imageLink: 'Pokemon\\301Delcatty.webp'
			},
			{
				creatureId: '302',
				name: 'Sableye',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sableye_(Pokémon)',
				imageLink: 'Pokemon\\302Sableye.webp'
			},
			{
				creatureId: '303',
				name: 'Mawile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mawile_(Pokémon)',
				imageLink: 'Pokemon\\303Mawile.webp'
			},
			{
				creatureId: '304',
				name: 'Aron',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Aron_(Pokémon)',
				imageLink: 'Pokemon\\304Aron.webp'
			},
			{
				creatureId: '305',
				name: 'Lairon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lairon_(Pokémon)',
				imageLink: 'Pokemon\\305Lairon.webp'
			},
			{
				creatureId: '306',
				name: 'Aggron',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Aggron_(Pokémon)',
				imageLink: 'Pokemon\\306Aggron.webp'
			},
			{
				creatureId: '307',
				name: 'Meditite',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Meditite_(Pokémon)',
				imageLink: 'Pokemon\\307Meditite.webp'
			},
			{
				creatureId: '308',
				name: 'Medicham',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Medicham_(Pokémon)',
				imageLink: 'Pokemon\\308Medicham.webp'
			},
			{
				creatureId: '309',
				name: 'Electrike',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Electrike_(Pokémon)',
				imageLink: 'Pokemon\\309Electrike.webp'
			},
			{
				creatureId: '310',
				name: 'Manectric',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Manectric_(Pokémon)',
				imageLink: 'Pokemon\\310Manectric.webp'
			},
			{
				creatureId: '311',
				name: 'Plusle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Plusle_(Pokémon)',
				imageLink: 'Pokemon\\311Plusle.webp'
			},
			{
				creatureId: '312',
				name: 'Minun',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Minun_(Pokémon)',
				imageLink: 'Pokemon\\312Minun.webp'
			},
			{
				creatureId: '313',
				name: 'Volbeat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Volbeat_(Pokémon)',
				imageLink: 'Pokemon\\313Volbeat.webp'
			},
			{
				creatureId: '314',
				name: 'Illumise',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Illumise_(Pokémon)',
				imageLink: 'Pokemon\\314Illumise.webp'
			},
			{
				creatureId: '315',
				name: 'Roselia',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Roselia_(Pokémon)',
				imageLink: 'Pokemon\\315Roselia.webp'
			},
			{
				creatureId: '316',
				name: 'Gulpin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gulpin_(Pokémon)',
				imageLink: 'Pokemon\\316Gulpin.webp'
			},
			{
				creatureId: '317',
				name: 'Swalot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swalot_(Pokémon)',
				imageLink: 'Pokemon\\317Swalot.webp'
			},
			{
				creatureId: '318',
				name: 'Carvanha',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Carvanha_(Pokémon)',
				imageLink: 'Pokemon\\318Carvanha.webp'
			},
			{
				creatureId: '319',
				name: 'Sharpedo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pokémon)',
				imageLink: 'Pokemon\\319Sharpedo.webp'
			},
			{
				creatureId: '320',
				name: 'Wailmer',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wailmer_(Pokémon)',
				imageLink: 'Pokemon\\320Wailmer.webp'
			},
			{
				creatureId: '321',
				name: 'Wailord',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wailord_(Pokémon)',
				imageLink: 'Pokemon\\321Wailord.webp'
			},
			{
				creatureId: '322',
				name: 'Numel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Numel_(Pokémon)',
				imageLink: 'Pokemon\\322Numel.webp'
			},
			{
				creatureId: '323',
				name: 'Camerupt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pokémon)',
				imageLink: 'Pokemon\\323Camerupt.webp'
			},
			{
				creatureId: '324',
				name: 'Torkoal',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Torkoal_(Pokémon)',
				imageLink: 'Pokemon\\324Torkoal.webp'
			},
			{
				creatureId: '325',
				name: 'Spoink',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spoink_(Pokémon)',
				imageLink: 'Pokemon\\325Spoink.webp'
			},
			{
				creatureId: '326',
				name: 'Grumpig',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grumpig_(Pokémon)',
				imageLink: 'Pokemon\\326Grumpig.webp'
			},
			{
				creatureId: '327',
				name: 'Spinda',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spinda_(Pokémon)',
				imageLink: 'Pokemon\\327Spinda.webp'
			},
			{
				creatureId: '328',
				name: 'Trapinch',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pokémon)',
				imageLink: 'Pokemon\\328Trapinch.webp'
			},
			{
				creatureId: '329',
				name: 'Vibrava',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vibrava_(Pokémon)',
				imageLink: 'Pokemon\\329Vibrava.webp'
			},
			{
				creatureId: '330',
				name: 'Flygon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flygon_(Pokémon)',
				imageLink: 'Pokemon\\330Flygon.webp'
			},
			{
				creatureId: '331',
				name: 'Cacnea',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cacnea_(Pokémon)',
				imageLink: 'Pokemon\\331Cacnea.webp'
			},
			{
				creatureId: '332',
				name: 'Cacturne',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cacturne_(Pokémon)',
				imageLink: 'Pokemon\\332Cacturne.webp'
			},
			{
				creatureId: '333',
				name: 'Swablu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swablu_(Pokémon)',
				imageLink: 'Pokemon\\333Swablu.webp'
			},
			{
				creatureId: '334',
				name: 'Altaria',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Altaria_(Pokémon)',
				imageLink: 'Pokemon\\334Altaria.webp'
			},
			{
				creatureId: '335',
				name: 'Zangoose',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zangoose_(Pokémon)',
				imageLink: 'Pokemon\\335Zangoose.webp'
			},
			{
				creatureId: '336',
				name: 'Seviper',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Seviper_(Pokémon)',
				imageLink: 'Pokemon\\336Seviper.webp'
			},
			{
				creatureId: '337',
				name: 'Lunatone',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lunatone_(Pokémon)',
				imageLink: 'Pokemon\\337Lunatone.webp'
			},
			{
				creatureId: '338',
				name: 'Solrock',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Solrock_(Pokémon)',
				imageLink: 'Pokemon\\338Solrock.webp'
			},
			{
				creatureId: '339',
				name: 'Barboach',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Barboach_(Pokémon)',
				imageLink: 'Pokemon\\339Barboach.webp'
			},
			{
				creatureId: '340',
				name: 'Whiscash',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pokémon)',
				imageLink: 'Pokemon\\340Whiscash.webp'
			},
			{
				creatureId: '341',
				name: 'Corphish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Corphish_(Pokémon)',
				imageLink: 'Pokemon\\341Corphish.webp'
			},
			{
				creatureId: '342',
				name: 'Crawdaunt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Crawdaunt_(Pokémon)',
				imageLink: 'Pokemon\\342Crawdaunt.webp'
			},
			{
				creatureId: '343',
				name: 'Baltoy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Baltoy_(Pokémon)',
				imageLink: 'Pokemon\\343Baltoy.webp'
			},
			{
				creatureId: '344',
				name: 'Claydol',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Claydol_(Pokémon)',
				imageLink: 'Pokemon\\344Claydol.webp'
			},
			{
				creatureId: '345',
				name: 'Lileep',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lileep_(Pokémon)',
				imageLink: 'Pokemon\\345Lileep.webp'
			},
			{
				creatureId: '346',
				name: 'Cradily',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cradily_(Pokémon)',
				imageLink: 'Pokemon\\346Cradily.webp'
			},
			{
				creatureId: '347',
				name: 'Anorith',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Anorith_(Pokémon)',
				imageLink: 'Pokemon\\347Anorith.webp'
			},
			{
				creatureId: '348',
				name: 'Armaldo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pokémon)',
				imageLink: 'Pokemon\\348Armaldo.webp'
			},
			{
				creatureId: '349',
				name: 'Feebas',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Feebas_(Pokémon)',
				imageLink: 'Pokemon\\349Feebas.webp'
			},
			{
				creatureId: '350',
				name: 'Milotic',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Milotic_(Pokémon)',
				imageLink: 'Pokemon\\350Milotic.webp'
			},
			{
				creatureId: '351',
				name: 'Castform',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Castform_(Pokémon)',
				imageLink: 'Pokemon\\351Castform.webp'
			},
			{
				creatureId: '352',
				name: 'Kecleon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kecleon_(Pokémon)',
				imageLink: 'Pokemon\\352Kecleon.webp'
			},
			{
				creatureId: '353',
				name: 'Shuppet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shuppet_(Pokémon)',
				imageLink: 'Pokemon\\353Shuppet.webp'
			},
			{
				creatureId: '354',
				name: 'Banette',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Banette_(Pokémon)',
				imageLink: 'Pokemon\\354Banette.webp'
			},
			{
				creatureId: '355',
				name: 'Duskull',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Duskull_(Pokémon)',
				imageLink: 'Pokemon\\355Duskull.webp'
			},
			{
				creatureId: '356',
				name: 'Dusclops',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dusclops_(Pokémon)',
				imageLink: 'Pokemon\\356Dusclops.webp'
			},
			{
				creatureId: '357',
				name: 'Tropius',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tropius_(Pokémon)',
				imageLink: 'Pokemon\\357Tropius.webp'
			},
			{
				creatureId: '358',
				name: 'Chimecho',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chimecho_(Pokémon)',
				imageLink: 'Pokemon\\358Chimecho.webp'
			},
			{
				creatureId: '359',
				name: 'Absol',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Absol_(Pokémon)',
				imageLink: 'Pokemon\\359Absol.webp'
			},
			{
				creatureId: '360',
				name: 'Wynaut',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pokémon)',
				imageLink: 'Pokemon\\360Wynaut.webp'
			},
			{
				creatureId: '361',
				name: 'Snorunt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Snorunt_(Pokémon)',
				imageLink: 'Pokemon\\361Snorunt.webp'
			},
			{
				creatureId: '362',
				name: 'Glalie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Glalie_(Pokémon)',
				imageLink: 'Pokemon\\362Glalie.webp'
			},
			{
				creatureId: '363',
				name: 'Spheal',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spheal_(Pokémon)',
				imageLink: 'Pokemon\\363Spheal.webp'
			},
			{
				creatureId: '364',
				name: 'Sealeo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sealeo_(Pokémon)',
				imageLink: 'Pokemon\\364Sealeo.webp'
			},
			{
				creatureId: '365',
				name: 'Walrein',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Walrein_(Pokémon)',
				imageLink: 'Pokemon\\365Walrein.webp'
			},
			{
				creatureId: '366',
				name: 'Clamperl',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Clamperl_(Pokémon)',
				imageLink: 'Pokemon\\366Clamperl.webp'
			},
			{
				creatureId: '367',
				name: 'Huntail',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Huntail_(Pokémon)',
				imageLink: 'Pokemon\\367Huntail.webp'
			},
			{
				creatureId: '368',
				name: 'Gorebyss',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gorebyss_(Pokémon)',
				imageLink: 'Pokemon\\368Gorebyss.webp'
			},
			{
				creatureId: '369',
				name: 'Relicanth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pokémon)',
				imageLink: 'Pokemon\\369Relicanth.webp'
			},
			{
				creatureId: '370',
				name: 'Luvdisc',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Luvdisc_(Pokémon)',
				imageLink: 'Pokemon\\370Luvdisc.webp'
			},
			{
				creatureId: '371',
				name: 'Bagon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bagon_(Pokémon)',
				imageLink: 'Pokemon\\371Bagon.webp'
			},
			{
				creatureId: '372',
				name: 'Shelgon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shelgon_(Pokémon)',
				imageLink: 'Pokemon\\372Shelgon.webp'
			},
			{
				creatureId: '373',
				name: 'Salamence',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Salamence_(Pokémon)',
				imageLink: 'Pokemon\\373Salamence.webp'
			},
			{
				creatureId: '374',
				name: 'Beldum',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Beldum_(Pokémon)',
				imageLink: 'Pokemon\\374Beldum.webp'
			},
			{
				creatureId: '375',
				name: 'Metang',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Metang_(Pokémon)',
				imageLink: 'Pokemon\\375Metang.webp'
			},
			{
				creatureId: '376',
				name: 'Metagross',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Metagross_(Pokémon)',
				imageLink: 'Pokemon\\376Metagross.webp'
			},
			{
				creatureId: '377',
				name: 'Regirock',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pokémon)',
				imageLink: 'Pokemon\\377Regirock.webp'
			},
			{
				creatureId: '378',
				name: 'Regice',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Regice_(Pokémon)',
				imageLink: 'Pokemon\\378Regice.webp'
			},
			{
				creatureId: '379',
				name: 'Registeel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Registeel_(Pokémon)',
				imageLink: 'Pokemon\\379Registeel.webp'
			},
			{
				creatureId: '380',
				name: 'Latias',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Latias_(Pokémon)',
				imageLink: 'Pokemon\\380Latias.webp'
			},
			{
				creatureId: '381',
				name: 'Latios',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Latios_(Pokémon)',
				imageLink: 'Pokemon\\381Latios.webp'
			},
			{
				creatureId: '382',
				name: 'Kyogre',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pokémon)',
				imageLink: 'Pokemon\\382Kyogre.webp'
			},
			{
				creatureId: '383',
				name: 'Groudon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Groudon_(Pokémon)',
				imageLink: 'Pokemon\\383Groudon.webp'
			},
			{
				creatureId: '384',
				name: 'Rayquaza',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pokémon)',
				imageLink: 'Pokemon\\384Rayquaza.webp'
			},
			{
				creatureId: '385',
				name: 'Jirachi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pokémon)',
				imageLink: 'Pokemon\\385Jirachi.webp'
			},
			{
				creatureId: '386',
				name: 'Deoxys',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pokémon)',
				imageLink: 'Pokemon\\386Deoxys-normal.webp'
			},
			{
				creatureId: '387',
				name: 'Turtwig',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pokémon)',
				imageLink: 'Pokemon\\387Turtwig.webp'
			},
			{
				creatureId: '388',
				name: 'Grotle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grotle_(Pokémon)',
				imageLink: 'Pokemon\\388Grotle.webp'
			},
			{
				creatureId: '389',
				name: 'Torterra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pokémon)',
				imageLink: 'Pokemon\\389Torterra.webp'
			},
			{
				creatureId: '390',
				name: 'Chimchar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pokémon)',
				imageLink: 'Pokemon\\390Chimchar.webp'
			},
			{
				creatureId: '391',
				name: 'Monferno',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Monferno_(Pokémon)',
				imageLink: 'Pokemon\\391Monferno.webp'
			},
			{
				creatureId: '392',
				name: 'Infernape',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pokémon)',
				imageLink: 'Pokemon\\392Infernape.webp'
			},
			{
				creatureId: '393',
				name: 'Piplup',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Piplup_(Pokémon)',
				imageLink: 'Pokemon\\393Piplup.webp'
			},
			{
				creatureId: '394',
				name: 'Prinplup',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pokémon)',
				imageLink: 'Pokemon\\394Prinplup.webp'
			},
			{
				creatureId: '395',
				name: 'Empoleon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pokémon)',
				imageLink: 'Pokemon\\395Empoleon.webp'
			},
			{
				creatureId: '396',
				name: 'Starly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Starly_(Pokémon)',
				imageLink: 'Pokemon\\396Starly.webp'
			},
			{
				creatureId: '397',
				name: 'Staravia',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Staravia_(Pokémon)',
				imageLink: 'Pokemon\\397Staravia.webp'
			},
			{
				creatureId: '398',
				name: 'Staraptor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Staraptor_(Pokémon)',
				imageLink: 'Pokemon\\398Staraptor.webp'
			},
			{
				creatureId: '399',
				name: 'Bidoof',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bidoof_(Pokémon)',
				imageLink: 'Pokemon\\399Bidoof.webp'
			},
			{
				creatureId: '400',
				name: 'Bibarel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bibarel_(Pokémon)',
				imageLink: 'Pokemon\\400Bibarel.webp'
			},
			{
				creatureId: '401',
				name: 'Kricketot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kricketot_(Pokémon)',
				imageLink: 'Pokemon\\401Kricketot.webp'
			},
			{
				creatureId: '402',
				name: 'Kricketune',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kricketune_(Pokémon)',
				imageLink: 'Pokemon\\402Kricketune.webp'
			},
			{
				creatureId: '403',
				name: 'Shinx',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shinx_(Pokémon)',
				imageLink: 'Pokemon\\403Shinx.webp'
			},
			{
				creatureId: '404',
				name: 'Luxio',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Luxio_(Pokémon)',
				imageLink: 'Pokemon\\404Luxio.webp'
			},
			{
				creatureId: '405',
				name: 'Luxray',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Luxray_(Pokémon)',
				imageLink: 'Pokemon\\405Luxray.webp'
			},
			{
				creatureId: '406',
				name: 'Budew',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Budew_(Pokémon)',
				imageLink: 'Pokemon\\406Budew.webp'
			},
			{
				creatureId: '407',
				name: 'Roserade',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Roserade_(Pokémon)',
				imageLink: 'Pokemon\\407Roserade.webp'
			},
			{
				creatureId: '408',
				name: 'Cranidos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cranidos_(Pokémon)',
				imageLink: 'Pokemon\\408Cranidos.webp'
			},
			{
				creatureId: '409',
				name: 'Rampardos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rampardos_(Pokémon)',
				imageLink: 'Pokemon\\409Rampardos.webp'
			},
			{
				creatureId: '410',
				name: 'Shieldon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shieldon_(Pokémon)',
				imageLink: 'Pokemon\\410Shieldon.webp'
			},
			{
				creatureId: '411',
				name: 'Bastiodon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bastiodon_(Pokémon)',
				imageLink: 'Pokemon\\411Bastiodon.webp'
			},
			{
				creatureId: '412',
				name: 'Burmy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Burmy_(Pokémon)',
				imageLink: 'Pokemon\\412Burmy.webp'
			},
			{
				creatureId: '413',
				name: 'Wormadam',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pokémon)',
				imageLink: 'Pokemon\\413Wormadam.webp'
			},
			{
				creatureId: '414',
				name: 'Mothim',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mothim_(Pokémon)',
				imageLink: 'Pokemon\\414Mothim.webp'
			},
			{
				creatureId: '415',
				name: 'Combee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Combee_(Pokémon)',
				imageLink: 'Pokemon\\415Combee.webp'
			},
			{
				creatureId: '416',
				name: 'Vespiquen',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vespiquen_(Pokémon)',
				imageLink: 'Pokemon\\416Vespiquen.webp'
			},
			{
				creatureId: '417',
				name: 'Pachirisu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pachirisu_(Pokémon)',
				imageLink: 'Pokemon\\417Pachirisu.webp'
			},
			{
				creatureId: '418',
				name: 'Buizel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Buizel_(Pokémon)',
				imageLink: 'Pokemon\\418Buizel.webp'
			},
			{
				creatureId: '419',
				name: 'Floatzel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Floatzel_(Pokémon)',
				imageLink: 'Pokemon\\419Floatzel.webp'
			},
			{
				creatureId: '420',
				name: 'Cherubi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cherubi_(Pokémon)',
				imageLink: 'Pokemon\\420Cherubi.webp'
			},
			{
				creatureId: '421',
				name: 'Cherrim',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cherrim_(Pokémon)',
				imageLink: 'Pokemon\\421Cherrim.webp'
			},
			{
				creatureId: '422',
				name: 'Shellos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shellos_(Pokémon)',
				imageLink: 'Pokemon\\422Shellos.webp'
			},
			{
				creatureId: '423',
				name: 'Gastrodon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gastrodon_(Pokémon)',
				imageLink: 'Pokemon\\423Gastrodon.webp'
			},
			{
				creatureId: '424',
				name: 'Ambipom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ambipom_(Pokémon)',
				imageLink: 'Pokemon\\424Ambipom.webp'
			},
			{
				creatureId: '425',
				name: 'Drifloon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drifloon_(Pokémon)',
				imageLink: 'Pokemon\\425Drifloon.webp'
			},
			{
				creatureId: '426',
				name: 'Drifblim',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drifblim_(Pokémon)',
				imageLink: 'Pokemon\\426Drifblim.webp'
			},
			{
				creatureId: '427',
				name: 'Buneary',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Buneary_(Pokémon)',
				imageLink: 'Pokemon\\427Buneary.webp'
			},
			{
				creatureId: '428',
				name: 'Lopunny',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lopunny_(Pokémon)',
				imageLink: 'Pokemon\\428Lopunny.webp'
			},
			{
				creatureId: '429',
				name: 'Mismagius',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mismagius_(Pokémon)',
				imageLink: 'Pokemon\\429Mismagius.webp'
			},
			{
				creatureId: '430',
				name: 'Honchkrow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pokémon)',
				imageLink: 'Pokemon\\430Honchkrow.webp'
			},
			{
				creatureId: '431',
				name: 'Glameow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Glameow_(Pokémon)',
				imageLink: 'Pokemon\\431Glameow.webp'
			},
			{
				creatureId: '432',
				name: 'Purugly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Purugly_(Pokémon)',
				imageLink: 'Pokemon\\432Purugly.webp'
			},
			{
				creatureId: '433',
				name: 'Chingling',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chingling_(Pokémon)',
				imageLink: 'Pokemon\\433Chingling.webp'
			},
			{
				creatureId: '434',
				name: 'Stunky',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Stunky_(Pokémon)',
				imageLink: 'Pokemon\\434Stunky.webp'
			},
			{
				creatureId: '435',
				name: 'Skuntank',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skuntank_(Pokémon)',
				imageLink: 'Pokemon\\435Skuntank.webp'
			},
			{
				creatureId: '436',
				name: 'Bronzor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pokémon)',
				imageLink: 'Pokemon\\436Bronzor.webp'
			},
			{
				creatureId: '437',
				name: 'Bronzong',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bronzong_(Pokémon)',
				imageLink: 'Pokemon\\437Bronzong.webp'
			},
			{
				creatureId: '438',
				name: 'Bonsly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pokémon)',
				imageLink: 'Pokemon\\438Bonsly.webp'
			},
			{
				creatureId: '439',
				name: 'Mime Jr.',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mime_Jr._(Pokémon)',
				imageLink: 'Pokemon\\439Mime-jr.webp'
			},
			{
				creatureId: '440',
				name: 'Happiny',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Happiny_(Pokémon)',
				imageLink: 'Pokemon\\440Happiny.webp'
			},
			{
				creatureId: '441',
				name: 'Chatot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chatot_(Pokémon)',
				imageLink: 'Pokemon\\441Chatot.webp'
			},
			{
				creatureId: '442',
				name: 'Spiritomb',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spiritomb_(Pokémon)',
				imageLink: 'Pokemon\\442Spiritomb.webp'
			},
			{
				creatureId: '443',
				name: 'Gible',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gible_(Pokémon)',
				imageLink: 'Pokemon\\443Gible.webp'
			},
			{
				creatureId: '444',
				name: 'Gabite',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gabite_(Pokémon)',
				imageLink: 'Pokemon\\444Gabite.webp'
			},
			{
				creatureId: '445',
				name: 'Garchomp',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pokémon)',
				imageLink: 'Pokemon\\445Garchomp.webp'
			},
			{
				creatureId: '446',
				name: 'Munchlax',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pokémon)',
				imageLink: 'Pokemon\\446Munchlax.webp'
			},
			{
				creatureId: '447',
				name: 'Riolu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Riolu_(Pokémon)',
				imageLink: 'Pokemon\\447Riolu.webp'
			},
			{
				creatureId: '448',
				name: 'Lucario',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lucario_(Pokémon)',
				imageLink: 'Pokemon\\448Lucario.webp'
			},
			{
				creatureId: '449',
				name: 'Hippopotas',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hippopotas_(Pokémon)',
				imageLink: 'Pokemon\\449Hippopotas.webp'
			},
			{
				creatureId: '450',
				name: 'Hippowdon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hippowdon_(Pokémon)',
				imageLink: 'Pokemon\\450Hippowdon.webp'
			},
			{
				creatureId: '451',
				name: 'Skorupi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skorupi_(Pokémon)',
				imageLink: 'Pokemon\\451Skorupi.webp'
			},
			{
				creatureId: '452',
				name: 'Drapion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drapion_(Pokémon)',
				imageLink: 'Pokemon\\452Drapion.webp'
			},
			{
				creatureId: '453',
				name: 'Croagunk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Croagunk_(Pokémon)',
				imageLink: 'Pokemon\\453Croagunk.webp'
			},
			{
				creatureId: '454',
				name: 'Toxicroak',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Toxicroak_(Pokémon)',
				imageLink: 'Pokemon\\454Toxicroak.webp'
			},
			{
				creatureId: '455',
				name: 'Carnivine',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Carnivine_(Pokémon)',
				imageLink: 'Pokemon\\455Carnivine.webp'
			},
			{
				creatureId: '456',
				name: 'Finneon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Finneon_(Pokémon)',
				imageLink: 'Pokemon\\456Finneon.webp'
			},
			{
				creatureId: '457',
				name: 'Lumineon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lumineon_(Pokémon)',
				imageLink: 'Pokemon\\457Lumineon.webp'
			},
			{
				creatureId: '458',
				name: 'Mantyke',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pokémon)',
				imageLink: 'Pokemon\\458Mantyke.webp'
			},
			{
				creatureId: '459',
				name: 'Snover',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Snover_(Pokémon)',
				imageLink: 'Pokemon\\459Snover.webp'
			},
			{
				creatureId: '460',
				name: 'Abomasnow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pokémon)',
				imageLink: 'Pokemon\\460Abomasnow.webp'
			},
			{
				creatureId: '461',
				name: 'Weavile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Weavile_(Pokémon)',
				imageLink: 'Pokemon\\461Weavile.webp'
			},
			{
				creatureId: '462',
				name: 'Magnezone',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magnezone_(Pokémon)',
				imageLink: 'Pokemon\\462Magnezone.webp'
			},
			{
				creatureId: '463',
				name: 'Lickilicky',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lickilicky_(Pokémon)',
				imageLink: 'Pokemon\\463Lickilicky.webp'
			},
			{
				creatureId: '464',
				name: 'Rhyperior',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rhyperior_(Pokémon)',
				imageLink: 'Pokemon\\464Rhyperior.webp'
			},
			{
				creatureId: '465',
				name: 'Tangrowth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tangrowth_(Pokémon)',
				imageLink: 'Pokemon\\465Tangrowth.webp'
			},
			{
				creatureId: '466',
				name: 'Electivire',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Electivire_(Pokémon)',
				imageLink: 'Pokemon\\466Electivire.webp'
			},
			{
				creatureId: '467',
				name: 'Magmortar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magmortar_(Pokémon)',
				imageLink: 'Pokemon\\467Magmortar.webp'
			},
			{
				creatureId: '468',
				name: 'Togekiss',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Togekiss_(Pokémon)',
				imageLink: 'Pokemon\\468Togekiss.webp'
			},
			{
				creatureId: '469',
				name: 'Yanmega',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Yanmega_(Pokémon)',
				imageLink: 'Pokemon\\469Yanmega.webp'
			},
			{
				creatureId: '470',
				name: 'Leafeon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pokémon)',
				imageLink: 'Pokemon\\470Leafeon.webp'
			},
			{
				creatureId: '471',
				name: 'Glaceon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pokémon)',
				imageLink: 'Pokemon\\471Glaceon.webp'
			},
			{
				creatureId: '472',
				name: 'Gliscor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gliscor_(Pokémon)',
				imageLink: 'Pokemon\\472Gliscor.webp'
			},
			{
				creatureId: '473',
				name: 'Mamoswine',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pokémon)',
				imageLink: 'Pokemon\\473Mamoswine.webp'
			},
			{
				creatureId: '474',
				name: 'Porygon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pokémon)',
				imageLink: 'Pokemon\\474Porygon.webp'
			},
			{
				creatureId: '475',
				name: 'Gallade',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gallade_(Pokémon)',
				imageLink: 'Pokemon\\475Gallade.webp'
			},
			{
				creatureId: '476',
				name: 'Probopass',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Probopass_(Pokémon)',
				imageLink: 'Pokemon\\476Probopass.webp'
			},
			{
				creatureId: '477',
				name: 'Dusknoir',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dusknoir_(Pokémon)',
				imageLink: 'Pokemon\\477Dusknoir.webp'
			},
			{
				creatureId: '478',
				name: 'Froslass',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Froslass_(Pokémon)',
				imageLink: 'Pokemon\\478Froslass.webp'
			},
			{
				creatureId: '479',
				name: 'Rotom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pokémon)',
				imageLink: 'Pokemon\\479Rotom.webp'
			},
			{
				creatureId: '480',
				name: 'Uxie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Uxie_(Pokémon)',
				imageLink: 'Pokemon\\480Uxie.webp'
			},
			{
				creatureId: '481',
				name: 'Mesprit',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mesprit_(Pokémon)',
				imageLink: 'Pokemon\\481Mesprit.webp'
			},
			{
				creatureId: '482',
				name: 'Azelf',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Azelf_(Pokémon)',
				imageLink: 'Pokemon\\482Azelf.webp'
			},
			{
				creatureId: '483',
				name: 'Dialga',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dialga_(Pokémon)',
				imageLink: 'Pokemon\\483Dialga.webp'
			},
			{
				creatureId: '484',
				name: 'Palkia',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Palkia_(Pokémon)',
				imageLink: 'Pokemon\\484Palkia.webp'
			},
			{
				creatureId: '485',
				name: 'Heatran',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Heatran_(Pokémon)',
				imageLink: 'Pokemon\\485Heatran.webp'
			},
			{
				creatureId: '486',
				name: 'Regigigas',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pokémon)',
				imageLink: 'Pokemon\\486Regigigas.webp'
			},
			{
				creatureId: '487',
				name: 'Giratina',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pokémon)',
				imageLink: 'Pokemon\\487Giratina-altered.webp'
			},
			{
				creatureId: '488',
				name: 'Cresselia',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pokémon)',
				imageLink: 'Pokemon\\488Cresselia.webp'
			},
			{
				creatureId: '489',
				name: 'Phione',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Phione_(Pokémon)',
				imageLink: 'Pokemon\\489Phione.webp'
			},
			{
				creatureId: '490',
				name: 'Manaphy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pokémon)',
				imageLink: 'Pokemon\\490Manaphy.webp'
			},
			{
				creatureId: '491',
				name: 'Darkrai',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pokémon)',
				imageLink: 'Pokemon\\491Darkrai.webp'
			},
			{
				creatureId: '492',
				name: 'Shaymin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shaymin_(Pokémon)',
				imageLink: 'Pokemon\\492Shaymin-land.webp'
			},
			{
				creatureId: '493',
				name: 'Arceus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pokémon)',
				imageLink: 'Pokemon\\493Arceus.webp'
			},
			{
				creatureId: '494',
				name: 'Victini',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Victini_(Pokémon)',
				imageLink: 'Pokemon\\494Victini.webp'
			},
			{
				creatureId: '495',
				name: 'Snivy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Snivy_(Pokémon)',
				imageLink: 'Pokemon\\495Snivy.webp'
			},
			{
				creatureId: '496',
				name: 'Servine',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Servine_(Pokémon)',
				imageLink: 'Pokemon\\496Servine.webp'
			},
			{
				creatureId: '497',
				name: 'Serperior',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Serperior_(Pokémon)',
				imageLink: 'Pokemon\\497Serperior.webp'
			},
			{
				creatureId: '498',
				name: 'Tepig',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tepig_(Pokémon)',
				imageLink: 'Pokemon\\498Tepig.webp'
			},
			{
				creatureId: '499',
				name: 'Pignite',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pignite_(Pokémon)',
				imageLink: 'Pokemon\\499Pignite.webp'
			},
			{
				creatureId: '500',
				name: 'Emboar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pokémon)',
				imageLink: 'Pokemon\\500Emboar.webp'
			},
			{
				creatureId: '501',
				name: 'Oshawott',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Oshawott_(Pokémon)',
				imageLink: 'Pokemon\\501Oshawott.webp'
			},
			{
				creatureId: '502',
				name: 'Dewott',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dewott_(Pokémon)',
				imageLink: 'Pokemon\\502Dewott.webp'
			},
			{
				creatureId: '503',
				name: 'Samurott',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Samurott_(Pokémon)',
				imageLink: 'Pokemon\\503Samurott.webp'
			},
			{
				creatureId: '504',
				name: 'Patrat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Patrat_(Pokémon)',
				imageLink: 'Pokemon\\504Patrat.webp'
			},
			{
				creatureId: '505',
				name: 'Watchog',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Watchog_(Pokémon)',
				imageLink: 'Pokemon\\505Watchog.webp'
			},
			{
				creatureId: '506',
				name: 'Lillipup',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lillipup_(Pokémon)',
				imageLink: 'Pokemon\\506Lillipup.webp'
			},
			{
				creatureId: '507',
				name: 'Herdier',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Herdier_(Pokémon)',
				imageLink: 'Pokemon\\507Herdier.webp'
			},
			{
				creatureId: '508',
				name: 'Stoutland',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Stoutland_(Pokémon)',
				imageLink: 'Pokemon\\508Stoutland.webp'
			},
			{
				creatureId: '509',
				name: 'Purrloin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pokémon)',
				imageLink: 'Pokemon\\509Purrloin.webp'
			},
			{
				creatureId: '510',
				name: 'Liepard',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Liepard_(Pokémon)',
				imageLink: 'Pokemon\\510Liepard.webp'
			},
			{
				creatureId: '511',
				name: 'Pansage',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pansage_(Pokémon)',
				imageLink: 'Pokemon\\511Pansage.webp'
			},
			{
				creatureId: '512',
				name: 'Simisage',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Simisage_(Pokémon)',
				imageLink: 'Pokemon\\512Simisage.webp'
			},
			{
				creatureId: '513',
				name: 'Pansear',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pansear_(Pokémon)',
				imageLink: 'Pokemon\\513Pansear.webp'
			},
			{
				creatureId: '514',
				name: 'Simisear',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Simisear_(Pokémon)',
				imageLink: 'Pokemon\\514Simisear.webp'
			},
			{
				creatureId: '515',
				name: 'Panpour',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Panpour_(Pokémon)',
				imageLink: 'Pokemon\\515Panpour.webp'
			},
			{
				creatureId: '516',
				name: 'Simipour',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Simipour_(Pokémon)',
				imageLink: 'Pokemon\\516Simipour.webp'
			},
			{
				creatureId: '517',
				name: 'Munna',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Munna_(Pokémon)',
				imageLink: 'Pokemon\\517Munna.webp'
			},
			{
				creatureId: '518',
				name: 'Musharna',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Musharna_(Pokémon)',
				imageLink: 'Pokemon\\518Musharna.webp'
			},
			{
				creatureId: '519',
				name: 'Pidove',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pidove_(Pokémon)',
				imageLink: 'Pokemon\\519Pidove.webp'
			},
			{
				creatureId: '520',
				name: 'Tranquill',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tranquill_(Pokémon)',
				imageLink: 'Pokemon\\520Tranquill.webp'
			},
			{
				creatureId: '521',
				name: 'Unfezant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Unfezant_(Pokémon)',
				imageLink: 'Pokemon\\521Unfezant.webp'
			},
			{
				creatureId: '522',
				name: 'Blitzle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Blitzle_(Pokémon)',
				imageLink: 'Pokemon\\522Blitzle.webp'
			},
			{
				creatureId: '523',
				name: 'Zebstrika',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zebstrika_(Pokémon)',
				imageLink: 'Pokemon\\523Zebstrika.webp'
			},
			{
				creatureId: '524',
				name: 'Roggenrola',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Roggenrola_(Pokémon)',
				imageLink: 'Pokemon\\524Roggenrola.webp'
			},
			{
				creatureId: '525',
				name: 'Boldore',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Boldore_(Pokémon)',
				imageLink: 'Pokemon\\525Boldore.webp'
			},
			{
				creatureId: '526',
				name: 'Gigalith',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gigalith_(Pokémon)',
				imageLink: 'Pokemon\\526Gigalith.webp'
			},
			{
				creatureId: '527',
				name: 'Woobat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Woobat_(Pokémon)',
				imageLink: 'Pokemon\\527Woobat.webp'
			},
			{
				creatureId: '528',
				name: 'Swoobat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swoobat_(Pokémon)',
				imageLink: 'Pokemon\\528Swoobat.webp'
			},
			{
				creatureId: '529',
				name: 'Drilbur',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drilbur_(Pokémon)',
				imageLink: 'Pokemon\\529Drilbur.webp'
			},
			{
				creatureId: '530',
				name: 'Excadrill',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Excadrill_(Pokémon)',
				imageLink: 'Pokemon\\530Excadrill.webp'
			},
			{
				creatureId: '531',
				name: 'Audino',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Audino_(Pokémon)',
				imageLink: 'Pokemon\\531Audino.webp'
			},
			{
				creatureId: '532',
				name: 'Timburr',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Timburr_(Pokémon)',
				imageLink: 'Pokemon\\532Timburr.webp'
			},
			{
				creatureId: '533',
				name: 'Gurdurr',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gurdurr_(Pokémon)',
				imageLink: 'Pokemon\\533Gurdurr.webp'
			},
			{
				creatureId: '534',
				name: 'Conkeldurr',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Conkeldurr_(Pokémon)',
				imageLink: 'Pokemon\\534Conkeldurr.webp'
			},
			{
				creatureId: '535',
				name: 'Tympole',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tympole_(Pokémon)',
				imageLink: 'Pokemon\\535Tympole.webp'
			},
			{
				creatureId: '536',
				name: 'Palpitoad',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Palpitoad_(Pokémon)',
				imageLink: 'Pokemon\\536Palpitoad.webp'
			},
			{
				creatureId: '537',
				name: 'Seismitoad',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Seismitoad_(Pokémon)',
				imageLink: 'Pokemon\\537Seismitoad.webp'
			},
			{
				creatureId: '538',
				name: 'Throh',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Throh_(Pokémon)',
				imageLink: 'Pokemon\\538Throh.webp'
			},
			{
				creatureId: '539',
				name: 'Sawk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sawk_(Pokémon)',
				imageLink: 'Pokemon\\539Sawk.webp'
			},
			{
				creatureId: '540',
				name: 'Sewaddle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sewaddle_(Pokémon)',
				imageLink: 'Pokemon\\540Sewaddle.webp'
			},
			{
				creatureId: '541',
				name: 'Swadloon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swadloon_(Pokémon)',
				imageLink: 'Pokemon\\541Swadloon.webp'
			},
			{
				creatureId: '542',
				name: 'Leavanny',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Leavanny_(Pokémon)',
				imageLink: 'Pokemon\\542Leavanny.webp'
			},
			{
				creatureId: '543',
				name: 'Venipede',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Venipede_(Pokémon)',
				imageLink: 'Pokemon\\543Venipede.webp'
			},
			{
				creatureId: '544',
				name: 'Whirlipede',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Whirlipede_(Pokémon)',
				imageLink: 'Pokemon\\544Whirlipede.webp'
			},
			{
				creatureId: '545',
				name: 'Scolipede',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scolipede_(Pokémon)',
				imageLink: 'Pokemon\\545Scolipede.webp'
			},
			{
				creatureId: '546',
				name: 'Cottonee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cottonee_(Pokémon)',
				imageLink: 'Pokemon\\546Cottonee.webp'
			},
			{
				creatureId: '547',
				name: 'Whimsicott',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Whimsicott_(Pokémon)',
				imageLink: 'Pokemon\\547Whimsicott.webp'
			},
			{
				creatureId: '548',
				name: 'Petilil',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Petilil_(Pokémon)',
				imageLink: 'Pokemon\\548Petilil.webp'
			},
			{
				creatureId: '549',
				name: 'Lilligant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pokémon)',
				imageLink: 'Pokemon\\549Lilligant.webp'
			},
			{
				creatureId: '550',
				name: 'Basculin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Basculin_(Pokémon)',
				imageLink: 'Pokemon\\550Basculin-red-striped.webp'
			},
			{
				creatureId: '551',
				name: 'Sandile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sandile_(Pokémon)',
				imageLink: 'Pokemon\\551Sandile.webp'
			},
			{
				creatureId: '552',
				name: 'Krokorok',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Krokorok_(Pokémon)',
				imageLink: 'Pokemon\\552Krokorok.webp'
			},
			{
				creatureId: '553',
				name: 'Krookodile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Krookodile_(Pokémon)',
				imageLink: 'Pokemon\\553Krookodile.webp'
			},
			{
				creatureId: '554',
				name: 'Darumaka',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Darumaka_(Pokémon)',
				imageLink: 'Pokemon\\554Darumaka.webp'
			},
			{
				creatureId: '555',
				name: 'Darmanitan',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pokémon)',
				imageLink: 'Pokemon\\555Darmanitan-standard.webp'
			},
			{
				creatureId: '556',
				name: 'Maractus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Maractus_(Pokémon)',
				imageLink: 'Pokemon\\556Maractus.webp'
			},
			{
				creatureId: '557',
				name: 'Dwebble',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dwebble_(Pokémon)',
				imageLink: 'Pokemon\\557Dwebble.webp'
			},
			{
				creatureId: '558',
				name: 'Crustle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Crustle_(Pokémon)',
				imageLink: 'Pokemon\\558Crustle.webp'
			},
			{
				creatureId: '559',
				name: 'Scraggy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scraggy_(Pokémon)',
				imageLink: 'Pokemon\\559Scraggy.webp'
			},
			{
				creatureId: '560',
				name: 'Scrafty',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scrafty_(Pokémon)',
				imageLink: 'Pokemon\\560Scrafty.webp'
			},
			{
				creatureId: '561',
				name: 'Sigilyph',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sigilyph_(Pokémon)',
				imageLink: 'Pokemon\\561Sigilyph.webp'
			},
			{
				creatureId: '562',
				name: 'Yamask',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Yamask_(Pokémon)',
				imageLink: 'Pokemon\\562Yamask.webp'
			},
			{
				creatureId: '563',
				name: 'Cofagrigus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cofagrigus_(Pokémon)',
				imageLink: 'Pokemon\\563Cofagrigus.webp'
			},
			{
				creatureId: '564',
				name: 'Tirtouga',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tirtouga_(Pokémon)',
				imageLink: 'Pokemon\\564Tirtouga.webp'
			},
			{
				creatureId: '565',
				name: 'Carracosta',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Carracosta_(Pokémon)',
				imageLink: 'Pokemon\\565Carracosta.webp'
			},
			{
				creatureId: '566',
				name: 'Archen',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Archen_(Pokémon)',
				imageLink: 'Pokemon\\566Archen.webp'
			},
			{
				creatureId: '567',
				name: 'Archeops',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Archeops_(Pokémon)',
				imageLink: 'Pokemon\\567Archeops.webp'
			},
			{
				creatureId: '568',
				name: 'Trubbish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Trubbish_(Pokémon)',
				imageLink: 'Pokemon\\568Trubbish.webp'
			},
			{
				creatureId: '569',
				name: 'Garbodor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Garbodor_(Pokémon)',
				imageLink: 'Pokemon\\569Garbodor.webp'
			},
			{
				creatureId: '570',
				name: 'Zorua',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zorua_(Pokémon)',
				imageLink: 'Pokemon\\570Zorua.webp'
			},
			{
				creatureId: '571',
				name: 'Zoroark',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zoroark_(Pokémon)',
				imageLink: 'Pokemon\\571Zoroark.webp'
			},
			{
				creatureId: '572',
				name: 'Minccino',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Minccino_(Pokémon)',
				imageLink: 'Pokemon\\572Minccino.webp'
			},
			{
				creatureId: '573',
				name: 'Cinccino',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cinccino_(Pokémon)',
				imageLink: 'Pokemon\\573Cinccino.webp'
			},
			{
				creatureId: '574',
				name: 'Gothita',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gothita_(Pokémon)',
				imageLink: 'Pokemon\\574Gothita.webp'
			},
			{
				creatureId: '575',
				name: 'Gothorita',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gothorita_(Pokémon)',
				imageLink: 'Pokemon\\575Gothorita.webp'
			},
			{
				creatureId: '576',
				name: 'Gothitelle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gothitelle_(Pokémon)',
				imageLink: 'Pokemon\\576Gothitelle.webp'
			},
			{
				creatureId: '577',
				name: 'Solosis',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Solosis_(Pokémon)',
				imageLink: 'Pokemon\\577Solosis.webp'
			},
			{
				creatureId: '578',
				name: 'Duosion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Duosion_(Pokémon)',
				imageLink: 'Pokemon\\578Duosion.webp'
			},
			{
				creatureId: '579',
				name: 'Reuniclus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Reuniclus_(Pokémon)',
				imageLink: 'Pokemon\\579Reuniclus.webp'
			},
			{
				creatureId: '580',
				name: 'Ducklett',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ducklett_(Pokémon)',
				imageLink: 'Pokemon\\580Ducklett.webp'
			},
			{
				creatureId: '581',
				name: 'Swanna',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swanna_(Pokémon)',
				imageLink: 'Pokemon\\581Swanna.webp'
			},
			{
				creatureId: '582',
				name: 'Vanillite',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vanillite_(Pokémon)',
				imageLink: 'Pokemon\\582Vanillite.webp'
			},
			{
				creatureId: '583',
				name: 'Vanillish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vanillish_(Pokémon)',
				imageLink: 'Pokemon\\583Vanillish.webp'
			},
			{
				creatureId: '584',
				name: 'Vanilluxe',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vanilluxe_(Pokémon)',
				imageLink: 'Pokemon\\584Vanilluxe.webp'
			},
			{
				creatureId: '585',
				name: 'Deerling',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Deerling_(Pokémon)',
				imageLink: 'Pokemon\\585Deerling.webp'
			},
			{
				creatureId: '586',
				name: 'Sawsbuck',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sawsbuck_(Pokémon)',
				imageLink: 'Pokemon\\586Sawsbuck.webp'
			},
			{
				creatureId: '587',
				name: 'Emolga',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Emolga_(Pokémon)',
				imageLink: 'Pokemon\\587Emolga.webp'
			},
			{
				creatureId: '588',
				name: 'Karrablast',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Karrablast_(Pokémon)',
				imageLink: 'Pokemon\\588Karrablast.webp'
			},
			{
				creatureId: '589',
				name: 'Escavalier',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Escavalier_(Pokémon)',
				imageLink: 'Pokemon\\589Escavalier.webp'
			},
			{
				creatureId: '590',
				name: 'Foongus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Foongus_(Pokémon)',
				imageLink: 'Pokemon\\590Foongus.webp'
			},
			{
				creatureId: '591',
				name: 'Amoonguss',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Amoonguss_(Pokémon)',
				imageLink: 'Pokemon\\591Amoonguss.webp'
			},
			{
				creatureId: '592',
				name: 'Frillish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Frillish_(Pokémon)',
				imageLink: 'Pokemon\\592Frillish.webp'
			},
			{
				creatureId: '593',
				name: 'Jellicent',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Jellicent_(Pokémon)',
				imageLink: 'Pokemon\\593Jellicent.webp'
			},
			{
				creatureId: '594',
				name: 'Alomomola',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Alomomola_(Pokémon)',
				imageLink: 'Pokemon\\594Alomomola.webp'
			},
			{
				creatureId: '595',
				name: 'Joltik',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Joltik_(Pokémon)',
				imageLink: 'Pokemon\\595Joltik.webp'
			},
			{
				creatureId: '596',
				name: 'Galvantula',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Galvantula_(Pokémon)',
				imageLink: 'Pokemon\\596Galvantula.webp'
			},
			{
				creatureId: '597',
				name: 'Ferroseed',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ferroseed_(Pokémon)',
				imageLink: 'Pokemon\\597Ferroseed.webp'
			},
			{
				creatureId: '598',
				name: 'Ferrothorn',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ferrothorn_(Pokémon)',
				imageLink: 'Pokemon\\598Ferrothorn.webp'
			},
			{
				creatureId: '599',
				name: 'Klink',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Klink_(Pokémon)',
				imageLink: 'Pokemon\\599Klink.webp'
			},
			{
				creatureId: '600',
				name: 'Klang',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Klang_(Pokémon)',
				imageLink: 'Pokemon\\600Klang.webp'
			},
			{
				creatureId: '601',
				name: 'Klinklang',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Klinklang_(Pokémon)',
				imageLink: 'Pokemon\\601Klinklang.webp'
			},
			{
				creatureId: '602',
				name: 'Tynamo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tynamo_(Pokémon)',
				imageLink: 'Pokemon\\602Tynamo.webp'
			},
			{
				creatureId: '603',
				name: 'Eelektrik',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Eelektrik_(Pokémon)',
				imageLink: 'Pokemon\\603Eelektrik.webp'
			},
			{
				creatureId: '604',
				name: 'Eelektross',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Eelektross_(Pokémon)',
				imageLink: 'Pokemon\\604Eelektross.webp'
			},
			{
				creatureId: '605',
				name: 'Elgyem',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Elgyem_(Pokémon)',
				imageLink: 'Pokemon\\605Elgyem.webp'
			},
			{
				creatureId: '606',
				name: 'Beheeyem',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Beheeyem_(Pokémon)',
				imageLink: 'Pokemon\\606Beheeyem.webp'
			},
			{
				creatureId: '607',
				name: 'Litwick',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Litwick_(Pokémon)',
				imageLink: 'Pokemon\\607Litwick.webp'
			},
			{
				creatureId: '608',
				name: 'Lampent',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lampent_(Pokémon)',
				imageLink: 'Pokemon\\608Lampent.webp'
			},
			{
				creatureId: '609',
				name: 'Chandelure',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chandelure_(Pokémon)',
				imageLink: 'Pokemon\\609Chandelure.webp'
			},
			{
				creatureId: '610',
				name: 'Axew',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Axew_(Pokémon)',
				imageLink: 'Pokemon\\610Axew.webp'
			},
			{
				creatureId: '611',
				name: 'Fraxure',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fraxure_(Pokémon)',
				imageLink: 'Pokemon\\611Fraxure.webp'
			},
			{
				creatureId: '612',
				name: 'Haxorus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Haxorus_(Pokémon)',
				imageLink: 'Pokemon\\612Haxorus.webp'
			},
			{
				creatureId: '613',
				name: 'Cubchoo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cubchoo_(Pokémon)',
				imageLink: 'Pokemon\\613Cubchoo.webp'
			},
			{
				creatureId: '614',
				name: 'Beartic',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Beartic_(Pokémon)',
				imageLink: 'Pokemon\\614Beartic.webp'
			},
			{
				creatureId: '615',
				name: 'Cryogonal',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cryogonal_(Pokémon)',
				imageLink: 'Pokemon\\615Cryogonal.webp'
			},
			{
				creatureId: '616',
				name: 'Shelmet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shelmet_(Pokémon)',
				imageLink: 'Pokemon\\616Shelmet.webp'
			},
			{
				creatureId: '617',
				name: 'Accelgor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Accelgor_(Pokémon)',
				imageLink: 'Pokemon\\617Accelgor.webp'
			},
			{
				creatureId: '618',
				name: 'Stunfisk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pokémon)',
				imageLink: 'Pokemon\\618Stunfisk.webp'
			},
			{
				creatureId: '619',
				name: 'Mienfoo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mienfoo_(Pokémon)',
				imageLink: 'Pokemon\\619Mienfoo.webp'
			},
			{
				creatureId: '620',
				name: 'Mienshao',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mienshao_(Pokémon)',
				imageLink: 'Pokemon\\620Mienshao.webp'
			},
			{
				creatureId: '621',
				name: 'Druddigon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Druddigon_(Pokémon)',
				imageLink: 'Pokemon\\621Druddigon.webp'
			},
			{
				creatureId: '622',
				name: 'Golett',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Golett_(Pokémon)',
				imageLink: 'Pokemon\\622Golett.webp'
			},
			{
				creatureId: '623',
				name: 'Golurk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Golurk_(Pokémon)',
				imageLink: 'Pokemon\\623Golurk.webp'
			},
			{
				creatureId: '624',
				name: 'Pawniard',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pawniard_(Pokémon)',
				imageLink: 'Pokemon\\624Pawniard.webp'
			},
			{
				creatureId: '625',
				name: 'Bisharp',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bisharp_(Pokémon)',
				imageLink: 'Pokemon\\625Bisharp.webp'
			},
			{
				creatureId: '626',
				name: 'Bouffalant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bouffalant_(Pokémon)',
				imageLink: 'Pokemon\\626Bouffalant.webp'
			},
			{
				creatureId: '627',
				name: 'Rufflet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rufflet_(Pokémon)',
				imageLink: 'Pokemon\\627Rufflet.webp'
			},
			{
				creatureId: '628',
				name: 'Braviary',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Braviary_(Pokémon)',
				imageLink: 'Pokemon\\628Braviary.webp'
			},
			{
				creatureId: '629',
				name: 'Vullaby',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vullaby_(Pokémon)',
				imageLink: 'Pokemon\\629Vullaby.webp'
			},
			{
				creatureId: '630',
				name: 'Mandibuzz',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mandibuzz_(Pokémon)',
				imageLink: 'Pokemon\\630Mandibuzz.webp'
			},
			{
				creatureId: '631',
				name: 'Heatmor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Heatmor_(Pokémon)',
				imageLink: 'Pokemon\\631Heatmor.webp'
			},
			{
				creatureId: '632',
				name: 'Durant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Durant_(Pokémon)',
				imageLink: 'Pokemon\\632Durant.webp'
			},
			{
				creatureId: '633',
				name: 'Deino',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Deino_(Pokémon)',
				imageLink: 'Pokemon\\633Deino.webp'
			},
			{
				creatureId: '634',
				name: 'Zweilous',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zweilous_(Pokémon)',
				imageLink: 'Pokemon\\634Zweilous.webp'
			},
			{
				creatureId: '635',
				name: 'Hydreigon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hydreigon_(Pokémon)',
				imageLink: 'Pokemon\\635Hydreigon.webp'
			},
			{
				creatureId: '636',
				name: 'Larvesta',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Larvesta_(Pokémon)',
				imageLink: 'Pokemon\\636Larvesta.webp'
			},
			{
				creatureId: '637',
				name: 'Volcarona',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pokémon)',
				imageLink: 'Pokemon\\637Volcarona.webp'
			},
			{
				creatureId: '638',
				name: 'Cobalion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cobalion_(Pokémon)',
				imageLink: 'Pokemon\\638Cobalion.webp'
			},
			{
				creatureId: '639',
				name: 'Terrakion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Terrakion_(Pokémon)',
				imageLink: 'Pokemon\\639Terrakion.webp'
			},
			{
				creatureId: '640',
				name: 'Virizion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Virizion_(Pokémon)',
				imageLink: 'Pokemon\\640Virizion.webp'
			},
			{
				creatureId: '641',
				name: 'Tornadus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tornadus_(Pokémon)',
				imageLink: 'Pokemon\\641Tornadus-incarnate.webp'
			},
			{
				creatureId: '642',
				name: 'Thundurus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Thundurus_(Pokémon)',
				imageLink: 'Pokemon\\642Thundurus-incarnate.webp'
			},
			{
				creatureId: '643',
				name: 'Reshiram',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pokémon)',
				imageLink: 'Pokemon\\643Reshiram.webp'
			},
			{
				creatureId: '644',
				name: 'Zekrom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pokémon)',
				imageLink: 'Pokemon\\644Zekrom.webp'
			},
			{
				creatureId: '645',
				name: 'Landorus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Landorus_(Pokémon)',
				imageLink: 'Pokemon\\645Landorus-incarnate.webp'
			},
			{
				creatureId: '646',
				name: 'Kyurem',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pokémon)',
				imageLink: 'Pokemon\\646Kyurem.webp'
			},
			{
				creatureId: '647',
				name: 'Keldeo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Keldeo_(Pokémon)',
				imageLink: 'Pokemon\\647Keldeo-ordinary.webp'
			},
			{
				creatureId: '648',
				name: 'Meloetta',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pokémon)',
				imageLink: 'Pokemon\\648Meloetta-aria.webp'
			},
			{
				creatureId: '649',
				name: 'Genesect',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Genesect_(Pokémon)',
				imageLink: 'Pokemon\\649Genesect.webp'
			},
			{
				creatureId: '650',
				name: 'Chespin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chespin_(Pokémon)',
				imageLink: 'Pokemon\\650Chespin.webp'
			},
			{
				creatureId: '651',
				name: 'Quilladin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Quilladin_(Pokémon)',
				imageLink: 'Pokemon\\651Quilladin.webp'
			},
			{
				creatureId: '652',
				name: 'Chesnaught',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chesnaught_(Pokémon)',
				imageLink: 'Pokemon\\652Chesnaught.webp'
			},
			{
				creatureId: '653',
				name: 'Fennekin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fennekin_(Pokémon)',
				imageLink: 'Pokemon\\653Fennekin.webp'
			},
			{
				creatureId: '654',
				name: 'Braixen',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Braixen_(Pokémon)',
				imageLink: 'Pokemon\\654Braixen.webp'
			},
			{
				creatureId: '655',
				name: 'Delphox',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Delphox_(Pokémon)',
				imageLink: 'Pokemon\\655Delphox.webp'
			},
			{
				creatureId: '656',
				name: 'Froakie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Froakie_(Pokémon)',
				imageLink: 'Pokemon\\656Froakie.webp'
			},
			{
				creatureId: '657',
				name: 'Frogadier',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Frogadier_(Pokémon)',
				imageLink: 'Pokemon\\657Frogadier.webp'
			},
			{
				creatureId: '658',
				name: 'Greninja',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pokémon)',
				imageLink: 'Pokemon\\658Greninja.webp'
			},
			{
				creatureId: '659',
				name: 'Bunnelby',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bunnelby_(Pokémon)',
				imageLink: 'Pokemon\\659Bunnelby.webp'
			},
			{
				creatureId: '660',
				name: 'Diggersby',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Diggersby_(Pokémon)',
				imageLink: 'Pokemon\\660Diggersby.webp'
			},
			{
				creatureId: '661',
				name: 'Fletchling',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fletchling_(Pokémon)',
				imageLink: 'Pokemon\\661Fletchling.webp'
			},
			{
				creatureId: '662',
				name: 'Fletchinder',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fletchinder_(Pokémon)',
				imageLink: 'Pokemon\\662Fletchinder.webp'
			},
			{
				creatureId: '663',
				name: 'Talonflame',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Talonflame_(Pokémon)',
				imageLink: 'Pokemon\\663Talonflame.webp'
			},
			{
				creatureId: '664',
				name: 'Scatterbug',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scatterbug_(Pokémon)',
				imageLink: 'Pokemon\\664Scatterbug.webp'
			},
			{
				creatureId: '665',
				name: 'Spewpa',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spewpa_(Pokémon)',
				imageLink: 'Pokemon\\665Spewpa.webp'
			},
			{
				creatureId: '666',
				name: 'Vivillon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vivillon_(Pokémon)',
				imageLink: 'Pokemon\\666Vivillon.webp'
			},
			{
				creatureId: '667',
				name: 'Litleo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Litleo_(Pokémon)',
				imageLink: 'Pokemon\\667Litleo.webp'
			},
			{
				creatureId: '668',
				name: 'Pyroar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pyroar_(Pokémon)',
				imageLink: 'Pokemon\\668Pyroar.webp'
			},
			{
				creatureId: '669',
				name: 'Flabebe',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flabebe_(Pokémon)',
				imageLink: 'Pokemon\\669Flabebe.webp'
			},
			{
				creatureId: '670',
				name: 'Floette',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Floette_(Pokémon)',
				imageLink: 'Pokemon\\670Floette.webp'
			},
			{
				creatureId: '671',
				name: 'Florges',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Florges_(Pokémon)',
				imageLink: 'Pokemon\\671Florges.webp'
			},
			{
				creatureId: '672',
				name: 'Skiddo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skiddo_(Pokémon)',
				imageLink: 'Pokemon\\672Skiddo.webp'
			},
			{
				creatureId: '673',
				name: 'Gogoat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gogoat_(Pokémon)',
				imageLink: 'Pokemon\\673Gogoat.webp'
			},
			{
				creatureId: '674',
				name: 'Pancham',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pancham_(Pokémon)',
				imageLink: 'Pokemon\\674Pancham.webp'
			},
			{
				creatureId: '675',
				name: 'Pangoro',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pangoro_(Pokémon)',
				imageLink: 'Pokemon\\675Pangoro.webp'
			},
			{
				creatureId: '676',
				name: 'Furfrou',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Furfrou_(Pokémon)',
				imageLink: 'Pokemon\\676Furfrou.webp'
			},
			{
				creatureId: '677',
				name: 'Espurr',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Espurr_(Pokémon)',
				imageLink: 'Pokemon\\677Espurr.webp'
			},
			{
				creatureId: '678',
				name: 'Meowstic',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Meowstic_(Pokémon)',
				imageLink: 'Pokemon\\678Meowstic-male.webp'
			},
			{
				creatureId: '679',
				name: 'Honedge',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Honedge_(Pokémon)',
				imageLink: 'Pokemon\\679Honedge.webp'
			},
			{
				creatureId: '680',
				name: 'Doublade',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Doublade_(Pokémon)',
				imageLink: 'Pokemon\\680Doublade.webp'
			},
			{
				creatureId: '681',
				name: 'Aegislash',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Aegislash_(Pokémon)',
				imageLink: 'Pokemon\\681Aegislash-shield.webp'
			},
			{
				creatureId: '682',
				name: 'Spritzee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spritzee_(Pokémon)',
				imageLink: 'Pokemon\\682Spritzee.webp'
			},
			{
				creatureId: '683',
				name: 'Aromatisse',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Aromatisse_(Pokémon)',
				imageLink: 'Pokemon\\683Aromatisse.webp'
			},
			{
				creatureId: '684',
				name: 'Swirlix',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Swirlix_(Pokémon)',
				imageLink: 'Pokemon\\684Swirlix.webp'
			},
			{
				creatureId: '685',
				name: 'Slurpuff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slurpuff_(Pokémon)',
				imageLink: 'Pokemon\\685Slurpuff.webp'
			},
			{
				creatureId: '686',
				name: 'Inkay',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Inkay_(Pokémon)',
				imageLink: 'Pokemon\\686Inkay.webp'
			},
			{
				creatureId: '687',
				name: 'Malamar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Malamar_(Pokémon)',
				imageLink: 'Pokemon\\687Malamar.webp'
			},
			{
				creatureId: '688',
				name: 'Binacle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Binacle_(Pokémon)',
				imageLink: 'Pokemon\\688Binacle.webp'
			},
			{
				creatureId: '689',
				name: 'Barbaracle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Barbaracle_(Pokémon)',
				imageLink: 'Pokemon\\689Barbaracle.webp'
			},
			{
				creatureId: '690',
				name: 'Skrelp',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skrelp_(Pokémon)',
				imageLink: 'Pokemon\\690Skrelp.webp'
			},
			{
				creatureId: '691',
				name: 'Dragalge',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dragalge_(Pokémon)',
				imageLink: 'Pokemon\\691Dragalge.webp'
			},
			{
				creatureId: '692',
				name: 'Clauncher',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Clauncher_(Pokémon)',
				imageLink: 'Pokemon\\692Clauncher.webp'
			},
			{
				creatureId: '693',
				name: 'Clawitzer',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Clawitzer_(Pokémon)',
				imageLink: 'Pokemon\\693Clawitzer.webp'
			},
			{
				creatureId: '694',
				name: 'Helioptile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Helioptile_(Pokémon)',
				imageLink: 'Pokemon\\694Helioptile.webp'
			},
			{
				creatureId: '695',
				name: 'Heliolisk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Heliolisk_(Pokémon)',
				imageLink: 'Pokemon\\695Heliolisk.webp'
			},
			{
				creatureId: '696',
				name: 'Tyrunt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tyrunt_(Pokémon)',
				imageLink: 'Pokemon\\696Tyrunt.webp'
			},
			{
				creatureId: '697',
				name: 'Tyrantrum',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tyrantrum_(Pokémon)',
				imageLink: 'Pokemon\\697Tyrantrum.webp'
			},
			{
				creatureId: '698',
				name: 'Amaura',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Amaura_(Pokémon)',
				imageLink: 'Pokemon\\698Amaura.webp'
			},
			{
				creatureId: '699',
				name: 'Aurorus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Aurorus_(Pokémon)',
				imageLink: 'Pokemon\\699Aurorus.webp'
			},
			{
				creatureId: '700',
				name: 'Sylveon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pokémon)',
				imageLink: 'Pokemon\\700Sylveon.webp'
			},
			{
				creatureId: '701',
				name: 'Hawlucha',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hawlucha_(Pokémon)',
				imageLink: 'Pokemon\\701Hawlucha.webp'
			},
			{
				creatureId: '702',
				name: 'Dedenne',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dedenne_(Pokémon)',
				imageLink: 'Pokemon\\702Dedenne.webp'
			},
			{
				creatureId: '703',
				name: 'Carbink',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Carbink_(Pokémon)',
				imageLink: 'Pokemon\\703Carbink.webp'
			},
			{
				creatureId: '704',
				name: 'Goomy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Goomy_(Pokémon)',
				imageLink: 'Pokemon\\704Goomy.webp'
			},
			{
				creatureId: '705',
				name: 'Sliggoo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pokémon)',
				imageLink: 'Pokemon\\705Sliggoo.webp'
			},
			{
				creatureId: '706',
				name: 'Goodra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Goodra_(Pokémon)',
				imageLink: 'Pokemon\\706Goodra.webp'
			},
			{
				creatureId: '707',
				name: 'Klefki',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Klefki_(Pokémon)',
				imageLink: 'Pokemon\\707Klefki.webp'
			},
			{
				creatureId: '708',
				name: 'Phantump',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Phantump_(Pokémon)',
				imageLink: 'Pokemon\\708Phantump.webp'
			},
			{
				creatureId: '709',
				name: 'Trevenant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Trevenant_(Pokémon)',
				imageLink: 'Pokemon\\709Trevenant.webp'
			},
			{
				creatureId: '710',
				name: 'Pumpkaboo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pokémon)',
				imageLink: 'Pokemon\\710Pumpkaboo-average.webp'
			},
			{
				creatureId: '711',
				name: 'Gourgeist',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pokémon)',
				imageLink: 'Pokemon\\711Gourgeist-average.webp'
			},
			{
				creatureId: '712',
				name: 'Bergmite',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bergmite_(Pokémon)',
				imageLink: 'Pokemon\\712Bergmite.webp'
			},
			{
				creatureId: '713',
				name: 'Avalugg',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Avalugg_(Pokémon)',
				imageLink: 'Pokemon\\713Avalugg.webp'
			},
			{
				creatureId: '714',
				name: 'Noibat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Noibat_(Pokémon)',
				imageLink: 'Pokemon\\714Noibat.webp'
			},
			{
				creatureId: '715',
				name: 'Noivern',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Noivern_(Pokémon)',
				imageLink: 'Pokemon\\715Noivern.webp'
			},
			{
				creatureId: '716',
				name: 'Xerneas',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pokémon)',
				imageLink: 'Pokemon\\716Xerneas.webp'
			},
			{
				creatureId: '717',
				name: 'Yveltal',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Yveltal_(Pokémon)',
				imageLink: 'Pokemon\\717Yveltal.webp'
			},
			{
				creatureId: '718',
				name: 'Zygarde',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pokémon)',
				imageLink: 'Pokemon\\10120Zygarde-complete.webp'
			},
			{
				creatureId: '719',
				name: 'Diancie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Diancie_(Pokémon)',
				imageLink: 'Pokemon\\719Diancie.webp'
			},
			{
				creatureId: '720',
				name: 'Hoopa',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hoopa_(Pokémon)',
				imageLink: 'Pokemon\\720Hoopa.webp'
			},
			{
				creatureId: '721',
				name: 'Volcanion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Volcanion_(Pokémon)',
				imageLink: 'Pokemon\\721Volcanion.webp'
			},
			{
				creatureId: '722',
				name: 'Rowlet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rowlet_(Pokémon)',
				imageLink: 'Pokemon\\722Rowlet.webp'
			},
			{
				creatureId: '723',
				name: 'Dartrix',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dartrix_(Pokémon)',
				imageLink: 'Pokemon\\723Dartrix.webp'
			},
			{
				creatureId: '724',
				name: 'Decidueye',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Decidueye_(Pokémon)',
				imageLink: 'Pokemon\\724Decidueye.webp'
			},
			{
				creatureId: '725',
				name: 'Litten',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Litten_(Pokémon)',
				imageLink: 'Pokemon\\725Litten.webp'
			},
			{
				creatureId: '726',
				name: 'Torracat',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Torracat_(Pokémon)',
				imageLink: 'Pokemon\\726Torracat.webp'
			},
			{
				creatureId: '727',
				name: 'Incineroar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Incineroar_(Pokémon)',
				imageLink: 'Pokemon\\727Incineroar.webp'
			},
			{
				creatureId: '728',
				name: 'Popplio',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Popplio_(Pokémon)',
				imageLink: 'Pokemon\\728Popplio.webp'
			},
			{
				creatureId: '729',
				name: 'Brionne',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Brionne_(Pokémon)',
				imageLink: 'Pokemon\\729Brionne.webp'
			},
			{
				creatureId: '730',
				name: 'Primarina',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Primarina_(Pokémon)',
				imageLink: 'Pokemon\\730Primarina.webp'
			},
			{
				creatureId: '731',
				name: 'Pikipek',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pikipek_(Pokémon)',
				imageLink: 'Pokemon\\731Pikipek.webp'
			},
			{
				creatureId: '732',
				name: 'Trumbeak',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Trumbeak_(Pokémon)',
				imageLink: 'Pokemon\\732Trumbeak.webp'
			},
			{
				creatureId: '733',
				name: 'Toucannon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Toucannon_(Pokémon)',
				imageLink: 'Pokemon\\733Toucannon.webp'
			},
			{
				creatureId: '734',
				name: 'Yungoos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Yungoos_(Pokémon)',
				imageLink: 'Pokemon\\734Yungoos.webp'
			},
			{
				creatureId: '735',
				name: 'Gumshoos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gumshoos_(Pokémon)',
				imageLink: 'Pokemon\\735Gumshoos.webp'
			},
			{
				creatureId: '736',
				name: 'Grubbin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grubbin_(Pokémon)',
				imageLink: 'Pokemon\\736Grubbin.webp'
			},
			{
				creatureId: '737',
				name: 'Charjabug',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Charjabug_(Pokémon)',
				imageLink: 'Pokemon\\737Charjabug.webp'
			},
			{
				creatureId: '738',
				name: 'Vikavolt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Vikavolt_(Pokémon)',
				imageLink: 'Pokemon\\738Vikavolt.webp'
			},
			{
				creatureId: '739',
				name: 'Crabrawler',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Crabrawler_(Pokémon)',
				imageLink: 'Pokemon\\739Crabrawler.webp'
			},
			{
				creatureId: '740',
				name: 'Crabominable',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Crabominable_(Pokémon)',
				imageLink: 'Pokemon\\740Crabominable.webp'
			},
			{
				creatureId: '741',
				name: 'Oricorio',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pokémon)',
				imageLink: 'Pokemon\\741Oricorio-baile.webp'
			},
			{
				creatureId: '742',
				name: 'Cutiefly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cutiefly_(Pokémon)',
				imageLink: 'Pokemon\\742Cutiefly.webp'
			},
			{
				creatureId: '743',
				name: 'Ribombee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ribombee_(Pokémon)',
				imageLink: 'Pokemon\\743Ribombee.webp'
			},
			{
				creatureId: '744',
				name: 'Rockruff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rockruff_(Pokémon)',
				imageLink: 'Pokemon\\744Rockruff.webp'
			},
			{
				creatureId: '745',
				name: 'Lycanroc',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pokémon)',
				imageLink: 'Pokemon\\745Lycanroc-midday.webp'
			},
			{
				creatureId: '746',
				name: 'Wishiwashi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pokémon)',
				imageLink: 'Pokemon\\746Wishiwashi-solo.webp'
			},
			{
				creatureId: '747',
				name: 'Mareanie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mareanie_(Pokémon)',
				imageLink: 'Pokemon\\747Mareanie.webp'
			},
			{
				creatureId: '748',
				name: 'Toxapex',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Toxapex_(Pokémon)',
				imageLink: 'Pokemon\\748Toxapex.webp'
			},
			{
				creatureId: '749',
				name: 'Mudbray',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mudbray_(Pokémon)',
				imageLink: 'Pokemon\\749Mudbray.webp'
			},
			{
				creatureId: '750',
				name: 'Mudsdale',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mudsdale_(Pokémon)',
				imageLink: 'Pokemon\\750Mudsdale.webp'
			},
			{
				creatureId: '751',
				name: 'Dewpider',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dewpider_(Pokémon)',
				imageLink: 'Pokemon\\751Dewpider.webp'
			},
			{
				creatureId: '752',
				name: 'Araquanid',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Araquanid_(Pokémon)',
				imageLink: 'Pokemon\\752Araquanid.webp'
			},
			{
				creatureId: '753',
				name: 'Fomantis',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fomantis_(Pokémon)',
				imageLink: 'Pokemon\\753Fomantis.webp'
			},
			{
				creatureId: '754',
				name: 'Lurantis',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lurantis_(Pokémon)',
				imageLink: 'Pokemon\\754Lurantis.webp'
			},
			{
				creatureId: '755',
				name: 'Morelull',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Morelull_(Pokémon)',
				imageLink: 'Pokemon\\755Morelull.webp'
			},
			{
				creatureId: '756',
				name: 'Shiinotic',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shiinotic_(Pokémon)',
				imageLink: 'Pokemon\\756Shiinotic.webp'
			},
			{
				creatureId: '757',
				name: 'Salandit',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Salandit_(Pokémon)',
				imageLink: 'Pokemon\\757Salandit.webp'
			},
			{
				creatureId: '758',
				name: 'Salazzle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Salazzle_(Pokémon)',
				imageLink: 'Pokemon\\758Salazzle.webp'
			},
			{
				creatureId: '759',
				name: 'Stufful',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Stufful_(Pokémon)',
				imageLink: 'Pokemon\\759Stufful.webp'
			},
			{
				creatureId: '760',
				name: 'Bewear',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bewear_(Pokémon)',
				imageLink: 'Pokemon\\760Bewear.webp'
			},
			{
				creatureId: '761',
				name: 'Bounsweet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bounsweet_(Pokémon)',
				imageLink: 'Pokemon\\761Bounsweet.webp'
			},
			{
				creatureId: '762',
				name: 'Steenee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Steenee_(Pokémon)',
				imageLink: 'Pokemon\\762Steenee.webp'
			},
			{
				creatureId: '763',
				name: 'Tsareena',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tsareena_(Pokémon)',
				imageLink: 'Pokemon\\763Tsareena.webp'
			},
			{
				creatureId: '764',
				name: 'Comfey',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Comfey_(Pokémon)',
				imageLink: 'Pokemon\\764Comfey.webp'
			},
			{
				creatureId: '765',
				name: 'Oranguru',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Oranguru_(Pokémon)',
				imageLink: 'Pokemon\\765Oranguru.webp'
			},
			{
				creatureId: '766',
				name: 'Passimian',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Passimian_(Pokémon)',
				imageLink: 'Pokemon\\766Passimian.webp'
			},
			{
				creatureId: '767',
				name: 'Wimpod',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wimpod_(Pokémon)',
				imageLink: 'Pokemon\\767Wimpod.webp'
			},
			{
				creatureId: '768',
				name: 'Golisopod',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Golisopod_(Pokémon)',
				imageLink: 'Pokemon\\768Golisopod.webp'
			},
			{
				creatureId: '769',
				name: 'Sandygast',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sandygast_(Pokémon)',
				imageLink: 'Pokemon\\769Sandygast.webp'
			},
			{
				creatureId: '770',
				name: 'Palossand',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Palossand_(Pokémon)',
				imageLink: 'Pokemon\\770Palossand.webp'
			},
			{
				creatureId: '771',
				name: 'Pyukumuku',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pyukumuku_(Pokémon)',
				imageLink: 'Pokemon\\771Pyukumuku.webp'
			},
			{
				creatureId: '772',
				name: 'Type: Null',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Type:_Null_(Pokémon)',
				imageLink: 'Pokemon\\772Type-null.webp'
			},
			{
				creatureId: '773',
				name: 'Silvally',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Silvally_(Pokémon)',
				imageLink: 'Pokemon\\773Silvally.webp'
			},
			{
				creatureId: '774',
				name: 'Minior',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Minior_(Pokémon)',
				imageLink: 'Pokemon\\774Minior-red-meteor.webp'
			},
			{
				creatureId: '775',
				name: 'Komala',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Komala_(Pokémon)',
				imageLink: 'Pokemon\\775Komala.webp'
			},
			{
				creatureId: '776',
				name: 'Turtonator',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Turtonator_(Pokémon)',
				imageLink: 'Pokemon\\776Turtonator.webp'
			},
			{
				creatureId: '777',
				name: 'Togedemaru',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Togedemaru_(Pokémon)',
				imageLink: 'Pokemon\\777Togedemaru.webp'
			},
			{
				creatureId: '778',
				name: 'Mimikyu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mimikyu_(Pokémon)',
				imageLink: 'Pokemon\\778Mimikyu-disguised.webp'
			},
			{
				creatureId: '779',
				name: 'Bruxish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bruxish_(Pokémon)',
				imageLink: 'Pokemon\\779Bruxish.webp'
			},
			{
				creatureId: '780',
				name: 'Drampa',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drampa_(Pokémon)',
				imageLink: 'Pokemon\\780Drampa.webp'
			},
			{
				creatureId: '781',
				name: 'Dhelmise',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dhelmise_(Pokémon)',
				imageLink: 'Pokemon\\781Dhelmise.webp'
			},
			{
				creatureId: '782',
				name: 'Jangmo-o',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Jangmo-o_(Pokémon)',
				imageLink: 'Pokemon\\782Jangmo-o.webp'
			},
			{
				creatureId: '783',
				name: 'Hakamo-o',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hakamo-o_(Pokémon)',
				imageLink: 'Pokemon\\783Hakamo-o.webp'
			},
			{
				creatureId: '784',
				name: 'Kommo-o',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kommo-o_(Pokémon)',
				imageLink: 'Pokemon\\784Kommo-o.webp'
			},
			{
				creatureId: '785',
				name: 'Tapu Koko',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pokémon)',
				imageLink: 'Pokemon\\785Tapu-koko.webp'
			},
			{
				creatureId: '786',
				name: 'Tapu Lele',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tapu_Lele_(Pokémon)',
				imageLink: 'Pokemon\\786Tapu-lele.webp'
			},
			{
				creatureId: '787',
				name: 'Tapu Bulu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tapu_Bulu_(Pokémon)',
				imageLink: 'Pokemon\\787Tapu-bulu.webp'
			},
			{
				creatureId: '788',
				name: 'Tapu Fini',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tapu_Fini_(Pokémon)',
				imageLink: 'Pokemon\\788Tapu-fini.webp'
			},
			{
				creatureId: '789',
				name: 'Cosmog',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cosmog_(Pokémon)',
				imageLink: 'Pokemon\\789Cosmog.webp'
			},
			{
				creatureId: '790',
				name: 'Cosmoem',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cosmoem_(Pokémon)',
				imageLink: 'Pokemon\\790Cosmoem.webp'
			},
			{
				creatureId: '791',
				name: 'Solgaleo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Solgaleo_(Pokémon)',
				imageLink: 'Pokemon\\791Solgaleo.webp'
			},
			{
				creatureId: '792',
				name: 'Lunala',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lunala_(Pokémon)',
				imageLink: 'Pokemon\\792Lunala.webp'
			},
			{
				creatureId: '793',
				name: 'Nihilego',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nihilego_(Pokémon)',
				imageLink: 'Pokemon\\793Nihilego.webp'
			},
			{
				creatureId: '794',
				name: 'Buzzwole',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Buzzwole_(Pokémon)',
				imageLink: 'Pokemon\\794Buzzwole.webp'
			},
			{
				creatureId: '795',
				name: 'Pheromosa',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pheromosa_(Pokémon)',
				imageLink: 'Pokemon\\795Pheromosa.webp'
			},
			{
				creatureId: '796',
				name: 'Xurkitree',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Xurkitree_(Pokémon)',
				imageLink: 'Pokemon\\796Xurkitree.webp'
			},
			{
				creatureId: '797',
				name: 'Celesteela',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Celesteela_(Pokémon)',
				imageLink: 'Pokemon\\797Celesteela.webp'
			},
			{
				creatureId: '798',
				name: 'Kartana',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kartana_(Pokémon)',
				imageLink: 'Pokemon\\798Kartana.webp'
			},
			{
				creatureId: '799',
				name: 'Guzzlord',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Guzzlord_(Pokémon)',
				imageLink: 'Pokemon\\799Guzzlord.webp'
			},
			{
				creatureId: '800',
				name: 'Necrozma',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pokémon)',
				imageLink: 'Pokemon\\800Necrozma.webp'
			},
			{
				creatureId: '801',
				name: 'Magearna',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Magearna_(Pokémon)',
				imageLink: 'Pokemon\\801Magearna.webp'
			},
			{
				creatureId: '802',
				name: 'Marshadow',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Marshadow_(Pokémon)',
				imageLink: 'Pokemon\\802Marshadow.webp'
			},
			{
				creatureId: '803',
				name: 'Poipole',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Poipole_(Pokémon)',
				imageLink: 'Pokemon\\803Poipole.webp'
			},
			{
				creatureId: '804',
				name: 'Naganadel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Naganadel_(Pokémon)',
				imageLink: 'Pokemon\\804Naganadel.webp'
			},
			{
				creatureId: '805',
				name: 'Stakataka',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Stakataka_(Pokémon)',
				imageLink: 'Pokemon\\805Stakataka.webp'
			},
			{
				creatureId: '806',
				name: 'Blacephalon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Blacephalon_(Pokémon)',
				imageLink: 'Pokemon\\806Blacephalon.webp'
			},
			{
				creatureId: '807',
				name: 'Zeraora',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zeraora_(Pokémon)',
				imageLink: 'Pokemon\\807Zeraora.webp'
			},
			{
				creatureId: '808',
				name: 'Meltan',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Meltan_(Pokémon)',
				imageLink: 'Pokemon\\808Meltan.webp'
			},
			{
				creatureId: '809',
				name: 'Melmetal',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Melmetal_(Pokémon)',
				imageLink: 'Pokemon\\809Melmetal.webp'
			},
			{
				creatureId: '810',
				name: 'Grookey',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grookey_(Pokémon)',
				imageLink: 'Pokemon\\810Grookey.webp'
			},
			{
				creatureId: '811',
				name: 'Thwackey',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Thwackey_(Pokémon)',
				imageLink: 'Pokemon\\811Thwackey.webp'
			},
			{
				creatureId: '812',
				name: 'Rillaboom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rillaboom_(Pokémon)',
				imageLink: 'Pokemon\\812Rillaboom.webp'
			},
			{
				creatureId: '813',
				name: 'Scorbunny',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scorbunny_(Pokémon)',
				imageLink: 'Pokemon\\813Scorbunny.webp'
			},
			{
				creatureId: '814',
				name: 'Raboot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Raboot_(Pokémon)',
				imageLink: 'Pokemon\\814Raboot.webp'
			},
			{
				creatureId: '815',
				name: 'Cinderace',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cinderace_(Pokémon)',
				imageLink: 'Pokemon\\815Cinderace.webp'
			},
			{
				creatureId: '816',
				name: 'Sobble',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sobble_(Pokémon)',
				imageLink: 'Pokemon\\816Sobble.webp'
			},
			{
				creatureId: '817',
				name: 'Drizzile',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drizzile_(Pokémon)',
				imageLink: 'Pokemon\\817Drizzile.webp'
			},
			{
				creatureId: '818',
				name: 'Inteleon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Inteleon_(Pokémon)',
				imageLink: 'Pokemon\\818Inteleon.webp'
			},
			{
				creatureId: '819',
				name: 'Skwovet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skwovet_(Pokémon)',
				imageLink: 'Pokemon\\819Skwovet.webp'
			},
			{
				creatureId: '820',
				name: 'Greedent',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Greedent_(Pokémon)',
				imageLink: 'Pokemon\\820Greedent.webp'
			},
			{
				creatureId: '821',
				name: 'Rookidee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rookidee_(Pokémon)',
				imageLink: 'Pokemon\\821Rookidee.webp'
			},
			{
				creatureId: '822',
				name: 'Corvisquire',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Corvisquire_(Pokémon)',
				imageLink: 'Pokemon\\822Corvisquire.webp'
			},
			{
				creatureId: '823',
				name: 'Corviknight',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Corviknight_(Pokémon)',
				imageLink: 'Pokemon\\823Corviknight.webp'
			},
			{
				creatureId: '824',
				name: 'Blipbug',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Blipbug_(Pokémon)',
				imageLink: 'Pokemon\\824Blipbug.webp'
			},
			{
				creatureId: '825',
				name: 'Dottler',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dottler_(Pokémon)',
				imageLink: 'Pokemon\\825Dottler.webp'
			},
			{
				creatureId: '826',
				name: 'Orbeetle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Orbeetle_(Pokémon)',
				imageLink: 'Pokemon\\826Orbeetle.webp'
			},
			{
				creatureId: '827',
				name: 'Nickit',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nickit_(Pokémon)',
				imageLink: 'Pokemon\\827Nickit.webp'
			},
			{
				creatureId: '828',
				name: 'Thievul',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Thievul_(Pokémon)',
				imageLink: 'Pokemon\\828Thievul.webp'
			},
			{
				creatureId: '829',
				name: 'Gossifleur',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gossifleur_(Pokémon)',
				imageLink: 'Pokemon\\829Gossifleur.webp'
			},
			{
				creatureId: '830',
				name: 'Eldegoss',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Eldegoss_(Pokémon)',
				imageLink: 'Pokemon\\830Eldegoss.webp'
			},
			{
				creatureId: '831',
				name: 'Wooloo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wooloo_(Pokémon)',
				imageLink: 'Pokemon\\831Wooloo.webp'
			},
			{
				creatureId: '832',
				name: 'Dubwool',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dubwool_(Pokémon)',
				imageLink: 'Pokemon\\832Dubwool.webp'
			},
			{
				creatureId: '833',
				name: 'Chewtle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chewtle_(Pokémon)',
				imageLink: 'Pokemon\\833Chewtle.webp'
			},
			{
				creatureId: '834',
				name: 'Drednaw',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drednaw_(Pokémon)',
				imageLink: 'Pokemon\\834Drednaw.webp'
			},
			{
				creatureId: '835',
				name: 'Yamper',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Yamper_(Pokémon)',
				imageLink: 'Pokemon\\835Yamper.webp'
			},
			{
				creatureId: '836',
				name: 'Boltund',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Boltund_(Pokémon)',
				imageLink: 'Pokemon\\836Boltund.webp'
			},
			{
				creatureId: '837',
				name: 'Rolycoly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rolycoly_(Pokémon)',
				imageLink: 'Pokemon\\837Rolycoly.webp'
			},
			{
				creatureId: '838',
				name: 'Carkol',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Carkol_(Pokémon)',
				imageLink: 'Pokemon\\838Carkol.webp'
			},
			{
				creatureId: '839',
				name: 'Coalossal',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Coalossal_(Pokémon)',
				imageLink: 'Pokemon\\839Coalossal.webp'
			},
			{
				creatureId: '840',
				name: 'Applin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Applin_(Pokémon)',
				imageLink: 'Pokemon\\840Applin.webp'
			},
			{
				creatureId: '841',
				name: 'Flapple',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flapple_(Pokémon)',
				imageLink: 'Pokemon\\841Flapple.webp'
			},
			{
				creatureId: '842',
				name: 'Appletun',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Appletun_(Pokémon)',
				imageLink: 'Pokemon\\842Appletun.webp'
			},
			{
				creatureId: '843',
				name: 'Silicobra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Silicobra_(Pokémon)',
				imageLink: 'Pokemon\\843Silicobra.webp'
			},
			{
				creatureId: '844',
				name: 'Sandaconda',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sandaconda_(Pokémon)',
				imageLink: 'Pokemon\\844Sandaconda.webp'
			},
			{
				creatureId: '845',
				name: 'Cramorant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cramorant_(Pokémon)',
				imageLink: 'Pokemon\\845Cramorant.webp'
			},
			{
				creatureId: '846',
				name: 'Arrokuda',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arrokuda_(Pokémon)',
				imageLink: 'Pokemon\\846Arrokuda.webp'
			},
			{
				creatureId: '847',
				name: 'Barraskewda',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Barraskewda_(Pokémon)',
				imageLink: 'Pokemon\\847Barraskewda.webp'
			},
			{
				creatureId: '848',
				name: 'Toxel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Toxel_(Pokémon)',
				imageLink: 'Pokemon\\848Toxel.webp'
			},
			{
				creatureId: '849',
				name: 'Toxtricity',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Toxtricity_(Pokémon)',
				imageLink: 'Pokemon\\849Toxtricity-amped.webp'
			},
			{
				creatureId: '850',
				name: 'Sizzlipede',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sizzlipede_(Pokémon)',
				imageLink: 'Pokemon\\850Sizzlipede.webp'
			},
			{
				creatureId: '851',
				name: 'Centiskorch',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Centiskorch_(Pokémon)',
				imageLink: 'Pokemon\\851Centiskorch.webp'
			},
			{
				creatureId: '852',
				name: 'Clobbopus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Clobbopus_(Pokémon)',
				imageLink: 'Pokemon\\852Clobbopus.webp'
			},
			{
				creatureId: '853',
				name: 'Grapploct',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grapploct_(Pokémon)',
				imageLink: 'Pokemon\\853Grapploct.webp'
			},
			{
				creatureId: '854',
				name: 'Sinistea',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sinistea_(Pokémon)',
				imageLink: 'Pokemon\\854Sinistea.webp'
			},
			{
				creatureId: '855',
				name: 'Polteageist',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Polteageist_(Pokémon)',
				imageLink: 'Pokemon\\855Polteageist.webp'
			},
			{
				creatureId: '856',
				name: 'Hatenna',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hatenna_(Pokémon)',
				imageLink: 'Pokemon\\856Hatenna.webp'
			},
			{
				creatureId: '857',
				name: 'Hattrem',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hattrem_(Pokémon)',
				imageLink: 'Pokemon\\857Hattrem.webp'
			},
			{
				creatureId: '858',
				name: 'Hatterene',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hatterene_(Pokémon)',
				imageLink: 'Pokemon\\858Hatterene.webp'
			},
			{
				creatureId: '859',
				name: 'Impidimp',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Impidimp_(Pokémon)',
				imageLink: 'Pokemon\\859Impidimp.webp'
			},
			{
				creatureId: '860',
				name: 'Morgrem',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Morgrem_(Pokémon)',
				imageLink: 'Pokemon\\860Morgrem.webp'
			},
			{
				creatureId: '861',
				name: 'Grimmsnarl',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grimmsnarl_(Pokémon)',
				imageLink: 'Pokemon\\861Grimmsnarl.webp'
			},
			{
				creatureId: '862',
				name: 'Obstagoon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Obstagoon_(Pokémon)',
				imageLink: 'Pokemon\\862Obstagoon.webp'
			},
			{
				creatureId: '863',
				name: 'Perrserker',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Perrserker_(Pokémon)',
				imageLink: 'Pokemon\\863Perrserker.webp'
			},
			{
				creatureId: '864',
				name: 'Cursola',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cursola_(Pokémon)',
				imageLink: 'Pokemon\\864Cursola.webp'
			},
			{
				creatureId: '865',
				name: 'Sirfetchd',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sirfetchd_(Pokémon)',
				imageLink: 'Pokemon\\865Sirfetchd.webp'
			},
			{
				creatureId: '866',
				name: 'Mr. Rime',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mr._Rime_(Pokémon)',
				imageLink: 'Pokemon\\866Mr-rime.webp'
			},
			{
				creatureId: '867',
				name: 'Runerigus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Runerigus_(Pokémon)',
				imageLink: 'Pokemon\\867Runerigus.webp'
			},
			{
				creatureId: '868',
				name: 'Milcery',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Milcery_(Pokémon)',
				imageLink: 'Pokemon\\868Milcery.webp'
			},
			{
				creatureId: '869',
				name: 'Alcremie',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Alcremie_(Pokémon)',
				imageLink: 'Pokemon\\869Alcremie.webp'
			},
			{
				creatureId: '870',
				name: 'Falinks',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Falinks_(Pokémon)',
				imageLink: 'Pokemon\\870Falinks.webp'
			},
			{
				creatureId: '871',
				name: 'Pincurchin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pincurchin_(Pokémon)',
				imageLink: 'Pokemon\\871Pincurchin.webp'
			},
			{
				creatureId: '872',
				name: 'Snom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Snom_(Pokémon)',
				imageLink: 'Pokemon\\872Snom.webp'
			},
			{
				creatureId: '873',
				name: 'Frosmoth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Frosmoth_(Pokémon)',
				imageLink: 'Pokemon\\873Frosmoth.webp'
			},
			{
				creatureId: '874',
				name: 'Stonjourner',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Stonjourner_(Pokémon)',
				imageLink: 'Pokemon\\874Stonjourner.webp'
			},
			{
				creatureId: '875',
				name: 'Eiscue',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Eiscue_(Pokémon)',
				imageLink: 'Pokemon\\875Eiscue-ice.webp'
			},
			{
				creatureId: '876',
				name: 'Indeedee',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Indeedee_(Pokémon)',
				imageLink: 'Pokemon\\876Indeedee-male.webp'
			},
			{
				creatureId: '877',
				name: 'Morpeko',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Morpeko_(Pokémon)',
				imageLink: 'Pokemon\\877Morpeko-full-belly.webp'
			},
			{
				creatureId: '878',
				name: 'Cufant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cufant_(Pokémon)',
				imageLink: 'Pokemon\\878Cufant.webp'
			},
			{
				creatureId: '879',
				name: 'Copperajah',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Copperajah_(Pokémon)',
				imageLink: 'Pokemon\\879Copperajah.webp'
			},
			{
				creatureId: '880',
				name: 'Dracozolt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dracozolt_(Pokémon)',
				imageLink: 'Pokemon\\880Dracozolt.webp'
			},
			{
				creatureId: '881',
				name: 'Arctozolt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arctozolt_(Pokémon)',
				imageLink: 'Pokemon\\881Arctozolt.webp'
			},
			{
				creatureId: '882',
				name: 'Dracovish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dracovish_(Pokémon)',
				imageLink: 'Pokemon\\882Dracovish.webp'
			},
			{
				creatureId: '883',
				name: 'Arctovish',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arctovish_(Pokémon)',
				imageLink: 'Pokemon\\883Arctovish.webp'
			},
			{
				creatureId: '884',
				name: 'Duraludon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Duraludon_(Pokémon)',
				imageLink: 'Pokemon\\884Duraludon.webp'
			},
			{
				creatureId: '885',
				name: 'Dreepy',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dreepy_(Pokémon)',
				imageLink: 'Pokemon\\885Dreepy.webp'
			},
			{
				creatureId: '886',
				name: 'Drakloak',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Drakloak_(Pokémon)',
				imageLink: 'Pokemon\\886Drakloak.webp'
			},
			{
				creatureId: '887',
				name: 'Dragapult',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dragapult_(Pokémon)',
				imageLink: 'Pokemon\\887Dragapult.webp'
			},
			{
				creatureId: '888',
				name: 'Zacian',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zacian_(Pokémon)',
				imageLink: 'Pokemon\\888Zacian.webp'
			},
			{
				creatureId: '889',
				name: 'Zamazenta',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zamazenta_(Pokémon)',
				imageLink: 'Pokemon\\889Zamazenta.webp'
			},
			{
				creatureId: '890',
				name: 'Eternatus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Eternatus_(Pokémon)',
				imageLink: 'Pokemon\\890Eternatus.webp'
			},
			{
				creatureId: '891',
				name: 'Kubfu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kubfu_(Pokémon)',
				imageLink: 'Pokemon\\891Kubfu.webp'
			},
			{
				creatureId: '892',
				name: 'Urshifu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Urshifu_(Pokémon)',
				imageLink: 'Pokemon\\892Urshifu-single-strike.webp'
			},
			{
				creatureId: '893',
				name: 'Zarude',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Zarude_(Pokémon)',
				imageLink: 'Pokemon\\893Zarude.webp'
			},
			{
				creatureId: '894',
				name: 'Regieleki',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Regieleki_(Pokémon)',
				imageLink: 'Pokemon\\894Regieleki.webp'
			},
			{
				creatureId: '895',
				name: 'Regidrago',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Regidrago_(Pokémon)',
				imageLink: 'Pokemon\\895Regidrago.webp'
			},
			{
				creatureId: '896',
				name: 'Glastrier',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Glastrier_(Pokémon)',
				imageLink: 'Pokemon\\896Glastrier.webp'
			},
			{
				creatureId: '897',
				name: 'Spectrier',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spectrier_(Pokémon)',
				imageLink: 'Pokemon\\897Spectrier.webp'
			},
			{
				creatureId: '898',
				name: 'Calyrex',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Calyrex_(Pokémon)',
				imageLink: 'Pokemon\\898Calyrex.webp'
			},
			{
				creatureId: '899',
				name: 'Wyrdeer',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wyrdeer_(Pokémon)',
				imageLink: 'Pokemon\\899Wyrdeer.webp'
			},
			{
				creatureId: '900',
				name: 'Kleavor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kleavor_(Pokémon)',
				imageLink: 'Pokemon\\900Kleavor.webp'
			},
			{
				creatureId: '901',
				name: 'Ursaluna',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ursaluna_(Pokémon)',
				imageLink: 'Pokemon\\901Ursaluna.webp'
			},
			{
				creatureId: '902',
				name: 'Basculegion',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Basculegion_(Pokémon)',
				imageLink: 'Pokemon\\902Basculegion-male.webp'
			},
			{
				creatureId: '903',
				name: 'Sneasler',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sneasler_(Pokémon)',
				imageLink: 'Pokemon\\903Sneasler.webp'
			},
			{
				creatureId: '904',
				name: 'Overqwil',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Overqwil_(Pokémon)',
				imageLink: 'Pokemon\\904Overqwil.webp'
			},
			{
				creatureId: '905',
				name: 'Enamorus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Enamorus_(Pokémon)',
				imageLink: 'Pokemon\\905Enamorus-incarnate.webp'
			},
			{
				creatureId: '906',
				name: 'Sprigatito',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sprigatito_(Pokémon)',
				imageLink: 'Pokemon\\906Sprigatito.webp'
			},
			{
				creatureId: '907',
				name: 'Floragato',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Floragato_(Pokémon)',
				imageLink: 'Pokemon\\907Floragato.webp'
			},
			{
				creatureId: '908',
				name: 'Meowscarada',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Meowscarada_(Pokémon)',
				imageLink: 'Pokemon\\908Meowscarada.webp'
			},
			{
				creatureId: '909',
				name: 'Fuecoco',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fuecoco_(Pokémon)',
				imageLink: 'Pokemon\\909Fuecoco.webp'
			},
			{
				creatureId: '910',
				name: 'Crocalor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Crocalor_(Pokémon)',
				imageLink: 'Pokemon\\910Crocalor.webp'
			},
			{
				creatureId: '911',
				name: 'Skeledirge',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Skeledirge_(Pokémon)',
				imageLink: 'Pokemon\\911Skeledirge.webp'
			},
			{
				creatureId: '912',
				name: 'Quaxly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Quaxly_(Pokémon)',
				imageLink: 'Pokemon\\912Quaxly.webp'
			},
			{
				creatureId: '913',
				name: 'Quaxwell',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Quaxwell_(Pokémon)',
				imageLink: 'Pokemon\\913Quaxwell.webp'
			},
			{
				creatureId: '914',
				name: 'Quaquaval',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Quaquaval_(Pokémon)',
				imageLink: 'Pokemon\\914Quaquaval.webp'
			},
			{
				creatureId: '915',
				name: 'Lechonk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lechonk_(Pokémon)',
				imageLink: 'Pokemon\\915Lechonk.webp'
			},
			{
				creatureId: '916',
				name: 'Oinkologne',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Oinkologne_(Pokémon)',
				imageLink: 'Pokemon\\916Oinkologne.webp'
			},
			{
				creatureId: '917',
				name: 'Tarountula',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tarountula_(Pokémon)',
				imageLink: 'Pokemon\\917Tarountula.webp'
			},
			{
				creatureId: '918',
				name: 'Spidops',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Spidops_(Pokémon)',
				imageLink: 'Pokemon\\918Spidops.webp'
			},
			{
				creatureId: '919',
				name: 'Nymble',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nymble_(Pokémon)',
				imageLink: 'Pokemon\\919Nymble.webp'
			},
			{
				creatureId: '920',
				name: 'Lokix',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Lokix_(Pokémon)',
				imageLink: 'Pokemon\\920Lokix.webp'
			},
			{
				creatureId: '921',
				name: 'Pawmi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pawmi_(Pokémon)',
				imageLink: 'Pokemon\\921Pawmi.webp'
			},
			{
				creatureId: '922',
				name: 'Pawmo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pawmo_(Pokémon)',
				imageLink: 'Pokemon\\922Pawmo.webp'
			},
			{
				creatureId: '923',
				name: 'Pawmot',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pawmot_(Pokémon)',
				imageLink: 'Pokemon\\923Pawmot.webp'
			},
			{
				creatureId: '924',
				name: 'Tandemaus',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tandemaus_(Pokémon)',
				imageLink: 'Pokemon\\924Tandemaus.webp'
			},
			{
				creatureId: '925',
				name: 'Maushold',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Maushold_(Pokémon)',
				imageLink: 'Pokemon\\925Maushold.webp'
			},
			{
				creatureId: '926',
				name: 'Fidough',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fidough_(Pokémon)',
				imageLink: 'Pokemon\\926Fidough.webp'
			},
			{
				creatureId: '927',
				name: 'Dachsbun',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dachsbun_(Pokémon)',
				imageLink: 'Pokemon\\927Dachsbun.webp'
			},
			{
				creatureId: '928',
				name: 'Smoliv',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Smoliv_(Pokémon)',
				imageLink: 'Pokemon\\928Smoliv.webp'
			},
			{
				creatureId: '929',
				name: 'Dolliv',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dolliv_(Pokémon)',
				imageLink: 'Pokemon\\929Dolliv.webp'
			},
			{
				creatureId: '930',
				name: 'Arboliva',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arboliva_(Pokémon)',
				imageLink: 'Pokemon\\930Arboliva.webp'
			},
			{
				creatureId: '931',
				name: 'Squawkabilly',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Squawkabilly_(Pokémon)',
				imageLink: 'Pokemon\\931Squawkabilly.webp'
			},
			{
				creatureId: '932',
				name: 'Nacli',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Nacli_(Pokémon)',
				imageLink: 'Pokemon\\932Nacli.webp'
			},
			{
				creatureId: '933',
				name: 'Naclstack',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Naclstack_(Pokémon)',
				imageLink: 'Pokemon\\933Naclstack.webp'
			},
			{
				creatureId: '934',
				name: 'Garganacl',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Garganacl_(Pokémon)',
				imageLink: 'Pokemon\\934Garganacl.webp'
			},
			{
				creatureId: '935',
				name: 'Charcadet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Charcadet_(Pokémon)',
				imageLink: 'Pokemon\\935Charcadet.webp'
			},
			{
				creatureId: '936',
				name: 'Armarouge',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Armarouge_(Pokémon)',
				imageLink: 'Pokemon\\936Armarouge.webp'
			},
			{
				creatureId: '937',
				name: 'Ceruledge',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ceruledge_(Pokémon)',
				imageLink: 'Pokemon\\937Ceruledge.webp'
			},
			{
				creatureId: '938',
				name: 'Tadbulb',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tadbulb_(Pokémon)',
				imageLink: 'Pokemon\\938Tadbulb.webp'
			},
			{
				creatureId: '939',
				name: 'Bellibolt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bellibolt_(Pokémon)',
				imageLink: 'Pokemon\\939Bellibolt.webp'
			},
			{
				creatureId: '940',
				name: 'Wattrel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wattrel_(Pokémon)',
				imageLink: 'Pokemon\\940Wattrel.webp'
			},
			{
				creatureId: '941',
				name: 'Kilowattrel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kilowattrel_(Pokémon)',
				imageLink: 'Pokemon\\941Kilowattrel.webp'
			},
			{
				creatureId: '942',
				name: 'Maschiff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Maschiff_(Pokémon)',
				imageLink: 'Pokemon\\942Maschiff.webp'
			},
			{
				creatureId: '943',
				name: 'Mabosstiff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Mabosstiff_(Pokémon)',
				imageLink: 'Pokemon\\943Mabosstiff.webp'
			},
			{
				creatureId: '944',
				name: 'Shroodle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Shroodle_(Pokémon)',
				imageLink: 'Pokemon\\944Shroodle.webp'
			},
			{
				creatureId: '945',
				name: 'Grafaiai',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Grafaiai_(Pokémon)',
				imageLink: 'Pokemon\\945Grafaiai.webp'
			},
			{
				creatureId: '946',
				name: 'Bramblin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bramblin_(Pokémon)',
				imageLink: 'Pokemon\\946Bramblin.webp'
			},
			{
				creatureId: '947',
				name: 'Brambleghast',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Brambleghast_(Pokémon)',
				imageLink: 'Pokemon\\947Brambleghast.webp'
			},
			{
				creatureId: '948',
				name: 'Toedscool',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Toedscool_(Pokémon)',
				imageLink: 'Pokemon\\948Toedscool.webp'
			},
			{
				creatureId: '949',
				name: 'Toedscruel',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Toedscruel_(Pokémon)',
				imageLink: 'Pokemon\\949Toedscruel.webp'
			},
			{
				creatureId: '950',
				name: 'Klawf',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Klawf_(Pokémon)',
				imageLink: 'Pokemon\\950Klawf.webp'
			},
			{
				creatureId: '951',
				name: 'Capsakid',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Capsakid_(Pokémon)',
				imageLink: 'Pokemon\\951Capsakid.webp'
			},
			{
				creatureId: '952',
				name: 'Scovillain',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scovillain_(Pokémon)',
				imageLink: 'Pokemon\\952Scovillain.webp'
			},
			{
				creatureId: '953',
				name: 'Rellor',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rellor_(Pokémon)',
				imageLink: 'Pokemon\\953Rellor.webp'
			},
			{
				creatureId: '954',
				name: 'Rabsca',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Rabsca_(Pokémon)',
				imageLink: 'Pokemon\\954Rabsca.webp'
			},
			{
				creatureId: '955',
				name: 'Flittle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flittle_(Pokémon)',
				imageLink: 'Pokemon\\955Flittle.webp'
			},
			{
				creatureId: '956',
				name: 'Espathra',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Espathra_(Pokémon)',
				imageLink: 'Pokemon\\956Espathra.webp'
			},
			{
				creatureId: '957',
				name: 'Tinkatink',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tinkatink_(Pokémon)',
				imageLink: 'Pokemon\\957Tinkatink.webp'
			},
			{
				creatureId: '958',
				name: 'Tinkatuff',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tinkatuff_(Pokémon)',
				imageLink: 'Pokemon\\958Tinkatuff.webp'
			},
			{
				creatureId: '959',
				name: 'Tinkaton',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tinkaton_(Pokémon)',
				imageLink: 'Pokemon\\959Tinkaton.webp'
			},
			{
				creatureId: '960',
				name: 'Wiglett',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wiglett_(Pokémon)',
				imageLink: 'Pokemon\\960Wiglett.webp'
			},
			{
				creatureId: '961',
				name: 'Wugtrio',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wugtrio_(Pokémon)',
				imageLink: 'Pokemon\\961Wugtrio.webp'
			},
			{
				creatureId: '962',
				name: 'Bombirdier',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Bombirdier_(Pokémon)',
				imageLink: 'Pokemon\\962Bombirdier.webp'
			},
			{
				creatureId: '963',
				name: 'Finizen',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Finizen_(Pokémon)',
				imageLink: 'Pokemon\\963Finizen.webp'
			},
			{
				creatureId: '964',
				name: 'Palafin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Palafin_(Pokémon)',
				imageLink: 'Pokemon\\964Palafin.webp'
			},
			{
				creatureId: '965',
				name: 'Varoom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Varoom_(Pokémon)',
				imageLink: 'Pokemon\\965Varoom.webp'
			},
			{
				creatureId: '966',
				name: 'Revavroom',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Revavroom_(Pokémon)',
				imageLink: 'Pokemon\\966Revavroom.webp'
			},
			{
				creatureId: '967',
				name: 'Cyclizar',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cyclizar_(Pokémon)',
				imageLink: 'Pokemon\\967Cyclizar.webp'
			},
			{
				creatureId: '968',
				name: 'Orthworm',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Orthworm_(Pokémon)',
				imageLink: 'Pokemon\\968Orthworm.webp'
			},
			{
				creatureId: '969',
				name: 'Glimmet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Glimmet_(Pokémon)',
				imageLink: 'Pokemon\\969Glimmet.webp'
			},
			{
				creatureId: '970',
				name: 'Glimmora',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Glimmora_(Pokémon)',
				imageLink: 'Pokemon\\970Glimmora.webp'
			},
			{
				creatureId: '971',
				name: 'Greavard',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Greavard_(Pokémon)',
				imageLink: 'Pokemon\\971Greavard.webp'
			},
			{
				creatureId: '972',
				name: 'Houndstone',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Houndstone_(Pokémon)',
				imageLink: 'Pokemon\\972Houndstone.webp'
			},
			{
				creatureId: '973',
				name: 'Flamigo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flamigo_(Pokémon)',
				imageLink: 'Pokemon\\973Flamigo.webp'
			},
			{
				creatureId: '974',
				name: 'Cetoddle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cetoddle_(Pokémon)',
				imageLink: 'Pokemon\\974Cetoddle.webp'
			},
			{
				creatureId: '975',
				name: 'Cetitan',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Cetitan_(Pokémon)',
				imageLink: 'Pokemon\\975Cetitan.webp'
			},
			{
				creatureId: '976',
				name: 'Veluza',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Veluza_(Pokémon)',
				imageLink: 'Pokemon\\976Veluza.webp'
			},
			{
				creatureId: '977',
				name: 'Dondozo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dondozo_(Pokémon)',
				imageLink: 'Pokemon\\977Dondozo.webp'
			},
			{
				creatureId: '978',
				name: 'Tatsugiri',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Tatsugiri_(Pokémon)',
				imageLink: 'Pokemon\\978Tatsugiri.webp'
			},
			{
				creatureId: '979',
				name: 'Annihilape',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Annihilape_(Pokémon)',
				imageLink: 'Pokemon\\979Annihilape.webp'
			},
			{
				creatureId: '980',
				name: 'Clodsire',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Clodsire_(Pokémon)',
				imageLink: 'Pokemon\\980Clodsire.webp'
			},
			{
				creatureId: '981',
				name: 'Farigiraf',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Farigiraf_(Pokémon)',
				imageLink: 'Pokemon\\981Farigiraf.webp'
			},
			{
				creatureId: '982',
				name: 'Dudunsparce',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dudunsparce_(Pokémon)',
				imageLink: 'Pokemon\\982Dudunsparce.webp'
			},
			{
				creatureId: '983',
				name: 'Kingambit',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Kingambit_(Pokémon)',
				imageLink: 'Pokemon\\983Kingambit.webp'
			},
			{
				creatureId: '984',
				name: 'Great Tusk',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Great_Tusk_(Pokémon)',
				imageLink: 'Pokemon\\984Great-tusk.webp'
			},
			{
				creatureId: '985',
				name: 'Scream Tail',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Scream_Tail_(Pokémon)',
				imageLink: 'Pokemon\\985Scream-tail.webp'
			},
			{
				creatureId: '986',
				name: 'Brute Bonnet',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Brute_Bonnet_(Pokémon)',
				imageLink: 'Pokemon\\986Brute-bonnet.webp'
			},
			{
				creatureId: '987',
				name: 'Flutter Mane',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Flutter_Mane_(Pokémon)',
				imageLink: 'Pokemon\\987Flutter-mane.webp'
			},
			{
				creatureId: '988',
				name: 'Slither Wing',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Slither_Wing_(Pokémon)',
				imageLink: 'Pokemon\\988Slither-wing.webp'
			},
			{
				creatureId: '989',
				name: 'Sandy Shocks',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sandy_Shocks_(Pokémon)',
				imageLink: 'Pokemon\\989Sandy-shocks.webp'
			},
			{
				creatureId: '990',
				name: 'Iron Treads',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Treads_(Pokémon)',
				imageLink: 'Pokemon\\990Iron-treads.webp'
			},
			{
				creatureId: '991',
				name: 'Iron Bundle',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Bundle_(Pokémon)',
				imageLink: 'Pokemon\\991Iron-bundle.webp'
			},
			{
				creatureId: '992',
				name: 'Iron Hands',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Hands_(Pokémon)',
				imageLink: 'Pokemon\\992Iron-hands.webp'
			},
			{
				creatureId: '993',
				name: 'Iron Jugulis',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Jugulis_(Pokémon)',
				imageLink: 'Pokemon\\993Iron-jugulis.webp'
			},
			{
				creatureId: '994',
				name: 'Iron Moth',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Moth_(Pokémon)',
				imageLink: 'Pokemon\\994Iron-moth.webp'
			},
			{
				creatureId: '995',
				name: 'Iron Thorns',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Thorns_(Pokémon)',
				imageLink: 'Pokemon\\995Iron-thorns.webp'
			},
			{
				creatureId: '996',
				name: 'Frigibax',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Frigibax_(Pokémon)',
				imageLink: 'Pokemon\\996Frigibax.webp'
			},
			{
				creatureId: '997',
				name: 'Arctibax',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Arctibax_(Pokémon)',
				imageLink: 'Pokemon\\997Arctibax.webp'
			},
			{
				creatureId: '998',
				name: 'Baxcalibur',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Baxcalibur_(Pokémon)',
				imageLink: 'Pokemon\\998Baxcalibur.webp'
			},
			{
				creatureId: '999',
				name: 'Gimmighoul',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gimmighoul_(Pokémon)',
				imageLink: 'Pokemon\\999Gimmighoul.webp'
			},
			{
				creatureId: '1000',
				name: 'Gholdengo',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gholdengo_(Pokémon)',
				imageLink: 'Pokemon\\1000Gholdengo.webp'
			},
			{
				creatureId: '1001',
				name: 'Wo-Chien',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Wo-Chien_(Pokémon)',
				imageLink: 'Pokemon\\1001Wo-chien.webp'
			},
			{
				creatureId: '1002',
				name: 'Chien-Pao',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chien-Pao_(Pokémon)',
				imageLink: 'Pokemon\\1002Chien-pao.webp'
			},
			{
				creatureId: '1003',
				name: 'Ting-Lu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ting-Lu_(Pokémon)',
				imageLink: 'Pokemon\\1003Ting-lu.webp'
			},
			{
				creatureId: '1004',
				name: 'Chi-Yu',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Chi-Yu_(Pokémon)',
				imageLink: 'Pokemon\\1004Chi-yu.webp'
			},
			{
				creatureId: '1005',
				name: 'Roaring Moon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Roaring_Moon_(Pokémon)',
				imageLink: 'Pokemon\\1005Roaring-moon.webp'
			},
			{
				creatureId: '1006',
				name: 'Iron Valiant',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Valiant_(Pokémon)',
				imageLink: 'Pokemon\\1006Iron-valiant.webp'
			},
			{
				creatureId: '1007',
				name: 'Koraidon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Koraidon_(Pokémon)',
				imageLink: 'Pokemon\\1007Koraidon.webp'
			},
			{
				creatureId: '1008',
				name: 'Miraidon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Miraidon_(Pokémon)',
				imageLink: 'Pokemon\\1008Miraidon.webp'
			},
			{
				creatureId: '1009',
				name: 'Walking Wake',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Walking_Wake_(Pokémon)',
				imageLink: 'Pokemon\\1009Walking-wake.webp'
			},
			{
				creatureId: '1010',
				name: 'Iron Leaves',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Leaves_(Pokémon)',
				imageLink: 'Pokemon\\1010Iron-leaves.webp'
			},
			{
				creatureId: '1011',
				name: 'Dipplin',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Dipplin_(Pokémon)',
				imageLink: 'Pokemon\\1011Dipplin.webp'
			},
			{
				creatureId: '1012',
				name: 'Poltchageist',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Poltchageist_(Pokémon)',
				imageLink: 'Pokemon\\1012Poltchageist.webp'
			},
			{
				creatureId: '1013',
				name: 'Sinistcha',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Sinistcha_(Pokémon)',
				imageLink: 'Pokemon\\1013Sinistcha.webp'
			},
			{
				creatureId: '1014',
				name: 'Okidogi',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Okidogi_(Pokémon)',
				imageLink: 'Pokemon\\1014Okidogi.webp'
			},
			{
				creatureId: '1015',
				name: 'Munkidori',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Munkidori_(Pokémon)',
				imageLink: 'Pokemon\\1015Munkidori.webp'
			},
			{
				creatureId: '1016',
				name: 'Fezandipiti',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Fezandipiti_(Pokémon)',
				imageLink: 'Pokemon\\1016Fezandipiti.webp'
			},
			{
				creatureId: '1017',
				name: 'Ogerpon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Ogerpon_(Pokémon)',
				imageLink: 'Pokemon\\1017Ogerpon.webp'
			},
			{
				creatureId: '1018',
				name: 'Archaludon',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Archaludon_(Pokémon)',
				imageLink: 'Pokemon\\1018Archaludon.webp'
			},
			{
				creatureId: '1019',
				name: 'Hydrapple',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Hydrapple_(Pokémon)',
				imageLink: 'Pokemon\\1019Hydrapple.webp'
			},
			{
				creatureId: '1020',
				name: 'Gouging fire',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Gouging_Fire_(Pokémon)',
				imageLink: 'Pokemon\\1020Gouging-fire.webp'
			},
			{
				creatureId: '1021',
				name: 'Raging bolt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Raging_Bolt_(Pokémon)',
				imageLink: 'Pokemon\\1021Raging-bolt.webp'
			},
			{
				creatureId: '1022',
				name: 'Iron boulder',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Boulder_(Pokémon)',
				imageLink: 'Pokemon\\1022Iron-boulder.webp'
			},
			{
				creatureId: '1023',
				name: 'Iron crown',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Iron_Crown_(Pokémon)',
				imageLink: 'Pokemon\\1023Iron-crown.webp'
			},
			{
				creatureId: '1024',
				name: 'Terapagos',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Terapagos_(Pokémon)',
				imageLink: 'Pokemon\\1024Terapagos.webp'
			},
			{
				creatureId: '1025',
				name: 'Pecharunt',
				originGame: 'Pokémon',
				wikiLink: 'https://bulbapedia.bulbagarden.net/wiki/Pecharunt_(Pokémon)',
				imageLink: 'Pokemon\\1025Pecharunt.webp'
			}
		]
	});
}
