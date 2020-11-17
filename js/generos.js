let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=7b1d579cd6ba8b41cc1f3f375e375cb5&language=en-US`

fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (genres){

        let info = genres 
        let generos = document.querySelector('.generos');

        for (let i=0; i<length; i++){
            generos.innerHTML += 
                `  <section class="generos">

                <h2>Géneros</h2>
                
                  <ul>
                        <li>
                          <a href="">
                            <h1>${info[i].name} </h1> 
                          <img src="img/generos img/accion.jpg" alt="accion">
                        </a>
                      </li>
                      </section>`

    }
})
.catch (function (error){
    console.log(error);
})