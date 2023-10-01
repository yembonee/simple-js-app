let pokemonRepository = ( function() {

    // Empty array to fill with the pokemon

    let pokemonList = [];

    // URL source for the pokemon and their attributes
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1292';

    // allows the ability to add/push a pokemon into the poemonList array
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon //&&
            //"detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct")
        }
    }

    // will return the pokemonList array
    function getAll() {
        return pokemonList;
    }

    //function to add a pokemon to the list
    function addListItem(pokemon) {
        let ulPokemonList = document.querySelector(".pokemon-list");

        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

        let pokemonButton = document.createElement("button");
        pokemonButton.innerText = pokemon.name;
        pokemonButton.classList.add("btn", "btn-primary", "btn-lg");
        pokemonButton.setAttribute("data-toggle", "modal");
        pokemonButton.setAttribute("data-target", "#pokemonModal");

        listItem.appendChild(pokemonButton);
        ulPokemonList.appendChild(listItem);
        pokemonButton.addEventListener("click", function (e) {
            showDetails(pokemon);
        });
    }

    // function that creates a modal of the pokemon's picture, name, 
    //and other attributes when that pokemon's button is pressed.
    function showModal(pokemon) {

        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        //let modalHeader = $(".modal-header");
    
        modalTitle.empty();
        modalBody.empty();
    
        let nameElement = $('<h1>' + pokemon.name + "</h1>");
    
        let imageElement = $('<img class="modal-img" style="width:50%">');
        imageElement.attr("src", pokemon.imageUrl);
    
        let heightElement = $('<p>' + "Height: " + pokemon.height + "</p>");
    
        let weightElement = $('<p>' + "Weight: " + pokemon.weight + '</p>');
    
        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
    }

    // function that loads the object in the console
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    
    // function that allows the showModal() function to be called
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    // calls the loadDetails function onto the site.
    function showDetails(item) {
        loadDetails(item).then(function() {
            showModal(item)
        });
    };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });

});
