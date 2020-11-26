
let queryString = location.search;
let queryObject = new URLSearchParams(queryString);

let genres = queryObject.get("genres");


let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"


let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`


fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (data){


        let info = data.results 
        let movies = document.querySelector('.generos');
       console.log (data);

        for (let i=0; i<12; i++){
            movies.innerHTML += 
                            `<article class="pelicula">
                            <a href="detallegeneros.html?id=${info[i].id}">
                                <div class="zoom">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="${info[i].title}" >
                                     <h3>${info[i].title}</h3>
                                </div>
                             </a>
                             </article>`

                            }

                        })
        
    .catch (function (error){
        console.log(error);
    })


    
  

 