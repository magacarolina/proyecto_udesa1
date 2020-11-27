
let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);

let searchData = queryObject.get('searchData'); 
let mediaType = queryObject.get('mediaType'); 
let apiKey = '7b1d579cd6ba8b41cc1f3f375e375cb5'


if(mediaType == "movie"){

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchData}&page=1&include_adult=false` 

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
        let info = data.results 
        let movies = document.querySelector('.resultados');
        console.log(data);
            console.log(movies);

            for (let i = 0; i < info.length ; i++){
                movies.innerHTML += `<article class="pelicula">
                <div class="divbusqueda"><div class="zoom">
                            <a href="detallepelicula.html?id=${info[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="" >
                               <h3>${info[i].title}</h3>
                               </div>
                            </a>
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

            for (let i = 0; i < info.length; i++) {
                movies.innerHTML += `<article class="busqueda">
                <div class="divbusqueda"><div class="zoom"> 
                <a href="detalleseries.html?id=${info[i].id}" class="btn btn-primary">
                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">   
                    
                     
                     <h3>${info[i].name}</h3>
                     
                    </div></a></div>
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

       for (let i = 0; i < info.length; i++) {
           movies.innerHTML += `<article class="pelicula">
           <div class="divbusqueda">
           <div class="zoom">
                       <a href="detallepelicula.html?id=${info[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="" >
                                <h3>${info[i].title}</h3>
                            </div>
                       </a>
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
                    movies.innerHTML += `<article class="pelicula">
                    <div class="divbusqueda">
                    <div class="zoom">
                                 <a href="detallepelicula.html?id=${info[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="" >
                                        <h3>${info[i].title}</h3>
                                     </div>
                                </a>
                    </div>
                                 </article>`
                } else if (info[i].media_type == "tv"){
                    movies.innerHTML += `<article class="busqueda">
                    <div class="divbusqueda">
                    <div class="zoom">
                     <a href="detalleseries.html?id=${info[i].id}" class="btn btn-primary">
                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">    
                        
                         <h3>${info[i].name}</h3>
                         
                        </div></a></div>
                    </article>`
                } else {
                    movies.innerHTML += `<article class="pelicula">
                    <div class="divbusqueda">
                    <div class="zoom">
                                 <a href="detallepelicula.html?id=${info[i].id}">
                                         <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="" >
                                         <h3>${info[i].title}</h3>
                                    </div>
                                 </a>
                    </div>
                                 </article>`
                }
            }

        })
        .catch(function (error) {
            console.log(error);
        })
}