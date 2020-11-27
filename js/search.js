
// const search=location.search
// const searchString=new URLSearchParams (search)
// let resultadoSearch=searchString.get("keywords")

// let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5" 

// let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=es-ES&query=${resultadoSearch}&page=1&include_adult=false`


// fetch (url)
//     .then(function (respuesta){
//         return respuesta.json()
//     })
//     .then (function (data){
//         let info = data.results 
//         let movies = document.querySelector('.resultados')
//         let gif = document.querySelector(".loadingGif")
//         gif.style.display="none";

//         info.forEach(peliculas => {
//             if(peliculas.media_type=="movie")
//             movies.innerHTML += 
//             `<article class="pelicula">
//             <a href="detallepelicula.html?id=${peliculas.id}">
//                 <div class="zoom">
//                     <img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="${peliculas.title}" >
//                     <h3>${peliculas.title}</h3>
//                 </div>
//             </a>
//             </article>`;

//             if(peliculas.media_type == "tv")
//             movies.innerHTML += 
//             `<article class="pelicula">
//             <a href="detalleseries.html?id=${peliculas.id}">
//                 <div class="zoom">
//                     <img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="${peliculas.title}" >
//                     <h3>${peliculas.title}</h3>
//                 </div>
//             </a>
//             </article>`
//          });
// })  
        
//     .catch (function (error){
//         console.log(error);
//     })

//1 Obtener la queryString
let queryString = window.location.search;

//2 Transformarla en un objeto literal
let queryObject = new URLSearchParams(queryString);

//3 Obtener EL dato para completar el end point.
let searchData = queryObject.get('searchData'); //Cambia segun la url
let mediaType = queryObject.get('mediaType'); //Cambia segun la url
let apiKey = '7b1d579cd6ba8b41cc1f3f375e375cb5'


if(mediaType == "movie"){

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchData}&page=1&include_adult=false` //Viene de la API de TMDB

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
        let info = data.results 
        let movies = document.querySelector('.resultados');
        console.log(data);
            console.log(movies);

            for (let i = 0; i < 4; i++){
                movies.innerHTML += `<article class="busqueda">
                                    <div class="divbusqueda">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                           
                                                <a href="detallepelicula.html?id=${info[i].id}" class="btn btn-primary">${info[i].title}</a>
                                        
                                        </div>
                                    </article>` 
            }

        })
        .catch(function (error) {
            console.log(error);
        })

}

if(mediaType == "tv"){

    let url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${searchData}&page=1&include_adult=false` //Viene de la API de TMDB

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
            //Aca operamos con los datos.
            console.log(data);

            let info = data.results //Esto es un array.
            let movies = document.querySelector('.resultados');
            console.log(movies);

            for (let i = 0; i < 4; i++) {
                movies.innerHTML += `<article class="busqueda">
                                    <div class="divbusqueda">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                      <a href="detalleseries.html?id=${info[i].id}" class="btn btn-primary">${info[i].name}</a>
                                          
                                        </div>
                                    </article>`
            }

        })
        .catch(function (error) {
            console.log(error);
        })
}

if(mediaType == "person"){

   let url =`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&page=${searchData}1&include_adult=false`
   fetch(url)
   .then(function (respuestas) {
       return respuestas.json()
   })
   .then(function (data) {
       //Aca operamos con los datos.
       console.log(data);

       let info = data.results //Esto es un array.
       let movies = document.querySelector('.resultados');
       console.log(movies);

       for (let i = 0; i < 4; i++) {
           movies.innerHTML += `<article class="busqueda">
                               <div class="divbusqueda">
                                   <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                         
                                    <a href="detallepelicula.html?id=${info[i].id}" class="btn btn-primary">${info[i].title}</a>
                                     
                                   </div>
                               </article>`
       }

   })
   .catch(function (error) {
       console.log(error);
   })
}


if(mediaType == "all"){
    //fetch a multisearch

    let url = ` https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchData}&page=1&include_adult=false` //Viene de la API de TMDB

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
            //Aca operamos con los datos.
            console.log(data);

            let info = data.results //Esto es un array.
            let movies = document.querySelector('.resultados');
            console.log(movies);

            for (let i = 0; i < info.length; i++) {
                if(info[i].media_type == "movie"){
                    movies.innerHTML += `<article class="busqueda">
                    <div class="divbusqueda">
                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                           
                             
                         <a href="detallepelicula.html?id=${info[i].id}" class="btn btn-primary">${info[i].title}</a>
                          
                        </div>
                    </article>`
                } else if (info[i].media_type == "tv"){
                    movies.innerHTML += `<article class="busqueda">
                    <div class="divbusqueda">
                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                           
                             
                         <a href="detalleseries.html?id=${info[i].id}" class="btn btn-primary">${info[i].name}</a>
                          
                        </div>
                    </article>`
                } else {
                    movies.innerHTML += `<article class="busqueda">
                    <div class="divbusqueda">
                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                           
                             
                         <a href="detallepelicula.html?id=${info[i].id}" class="btn btn-primary">${info[i].title}</a>
                          
                        </div>
                    </article>`
                }
            }

        })
        .catch(function (error) {
            console.log(error);
        })
}