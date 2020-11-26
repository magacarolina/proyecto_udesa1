

const storageMovie = sessionStorage.getItem('favoritosMovie');
const storageSerie = sessionStorage.getItem('favoritoSerie');

if(storageMovie === null){
    sessionStorage.setItem('favoritosMovie',"[]")
}
if(storageSerie === null){
    sessionStorage.setItem('favoritoSerie',"[]")
}

let containerMovie = document.querySelector('.favoritosPeliculas')
let containerSerie = document.querySelector('.favoritosSeries')

let storageJs = JSON.parse(storageMovie)
if(storageJs.length>0)
containerMovie.innerHTML=""

/*let movies = ''*/

storageJs.forEach(id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=788099c4461681a452d9ee372d586bdd`)
    .then(datos=>datos.json())
    .then(respuestas=>{

        movies = `<article class="pelicula">
        <a href="detallepelicula.html?id=${respuestas.id}">
            <div class="zoom">
                <img src="https://image.tmdb.org/t/p/w500${respuestas.poster_path}" alt="${respuestas.title}" >
                 <h3>${respuestas.title}</h3>
            </div>
         </a>
         <a class="botonCorazonMovie" href="#" id="${respuestas.id}">♥</a>
         </article>`;
    
        containerMovie.innerHTML += movies;

        let botonesPelicula = document.querySelectorAll(".botonCorazonMovie")
        botonesPelicula.forEach( item => {
            item.addEventListener('click', event => {
                let id = event.target.id

                let storageJS = JSON.parse(storageMovie)
                storageJS = storageJS.filter(function(movie){
                    return movie != id
                })

                sessionStorage.setItem('favoritosMovie', JSON.stringify(storageJS))

                location.reload();
            })

        });
    })
    .catch(error=>console.log(error)); })

    storageJs = JSON.parse(storageSerie)
    if(storageJs.length>0)
    containerSerie.innerHTML=""
    
    /*let movies = ''*/
    
    storageJs.forEach(id => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=788099c4461681a452d9ee372d586bdd`)
        .then(datos=>datos.json())
        .then(respuestas=>{
    
            series = `<article class="pelicula">
            <a href="detalleseries.html?id=${respuestas.id}">
                <div class="zoom">
                    <img src="https://image.tmdb.org/t/p/w500${respuestas.poster_path}" alt="${respuestas.title}" >
                     <h3>${respuestas.name}</h3>
                </div>
             </a>
             <a class="botonCorazonSerie" href="#" id="${respuestas.id}">♥</a>
             </article>`;
        
            containerSerie.innerHTML += series;
    
            let botonesSeries = document.querySelectorAll(".botonCorazonSerie")
            botonesSeries.forEach( item => {
                item.addEventListener('click', event => {
                    let id = event.target.id
    
                    let storageJS = JSON.parse(storageSerie)
                    storageJS = storageJS.filter(function(serie){
                        return serie != id
                    })
    
                    sessionStorage.setItem('favoritoSerie', JSON.stringify(storageJS))
    
                    location.reload();
                })
    
            });
        })
        .catch(error=>console.log(error)); })
    
    