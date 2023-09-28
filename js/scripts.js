let pokemonRepository = ( function() {
    let pokemonList = [];
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

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            showModal(item);
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon);
    };

    function showModal(pokemon) {
        let modalContainer = document.querySelector('#modal-container');
    
        modalContainer.innerHTML = '';
    
        let modal = document.createElement('div');
        modal.classList.add('modal');
    
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'CLOSE';
        closeButtonElement.addEventListener('click', hideModal)
    
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;
    
        let imgElement = document.createElement('img');
        imgElement.src = pokemon.imageUrl;

        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + pokemon.height;
    
        modal.appendChild(closeButtonElement);
        modal.appendChild(imgElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
      
        modalContainer.classList.add('is-visible');
    
        modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        });
        
      }
    
      let dialogPromiseReject;
      
      function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    
        if(dialogPromiseReject) {
          dialogPromiseReject();
          dialogPromiseReject = null;
        }
      }

      window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }  
      });


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }
})();

pokemonRepository.loadList().then(function() {

    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});
