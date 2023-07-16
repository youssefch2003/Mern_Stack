const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
// // filter  the id is evenly divisible by 3

// const filteredpokemon = pokémon.filter(person=>{
//     return person.id % 3 == 0;
// })
// console.log(filteredpokemon);

// // an array of pokémon objects that are "fire" type
// const filteredpokemon2 = pokémon.filter(person => person.types.includes("fire"));
// console.log(filteredpokemon2);

// // an array of pokémon objects that have more than one type
// const filteredpokemon3 = pokémon.filter(person => person.types.length>=2);
// console.log(filteredpokemon3);
// // an array with just the names of the pokémon

// const pokemonNames = pokémon.map(person => person.name);
// console.log(pokemonNames);
// an array with just the names of pokémon with an id greater than 99
// const filteredpokemon4 = pokémon.filter(person =>{
//     return person.id > 99;
// } );
// const pokemonNames2 = pokémon.map(person => person.name);
// console.log(pokemonNames2);

// an array with just the names of the pokémon whose only type is poison
// const fillterpok = pokémon.filter(one => {
//     return one.types.length == 1 && one.types[0] == "poison";
// })
// const pokname = fillterpok.map(one => one.name)
// console.log(pokname);


// an array containing just the first type of all the pokémon whose second type is "flying"
// const filterpoke = pokémon.filter(one =>{
//     return one.types[1]== "flying";

// })
// // console.log(filterpoke);
// const ft = filterpoke.map(one=> one.name)
// console.log(ft);
// a count of the number of pokémon that are "normal" type
// const filterpoke2 = pokémon.filter(one =>{
//     return one.types.includes("normal");
//     })
// console.log(filterpoke2);
// const coint = filterpoke2.length
// console.log(coint);