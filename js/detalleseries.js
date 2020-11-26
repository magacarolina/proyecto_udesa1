let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);

let id = queryObject.get('id');


let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;


fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (data){
        console.log(data);
        let titulo = document.querySelector('h1');
        let poster = document.querySelector('.container');
        let descripcion = document.querySelector('.description');
        let genero = document.querySelector('.genero');
        for (let i=0; i<data.genres.length; i++){ 
            genero.innerText += ` ${data.genres[i].name}`;
        } 
        let estreno = document.querySelector('.estreno')
        let estado = document.querySelector ('.estado')    
        let puntuacion = document.querySelector('.puntuacion')
        let temporadas = document.querySelector('.temporadas')

        titulo.innerText = data.name;
        descripcion.innerText = data.overview ;
        estreno.innerText = data.first_air_date ;
        estado.innerText = data.status ; 
        puntuacion.innerText = data.vote_average ;
        poster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${data.backdrop_path}')`;
        temporadas.innerText = data.number_of_seasons ;

        let button = document.querySelector('.favBoton')
        button.addEventListener('click', function(){
            console.log("h");
        
            let storage = sessionStorage.getItem('favoritos')
            let storageJS = JSON.parse(storage)
            if(!storageJS.includes(id)){
                storageJS.push(id);
            }else{
                storageJS = storageJS.filter(function(movie){
                    return movie != id
                })
            }
            sessionStorage.setItem('favoritos', JSON.stringify(storageJS) )})
    })
    .catch (function (error){
        console.log(error);
    })
   
