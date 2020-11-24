let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);

let id = queryObject.get('id');


let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;


const storage = sessionStorage.getItem('favoritos');
if(storage === null){
    sessionStorage.setItem('favoritos','[]')
}

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

        titulo.innerText = data.title;
        descripcion.innerText = data.overview ;
        estreno.innerText = data.release_date ;
        estado.innerText = data.status ; 
        puntuacion.innerText = data.vote_average ;
        poster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${data.backdrop_path}')`;
    
        
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
   
let url1 = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`

fetch (url1)
.then(function (respuesta){
    return respuesta.json()
})
.then (function (data){

    let review = document.querySelector('.reviews');
        for (let i=0; i<1; i++){
            review.innerText += `${data[i].content}`;
        }
        
    console.log(review);
    })

    .catch (function (error){
        console.log(error);
    })