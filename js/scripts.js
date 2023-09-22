let pokemonRepository = ( function() {
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
    ]
    // allows the ability to add/push a pokemon into the poemonList array
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    // will return the pokemonList array
    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    }
})();

// Makings sure the function above works, by calling it inside of console.

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Raichu", height: 0.8, type: "Electric", nationalNum: 26});
console.log(pokemonRepository.getAll());

// forEach loop to iterate through pokemon in pokemonList

pokemonRepository.getAll().forEach(function(pokemon){ 
        if (pokemon.height > 15) {
            // will write pokemon's name and height, special message if big enough.
        document.write(pokemon.name + ` Height: ${pokemon.height} - Wow that's big!`);
        document.write("<br>");
        } else {
        document.write(pokemon.name + ` Height: ${pokemon.height} `);
        document.write("<br>"); 
        }
    }
);