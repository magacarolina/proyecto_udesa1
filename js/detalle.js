let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);

let id = queryObject.get('id');


let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;


fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (data){
            let titulo = document.querySelector('h1');
            let poster = document.querySelector('.background');
            let descripcion = document.querySelector('.description');

            //let genero = document.querySelector('.genero')
            //for (genero=0; genero<length; genero++){ 
                //genero.innerText = data.genres;}
            
            let estreno = document.querySelector('.estreno')
            let estado = document.querySelector ('.estado')

            //let production = document.querySelector('.produccion')
            //for (production=0; production<length; production++){
                //production.innerText = data.production_companies.name ;}

            let puntuacion = document.querySelector('.puntuacion')

            titulo.innerText = data.title;
            descripcion.innerText = data.overview ;
            estreno.innerText = data.release_date ;
            estado.innerText = data.status ; 
            puntuacion.innerText = data.vote_average ;
            document.body.style.backgroundImage= "url('https://image.tmdb.org/t/p/w500${info[i].backdrop_path}')";
            
    })
    .catch (function (error){
        console.log(error);
    })
   

