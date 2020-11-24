
const search=location.search
const searchString=new URLSearchParams (search)
let resultadoSearch=searchString.get("keywords")

let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5" 

let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=es-ES&query=${resultadoSearch}&page=1&include_adult=false`


fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (data){

        let info = data.results 
        let movies = document.querySelector('.resultados');
console.log(info)

info.forEach(peliculas => {
    if(peliculas.media_type=="movie")
    movies.innerHTML += 
    `<article class="pelicula">
    <a href="detallepelicula.html?id=${peliculas.id}">
        <div class="zoom">
            <img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="${peliculas.title}" >
             <h3>${peliculas.title}</h3>
        </div>
     </a>
     </article>`;

     if(peliculas.media_type == "tv")
     movies.innerHTML += 
     `<article class="pelicula">
     <a href="detalleseries.html?id=${peliculas.id}">
         <div class="zoom">
             <img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="${peliculas.title}" >
              <h3>${peliculas.title}</h3>
         </div>
      </a>
      </article>`
});
})
        
    .catch (function (error){
        console.log(error);
    })