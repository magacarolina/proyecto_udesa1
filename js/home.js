















let media = "movie";
let timeWindow = "week";
let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"











let url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}`


fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (data){

        let info = data.results 
        let movies = document.querySelector('.top-peliculas');


        for (let i=0; i<12; i++){
            movies.innerHTML += 
                            `<article class="pelicula">
                            <a href="detallepelicula.html?id=${info[i].id}">
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

   
let url2 = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`       
fetch (url2)
.then(function (respuesta){
 return respuesta.json()
 })
 .then (function (data){
                        
let info = data.results 
let tv = document.querySelector('.top-series');
                        
for (let i=0; i<12; i++){
tv.innerHTML += 
                                                    `<article class="series">
                                                    <a href="detallepelicula.html?id=${info[i].id}">
                                                        <div class="zoom">
                                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="${info[i].title}" >
                                                             <h3>${info[i].name}</h3>
                                                        </div>
                                                     </a>
                                                     </article>`
                        
                                                    }
                        
                                                })

.catch (function (error){
console.log(error);
 })

let url3 = `https://api.themoviedb.org/3/movie/top_rated?api_key=7b1d579cd6ba8b41cc1f3f375e375cb5&language=en-US&page=1
`;       
fetch (url3)
.then(function (respuesta){
 return respuesta.json()
 })
.then (function (data){
                        
let info = data.results 
let person = document.querySelector('.top-rated');
                        
for (let i=0; i<12; i++){
person.innerHTML += 
                                                    `<article class="pelicula">
                                                    <a href="detallepelicula.html?id=${info[i].id}">
                                                        <div class="zoom">
                                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="${info[i].original_title}" >
                                                             <h3>${info[i].original_title}</h3>
                                                        </div>
                                                     </a>
                                                     </article>`
                        
                                                    }
                        
                                                })

.catch (function (error){
console.log(error);
 })

 