let pokemonList = [
    {
        name: "Abra",
        height: 0.9,
        type: "psychic",
        nationalNum: 63
    }, 
    {
        name: "Scyther", 
        height: 1.5, 
        type: ["bug", "flying"], 
        nationalNum: 123}, 
    {
        name: "Umbreon", 
        height: 1.0, 
        ype: "dark", 
        nationalNum: 197},
    {
        name: "Machop", 
        height: 0.8, 
        type: "fighting", 
        nationalNum: 180},
    {
        name: "Chimchar", 
        height: 0.5, 
        type: "fire", 
        nationalNum: 390},
    {
        name: "Cubone", 
        height: 0.4, 
        type: "ground", 
        nationalNum: 104},
    {
        name: "Infernape", 
        height: 1.2, 
        type: ["fire", "fighting"], 
        nationalNum: 392},
    {
        name: "Gyarados", 
        height: 21.3, 
        type: ["water", "flying"], 
        nationalNum: 130},
    {
        name: "Mewtwo", 
        height: 2.0, 
        type: "psychic", 
        nationalNum: 150},
    {
        name: "Vaporeon",
        height: 1.0, 
        type: "water", 
        nationalNum: 134
    }
];

// for loop to iterate through pokemon in pokemonList

// for (let i = 0; i <pokemonList.length; i++) {
//     if (pokemonList[i].height > 15) {
//         document.write(pokemonList[i].name + ` Height: ${pokemonList[i].height} - Wow that's big!`);
//         document.write("<br>");
//     } else {
//         document.write(pokemonList[i].name + ` Height: ${pokemonList[i].height} `);
//         document.write("<br>"); 
//     }
// }

// forEach loop to iterate through pokemon in pokemonList

pokemonList.forEach(function(pokemon) {
        if (pokemon.height > 15) {
        document.write(pokemon.name + ` Height: ${pokemon.height} - Wow that's big!`);
        document.write("<br>");
        } else {
        document.write(pokemon.name + ` Height: ${pokemon.height} `);
        document.write("<br>"); 
        }
    }   
)