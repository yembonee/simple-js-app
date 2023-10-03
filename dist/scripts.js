let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e?t.push(e):console.log("pokemon is not correct")}function n(){return t}function i(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.other["official-artwork"].front_default,t.height=e.height,t.weight=e.weight,t.types=[];for(var n=0;n<e.types.length;n++)t.types.push(e.types[n].type.name)}).catch(function(t){console.error(t)})}return{add:e,getAll:n,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),o=document.createElement("li");o.classList.add("list-group-item");let a=document.createElement("button");a.classList.add("btn","btn-primary","btn-lg"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#pokemonModal");let r=document.createElement("div");r.innerText=e.name;let p=document.createElement("img");p.classList.add("pokemonImage"),p.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${e.id}.gif`,a.setAttribute("id",e.id),a.appendChild(r),o.appendChild(a),n.appendChild(o),a.appendChild(p),a.addEventListener("click",function(t){(function t(e){i(e).then(function(){var t;let n,i,o,a,r,p,l;t=e,n=$(".modal-body"),(i=$(".modal-title")).empty(),n.empty(),o=$("<h1>"+t.name+"</h1>"),(a=$('<img class="modal-img" style="width:50%">')).attr("src",t.imageUrl),r=$("<span>Types: "+t.types+"</span>"),p=$("<p>Height: "+t.height+"</p>"),l=$("<p>Weight: "+t.weight+"</p>"),i.append(o),n.append(a),n.append(r),n.append(p),n.append(l)})})(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=1292").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t,n){let i={id:n+1,name:t.name,imageUrl:t.imageUrl,detailsUrl:t.url};e(i),console.log(i)})}).catch(function(t){console.error(t)})},loadDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});