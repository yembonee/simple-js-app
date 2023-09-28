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
            item.types = details.types;
            showModal(item);
        }).catch(function (e) {
            console.error(e);
        });
    }

    // calls the loadDetails function onto the site.
    function showDetails(pokemon) {
        loadDetails(pokemon);
    };

    // function that creates a modal of the pokemon's picture, name, and other attributes when that pokemon's button is pressed.
    function showModal(pokemon) {
        let modalContainer = document.querySelector('#modal-container');
    
        modalContainer.innerHTML = '';
    
        // making a div element with class
        let modal = document.createElement('div');
        modal.classList.add('modal');
    
        //making button element with class and event listener
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'CLOSE';
        closeButtonElement.addEventListener('click', hideModal)
    
        //making h1 tag for pokemon name
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;
    
        //making img element to display the src of the pokemon
        let imgElement = document.createElement('img');
        imgElement.src = pokemon.imageUrl;

        //making p element which shows the content of pokemon
        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + pokemon.height;
    
        //adding the button, img, h1, and p element to the main div element
        modal.appendChild(closeButtonElement);
        modal.appendChild(imgElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
      
        //adding css attribute for the modal so when it is clicked, it becomes visible
        modalContainer.classList.add('is-visible');
    
        modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        });
        
      }
    
      let dialogPromiseReject;

      //function to close the modal once opened
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
