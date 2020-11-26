
let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);

let genres = queryObject.get("id");


let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"


let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genres}`

fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (data){
        console.log(data);
        let infoGeneros = data.results 
        let generos = document.querySelector('.generos');
        for (let i=0; i<length; i++){
            generos.innerHTML += 
                            `<h2></h2>
                            <article class="generos">
                            <a href="detallepelicula.html?id=${infoGeneros[i].id}">
                                <div class="zoom">
                                    <img src="https://image.tmdb.org/t/p/w500${infoGeneros[i].poster_path}" alt="${info[i].title}" >
                                     <h3>${infoGeneros[i].title}</h3>
                                </div>
                             </a>
                             </article>`

                            }

                        })
        
    .catch (function (error){
        console.log(error);
    })


    
  

 