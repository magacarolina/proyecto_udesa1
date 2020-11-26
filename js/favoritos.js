

const storage = sessionStorage.getItem('favoritos');

if(storage === null){
    sessionStorage.setItem('favoritos',"[]")
}

let container = document.querySelector('.favoritos')
let storageJs = JSON.parse(storage)

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
         <button class="botonCorazon" onclick="sacarDeFavoritos(${respuestas.id})">♥</button>
         </article>`;
    
        container.innerHTML += movies;
    })
    .catch(error=>console.log(error)); })


    function sacarDeFavoritos(sacar){ }