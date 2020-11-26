
let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);

let id = queryObject.get("id");


let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"


let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${id}`

fetch (url)
    .then(function (response){
        return response.json()
    })
    .then (function (data){
        
       let infoGeneros = data.results 
       console.log(infoGeneros)
        let generos = document.querySelector('.generos');
        
             for (let i=0; i<8; i++){
                         let pelicula = `<h2></h2>
                         <article class="peliculas">
                         <a href="detallepelicula.html?id=${infoGeneros[i].id}">
                             <div class="zoom">
                                 <img src="https://image.tmdb.org/t/p/w500${infoGeneros[i].poster_path}" alt="${infoGeneros[i].title}" >
                                  <h3>${infoGeneros[i].title}</h3>
                             </div>
                          </a>
                          </article>`;
                          generos.innerHTML += pelicula 
             }
          
    })  
    .catch (function (error){
        console.log(error);
    })


    
  

 