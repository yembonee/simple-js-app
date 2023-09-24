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

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        let ulPokemon = document.querySelector(".pokemon-list");

        let listItem = document.createElement("li");

        let button = document.createElement("button");

        button.innerText = pokemon.name;
        button.classList.add("button-class");

        listItem.appendChild(button);
        
        ulPokemon.appendChild(listItem);

        button.addEventListener("click", function(event){
            showDetails(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    }
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    }
);