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

            titulo.innerText = data.title;
            poster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`
            descripcion.innerText = data.overview ;
            
    })
    .catch (function (error){
        console.log(error);
    })
   


