
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=7b1d579cd6ba8b41cc1f3f375e375cb5`

fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (genres){

        let genre = genres.genres
        let generos = document.querySelector('.genre');
       console.log(genres);

        for (let i=0; i<genre.length; i++){ 
          generos.innerHTML += 

            `<li>
                <a href="detallegeneros.html">
                     <h1 class="genero">${genre[i].name} </h1> 
                     <img src="img/generos_img/${genre[i].name}.jpg" alt="${genre[i].name}">
                    </a>
                  </li>`
    }
})
.catch (function (error){
    console.log(error);
})

