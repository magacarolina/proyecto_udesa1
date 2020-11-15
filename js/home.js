let pelicula = document.querySelector('.pelicula')


fetch ('https://api.themoviedb.org/3/trending/movie/week?api_key=7b1d579cd6ba8b41cc1f3f375e375cb5')
.then(datos => datos.json())
.then(respuesta =>{
    let movies = ``
        respuesta.results.forEach (pelicula => {
            movies += `<article class="pelicula">
            <a href="detallepelicula.html">
                <div class="zoom">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" />
                <h3>${pelicula.name}</h3>
    </div>
</a>
        </article>`
        });
    pelicula.innerHTML = movies;
})     
.catch (error => console.log (error))


